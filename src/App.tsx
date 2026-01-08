import { useState, useEffect } from 'react';
import { Shuffle } from 'lucide-react';
import TaskModal from './components/TaskModal';
import { adventureTasks } from './data/adventureTasks';
import { AdventureTask, TaskState } from './types';

function App() {
  const [taskStates, setTaskStates] = useState<TaskState>(() => {
    const saved = localStorage.getItem('taskStates');
    return saved ? JSON.parse(saved) : {};
  });

  const [currentTask, setCurrentTask] = useState<AdventureTask | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [savedTaskId, setSavedTaskId] = useState<string | null>(() => {
    return localStorage.getItem('savedTaskId');
  });

  useEffect(() => {
    localStorage.setItem('taskStates', JSON.stringify(taskStates));
  }, [taskStates]);

  useEffect(() => {
    if (savedTaskId) {
      localStorage.setItem('savedTaskId', savedTaskId);
    } else {
      localStorage.removeItem('savedTaskId');
    }
  }, [savedTaskId]);

  const getAvailableTasks = () => {
    return adventureTasks.filter(
      task => !taskStates[task.id] || taskStates[task.id] === 'available'
    );
  };

  const pickRandomTask = () => {
    if (savedTaskId) {
      const savedTask = adventureTasks.find(task => task.id === savedTaskId);
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
      alert('You\'ve completed all adventures! Resetting...');
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
      setTaskStates(prev => ({
        ...prev,
        [currentTask.id]: 'completed'
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
      setTaskStates(prev => ({
        ...prev,
        [currentTask.id]: 'hidden'
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>

      <div className="relative min-h-screen flex flex-col items-center justify-center p-6">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="space-y-4 animate-fadeIn">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
              Shuffle your adventure for today
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto leading-relaxed">
              Step outside and embrace spontaneity. Each card offers a unique task to make your walk more mindful,
              adventurous, and connected with nature.
            </p>

            <p className="text-sm text-gray-500">
              {availableCount} adventure{availableCount !== 1 ? 's' : ''} available
            </p>
          </div>

          <div className="relative group animate-scaleIn">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <div className="mb-6">
                <img
                  src="https://images.pexels.com/photos/278887/pexels-photo-278887.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Deck of cards"
                  className="w-48 h-48 mx-auto object-cover rounded-xl shadow-lg"
                />
              </div>

              <button
                onClick={pickRandomTask}
                className="w-full py-4 px-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Shuffle size={24} />
                Pick Your Adventure
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 animate-fadeIn">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span>New adventure</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <span>Saved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Completed</span>
            </div>
          </div>
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
