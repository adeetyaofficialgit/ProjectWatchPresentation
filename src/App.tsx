import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Scene } from "./components/Scene";
import { CameraControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 1, 15] }} shadows>
        <CameraControls />
        {/* <Header> */}
        <Scene />
        {/* <Footer> */}
      </Canvas>
    </>
  );
}

export default App;
