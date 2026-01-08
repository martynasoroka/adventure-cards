import { X } from 'lucide-react';
import { AdventureTask } from '../types';

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
  showSuccess
}: TaskModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
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

        <div className={`p-6 transition-colors duration-500 ${showSuccess ? 'bg-green-50' : 'bg-white'}`}>
          {showSuccess && (
            <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg text-green-800 text-center font-medium animate-fadeIn">
              Great job! Adventure completed!
            </div>
          )}

          <h2 className="text-2xl font-bold text-gray-800 mb-3">{task.title}</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">{task.description}</p>

          <div className="flex flex-col gap-3">
            <button
              onClick={onDone}
              disabled={showSuccess}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                showSuccess
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              Done
            </button>

            <button
              onClick={onSaveForLater}
              disabled={showSuccess}
              className="w-full py-3 px-4 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save for Later
            </button>

            <button
              onClick={onHide}
              disabled={showSuccess}
              className="w-full py-3 px-4 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Don't Show This Task Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
