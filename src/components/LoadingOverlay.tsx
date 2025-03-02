import { useProgress } from "@react-three/drei";
import LoadingSpinner from "../assets/loadingSpinner";

const LoadingOverlay = (props: { isReady: boolean; onReady: () => void }) => {
  const { onReady, isReady } = props;
  const { progress, active, item, loaded, total } = useProgress();
  console.log(progress, active, item, loaded, total);

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center bg-black transition-opacity duration-[1000ms] z-50 ${isReady ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="text-white text-center">
        {progress !== 100 && <LoadingSpinner />}
        {progress === 100 && (
          <button
            onClick={() => {
              onReady();
            }}
            className="px-6 py-2 bg-white text-black font-bold rounded-md shadow-lg hover:bg-gray-300 transition"
          >
            Play
          </button>
        )}
      </div>
    </div>
  );
};
export default LoadingOverlay;
