import { useState, useEffect } from "react";
import { Shuffle } from "lucide-react";
import Cover from "./components/assets/deck-cover.png";
import Background from "./components/assets/background.png";
import TaskModal from "./components/TaskModal";
import { adventureTasks } from "./data/adventureTasks";
import { AdventureTask, TaskState } from "./types";

function App() {
  const [taskStates, setTaskStates] = useState<TaskState>(() => {
    const saved = localStorage.getItem("taskStates");
    return saved ? JSON.parse(saved) : {};
  });
  const [currentTask, setCurrentTask] = useState<AdventureTask | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
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

  const getAvailableTasks = () => {
    return adventureTasks.filter(
      (task) => !taskStates[task.id] || taskStates[task.id] === "available",
    );
  };

  const pickRandomTask = () => {
    if (savedTaskId) {
      const savedTask = adventureTasks.find((task) => task.id === savedTaskId);
      if (savedTask) {
        setCurrentTask(savedTask);
        setSavedTaskId(null);
        setIsModalOpen(true);
        setShowSuccess(false);
        return;
      }
    }

    const availableTasks = getAvailableTasks();
    if (availableTasks.length === 0) {
      alert("You've completed all adventures! Resetting...");
      setTaskStates({});
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableTasks.length);
    const selectedTask = availableTasks[randomIndex];
    setCurrentTask(selectedTask);
    setIsModalOpen(true);
    setShowSuccess(false);
  };

  // Trigger shuffle animation, then open the modal after it completes
  const handlePickClick = () => {
    if (isShuffling) return;
    setIsShuffling(true);
    setTimeout(() => {
      setIsShuffling(false);
      pickRandomTask();
    }, 620); // matches shuffleDeck animation duration (0.6s) + tiny buffer
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
    if (currentTask) {
      setSavedTaskId(currentTask.id);
      setIsModalOpen(false);
      setTimeout(() => {
        pickRandomTask();
      }, 300);
    }
  };

  const handleHide = () => {
    if (currentTask) {
      setTaskStates((prev) => ({
        ...prev,
        [currentTask.id]: "hidden",
      }));
      setIsModalOpen(false);
      setTimeout(() => {
        pickRandomTask();
      }, 300);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setShowSuccess(false);
  };

  const availableCount = getAvailableTasks().length;

  return (
    <div className="md:flex min-h-screen bg-brandBrown pt-12 justify-center">
      <div className="relative md:min-h-screen flex flex-col items-center justify-center md:pt-8 md:pb-20 px-4 max-w-3xl w-full text-center md:space-y-8 space-y-4">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-brandBeige">
            Shuffle your adventure for today
          </h1>
          <p className="text-md text-brandBeige font-semibold pt-4">
            {availableCount} adventure{availableCount !== 1 ? "s" : ""}{" "}
            available
          </p>
        </div>

        <div className="relative group animate-scaleIn rounded-2xl p-4 bg-brandGreen/80">
          {/* Deck image — animates with a shuffle wiggle when picked */}
          <div className="mb-4">
            <img
              src={Cover}
              alt="Deck of cards"
              className={`w-150 h-150 mx-auto object-cover rounded-xl transition-all ${
                isShuffling ? "animate-shuffleDeck" : ""
              }`}
            />
          </div>

          <button
            onClick={handlePickClick}
            disabled={isShuffling}
            className="w-full py-4 px-8 bg-brandOrange/60 text-brandBeige rounded-xl font-semibold text-lg hover:bg-brandOrange/80 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            <Shuffle size={24} className={isShuffling ? "animate-spin" : ""} />
            {isShuffling ? "Shuffling..." : "Pick Your Adventure"}
          </button>
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
  );
}

export default App;
