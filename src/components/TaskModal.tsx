import { X } from "lucide-react";
import { AdventureTask } from "../types";
import Background from "./assets/background.png";

interface TaskModalProps {
  task: AdventureTask;
  isOpen: boolean;
  onClose: () => void;
  onDone: () => void;
  onSaveForLater: () => void;
  onHide: () => void;
  showSuccess: boolean;
}

export default function TaskModal({
  task,
  isOpen,
  onClose,
  onDone,
  onSaveForLater,
  onHide,
  showSuccess,
}: TaskModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center md:p-4 animate-fadeIn"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="mx-4 relative rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-brandBeige rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="relative h-64 overflow-hidden">
          <img
            src={task.image}
            alt={task.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div
          className={`p-6 transition-colors duration-500 ${showSuccess ? "bg-green-50" : "bg-brandBeige"}`}
        >
          {showSuccess && (
            <div className="mb-4 p-4 bg-brandGreen rounded-lg text-brandBeige text-center text-lg font-medium animate-fadeIn">
              Great job! Adventure completed!
            </div>
          )}

          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            {task.title}
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {task.description}
          </p>

          <div className="flex flex-col gap-3">
            <button
              onClick={onDone}
              disabled={showSuccess}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                showSuccess
                  ? "bg-brandGreen text-white cursor-not-allowed"
                  : "bg-brandGreen text-white hover:opacity-80"
              }`}
            >
              Done
            </button>

            <button
              onClick={onSaveForLater}
              disabled={showSuccess}
              className="w-full py-3 px-4 bg-brandOrange text-white rounded-lg font-medium hover:bg-brandBrown transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save for Later
            </button>

            <button
              onClick={onHide}
              disabled={showSuccess}
              className="w-full py-3 px-4 bg-brandBlue text-white rounded-lg font-medium hover:opacity-80 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Don't Show This Task Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
