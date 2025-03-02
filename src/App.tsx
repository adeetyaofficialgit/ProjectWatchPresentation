import { Canvas } from "@react-three/fiber";
import { Ref, Suspense, useRef, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import LoadingOverlay from "./components/LoadingOverlay";
import { Scene } from "./components/Scene";
import { CameraControls } from "@react-three/drei";
import { ControlsProvider } from "./providers/controlsContextProvider";

function App() {
  const [isReady, setIsReady] = useState(false);
  const cameraRef = useRef<CameraControls>(null);

  return (
    <>
      <Layout>
        <div className="flex flex-1">
          <LoadingOverlay isReady={isReady} onReady={() => setIsReady(true)} />
          <Suspense fallback={null}>
            <Canvas camera={{ position: [0, 1.5, 25] }} shadows>
              <CameraControls ref={cameraRef} />
              <ControlsProvider cameraControlsRef={cameraRef}>
                <Scene isReady={isReady} />
              </ControlsProvider>
            </Canvas>
          </Suspense>
        </div>
      </Layout>
    </>
  );
}

export default App;
