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
      pickRandomTask();
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
    <div className="min-h-screen bg-brandBlue/80 flex items-center justify-center">
      <div className="relative md:min-h-screen flex flex-col items-center justify-center md:p-20 px-4 max-md:py-16 max-w-3xl w-full text-center md:space-y-8 space-y-4">
        <div className="space-y-4 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-brandGreen">
            Shuffle your adventure for today
          </h1>
          <p className="text-md text-brandBeige font-semibold">
            {availableCount} adventure{availableCount !== 1 ? "s" : ""}{" "}
            available
          </p>
        </div>

        <div className="relative group animate-scaleIn rounded-2xl p-4 bg-brandBeige/80">
          <div className="mb-6">
            <img
              src={Cover}
              alt="Deck of cards"
              className="w-150 h-150 mx-auto object-cover rounded-xl"
            />
          </div>

          <button
            onClick={pickRandomTask}
            className="w-full py-4 px-8 bg-brandBrown text-brandBeige rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
          >
            <Shuffle size={24} />
            Pick Your Adventure
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
