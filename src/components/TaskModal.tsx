import { X } from "lucide-react";
import { AdventureTask } from "../types";
import { Illustrations } from "./assets/illustrations";

interface TaskModalProps {
  task: AdventureTask;
  isOpen: boolean;
  onClose: () => void;
  onDone: () => void;
  onSaveForLater: () => void;
  onHide: () => void;
  showSuccess: boolean;
}

const getIllustration = (imageId: string) => {
  const illustrationMap: { [key: string]: React.ReactNode } = {
    "hidden-path": Illustrations.hiddenPath,
    "tree-meditation": Illustrations.treeMediation,
    "water-connection": Illustrations.waterConnection,
    "wildlife-spotting": Illustrations.wildlifeSpotting,
    "barefoot-walking": Illustrations.barefootWalking,
    "cloud-watching": Illustrations.cloudWatching,
    "natural-colors": Illustrations.naturalColorsHunt,
    "sunset-walk": Illustrations.sunsetWalk,
    "stone-stack": Illustrations.stoneStack,
    "nature-sounds": Illustrations.natureSounds,
    "hill-climb": Illustrations.hillClimb,
    "leaf-collection": Illustrations.leafCollection,
  };
  return illustrationMap[imageId];
};

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

  const illustration = getIllustration(task.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center md:p-4 animate-fadeIn bg-brandGreen">
      <div className="mx-4 relative rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-brandBeige rounded-full shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="relative h-64 overflow-hidden bg-white">
          <div className="w-full h-full">
            {illustration}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <div
          className={`p-6 transition-colors duration-500 ${
            showSuccess ? "bg-green-50" : "bg-brandBeige"
          }`}
        >
          {showSuccess && (
            <div className="mb-4 p-4 bg-brandGreen/80 rounded-lg text-white text-center text-lg font-medium animate-fadeIn">
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
