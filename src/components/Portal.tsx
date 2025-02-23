// import { Float } from "@react-three/drei";
import {
  CubeCamera,
  MeshPortalMaterial,
  MeshReflectorMaterial,
  PortalMaterialType,
  RoundedBox,
  Sphere,
} from "@react-three/drei";
import PortalScene from "./InsidePortal/PortalScene";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CameraControls } from "@react-three/drei";

const Portal = () => {
  const [active, setActive] = useState(false);
  const portalRef = useRef<PortalMaterialType>(null);
  const cameraRef = useRef<any>(null);

  useFrame((_, delta) => {
    if (portalRef.current) {
      portalRef.current.blend = THREE.MathUtils.lerp(
        portalRef.current.blend,
        active ? 1 : 0,
        delta * 8
      );
    }
  });

  useEffect(() => {
    if (active) {
      cameraRef.current.setLookAt(0, 1.5, 3, 0, 2, 0, true);
    } else {
      cameraRef.current.setLookAt(0, 1.5, 15, 0, 2, 0, true);
    }
  }, [active]);

  return (
    <>
      <CameraControls ref={cameraRef} />
      {/* Actual Portal box */}
      <ambientLight intensity={5} />
      <Sphere args={[10, 4, 4]} position={[0, 5, -25]}>
        <meshStandardMaterial
          emissive={"orange"}
          emissiveIntensity={0.5}
          color="red"
        />
      </Sphere>
      <group position={[0, 2, 0]}>
        <RoundedBox
          args={[6.2, 8.2, 0.01]}
          radius={0.1}
          smoothness={4}
          position={[0, 0, -0.1]}
        >
          <meshPhongMaterial color="white" />
        </RoundedBox>
        <RoundedBox
          args={[6, 8, 0.1]}
          radius={0.1}
          smoothness={4}
          onDoubleClick={() => setActive(!active)}
        >
          <MeshPortalMaterial ref={portalRef}>
            <PortalScene />
          </MeshPortalMaterial>
        </RoundedBox>
      </group>
      {/* Base of Portal which reflects light */}
      <CubeCamera>
        {(texture) => (
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[100, 100]} />
            <MeshReflectorMaterial
              resolution={1024}
              mixBlur={1}
              mixStrength={80}
              roughness={0.5}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#050505"
              metalness={0.5}
              mirror={0.9}
              map={texture}
            />
          </mesh>
        )}
      </CubeCamera>
    </>
  );
};

export default Portal;
