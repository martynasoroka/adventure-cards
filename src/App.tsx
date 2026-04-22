import { useState, useEffect } from "react";
import { Shuffle } from "lucide-react";
import Cover from "./components/assets/deck-cover.png";
import TaskModal from "./components/TaskModal";
import { adventureTasks } from "./data/adventureTasks";
import { AdventureTask, TaskCategory, TaskState } from "./types";
import { Analytics } from "@vercel/analytics/react";

const CATEGORIES: { id: TaskCategory; label: string; emoji: string }[] = [
  { id: "observe", label: "Observe & Discover", emoji: "🔍" },
  { id: "slow-down", label: "Slow Down & Feel", emoji: "🧘" },
  { id: "elements", label: "Chase the Elements", emoji: "🌦️" },
  { id: "hands-on", label: "Get Hands On", emoji: "🖐️" },
];

function App() {
  const [taskStates, setTaskStates] = useState<TaskState>(() => {
    const saved = localStorage.getItem("taskStates");
    return saved ? JSON.parse(saved) : {};
  });
  const [currentTask, setCurrentTask] = useState<AdventureTask | null>(null);
  const [currentCategory, setCurrentCategory] = useState<TaskCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shufflingCategory, setShufflingCategory] = useState<TaskCategory | null>(null);
  const [savedTaskId, setSavedTaskId] = useState<string | null>(() => {
    return localStorage.getItem("savedTaskId");
  });

  useEffect(() => {
    localStorage.setItem("taskStates", JSON.stringify(taskStates));
  }, [taskStates]);

  useEffect(() => {
    if (savedTaskId) {
      localStorage.setItem("savedTaskId", savedTaskId);
    } else {
      localStorage.removeItem("savedTaskId");
    }
  }, [savedTaskId]);

  const getAvailableTasksForCategory = (category: TaskCategory) => {
    return adventureTasks.filter(
      (task) =>
        task.category === category &&
        (!taskStates[task.id] || taskStates[task.id] === "available"),
    );
  };

  const pickRandomTaskFromCategory = (category: TaskCategory) => {
    if (savedTaskId) {
      const savedTask = adventureTasks.find((task) => task.id === savedTaskId);
      if (savedTask && savedTask.category === category) {
        setCurrentTask(savedTask);
        setCurrentCategory(category);
        setSavedTaskId(null);
        setIsModalOpen(true);
        setShowSuccess(false);
        return;
      }
    }

    const availableTasks = getAvailableTasksForCategory(category);
    if (availableTasks.length === 0) {
      alert("You've completed all adventures in this category! Resetting...");
      const categoryTaskIds = adventureTasks
        .filter((t) => t.category === category)
        .map((t) => t.id);
      setTaskStates((prev) => {
        const next = { ...prev };
        categoryTaskIds.forEach((id) => delete next[id]);
        return next;
      });
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableTasks.length);
    const selectedTask = availableTasks[randomIndex];
    setCurrentTask(selectedTask);
    setCurrentCategory(category);
    setIsModalOpen(true);
    setShowSuccess(false);
  };

  const handlePickClick = (category: TaskCategory) => {
    if (shufflingCategory) return;
    setShufflingCategory(category);
    setTimeout(() => {
      setShufflingCategory(null);
      pickRandomTaskFromCategory(category);
    }, 620);
  };

  const handleDone = () => {
    if (currentTask) {
      setTaskStates((prev) => ({
        ...prev,
        [currentTask.id]: "completed",
      }));
      setShowSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setShowSuccess(false);
      }, 2000);
    }
  };

  const handleSaveForLater = () => {
    if (currentTask && currentCategory) {
      setSavedTaskId(currentTask.id);
      setIsModalOpen(false);
      setTimeout(() => {
        pickRandomTaskFromCategory(currentCategory);
      }, 300);
    }
  };

  const handleHide = () => {
    if (currentTask && currentCategory) {
      setTaskStates((prev) => ({
        ...prev,
        [currentTask.id]: "hidden",
      }));
      setIsModalOpen(false);
      setTimeout(() => {
        pickRandomTaskFromCategory(currentCategory);
      }, 300);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowSuccess(false);
  };

  return (
    <>
      <div className="min-h-screen bg-brandBrown pt-12 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fadeIn text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-brandBeige">
              Shuffle your adventure for today
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CATEGORIES.map((cat) => {
              const availableCount = getAvailableTasksForCategory(cat.id).length;
              const isShuffling = shufflingCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  className="animate-scaleIn rounded-2xl p-4 bg-brandGreen/80"
                >
                  <p className="text-brandBeige font-bold text-lg mb-3 text-center">
                    {cat.emoji} {cat.label}
                  </p>
                  <div className="mb-3">
                    <img
                      src={Cover}
                      alt="Deck of cards"
                      className={`w-full mx-auto object-cover rounded-xl transition-all ${
                        isShuffling ? "animate-shuffleDeck" : ""
                      }`}
                    />
                  </div>
                  <p className="text-brandBeige/80 text-sm mb-3 text-center">
                    {availableCount} adventure{availableCount !== 1 ? "s" : ""} available
                  </p>
                  <button
                    onClick={() => handlePickClick(cat.id)}
                    disabled={!!shufflingCategory}
                    className="w-full py-4 px-8 bg-brandOrange/60 text-brandBeige rounded-xl font-semibold text-lg hover:bg-brandOrange/80 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Shuffle
                      size={24}
                      className={isShuffling ? "animate-spin" : ""}
                    />
                    {isShuffling ? "Shuffling..." : "Pick Your Adventure"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {currentTask && (
          <TaskModal
            task={currentTask}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onDone={handleDone}
            onSaveForLater={handleSaveForLater}
            onHide={handleHide}
            showSuccess={showSuccess}
          />
        )}
      </div>
      <Analytics />
    </>
  );
}

export default App;