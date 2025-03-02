import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
export const frontFaceStandingDimensions = [0, 0, -0.01];
export const sideFaceSleepingDimensions = [0.01, 0, -0.01];

const PortalScene = (props: { isActive: boolean }) => {
  const { scene } = useGLTF(`/ProjectWatchPresentation/watchModeldraft2.glb`);
  const envTexture = useTexture(`/ProjectWatchPresentation/starsDark2.JPG`);

  // DirectionLight helpers
  const lightRef = useRef(new THREE.DirectionalLight());
  const lightRef2 = useRef(new THREE.DirectionalLight());

  useFrame((state) => {
    const { clock } = state;
    lightRef.current.position.set(
      Math.sin(clock.elapsedTime) * 3,
      Math.cos(clock.elapsedTime) * 3,
      lightRef.current.position.z
    );
    lightRef.current.intensity = Math.sin(clock.elapsedTime) * 5;

    // if(isActive){

    // }
  });
  if (props.isActive) {
    console.log(envTexture);
  }

  return (
    <>
      {/* <Environment
        files={"./studioenv.hdr"}
        resolution={1024}
        environmentIntensity={2}
      /> */}
      <mesh>
        <sphereGeometry args={[50, 64, 64]} />
        <meshBasicMaterial map={envTexture} side={THREE.BackSide} />
      </mesh>
      <directionalLight
        position={[0, 0, 0.3]}
        intensity={2}
        castShadow
        ref={lightRef}
      />
      <directionalLight
        position={[0, -3, 0]}
        intensity={5}
        castShadow
        ref={lightRef2}
      />
      <ambientLight intensity={4} />
      <primitive
        object={scene}
        scale={[30, 30, 30]}
        rotation={frontFaceStandingDimensions}
        position={[0, -2, -2]}
      />
    </>
  );
};

useGLTF.preload(`/ProjectWatchPresentation/watchModeldraft2.glb`);
useTexture.preload(`/ProjectWatchPresentation/starsDark2.JPG`);

export default PortalScene;
