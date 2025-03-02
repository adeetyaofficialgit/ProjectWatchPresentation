// import { Float } from "@react-three/drei";
import {
  CubeCamera,
  MeshPortalMaterial,
  MeshReflectorMaterial,
  PortalMaterialType,
  RoundedBox,
  Sparkles,
  Sphere,
} from "@react-three/drei";
import PortalScene from "./PortalScene";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { CameraControls } from "@react-three/drei";
import {
  cameraControlsSelector,
  useAppControls,
} from "../providers/controlsContextProvider";

const Portal = () => {
  const [active, setActive] = useState<boolean | undefined>(undefined);
  const portalRef = useRef<PortalMaterialType>(null);
  const cameraRef = useAppControls(cameraControlsSelector);

  useFrame((scene, delta) => {
    if (portalRef.current) {
      portalRef.current.blend = THREE.MathUtils.lerp(
        portalRef.current.blend,
        active ? 1 : 0,
        delta * 8
      );
    }
  });

  useEffect(() => {
    if (!cameraRef.current) return;
    if (active == true) {
      cameraRef.current.setLookAt(0, 1.5, 3, 0, 2, 0, true);
    } else if (active == false) {
      cameraRef.current.setLookAt(0, 1.5, 10, 0, 2, 0, true);
    }
  }, [active]);

  return (
    <>
      <ambientLight intensity={5} />
      <group>
        <Sphere args={[13, 4, 4]} position={[0, 5, -25]}>
          <meshStandardMaterial
            emissive={"orange"}
            emissiveIntensity={0.3}
            color="red"
          />
        </Sphere>
      </group>
      {/* Actual Portal box */}
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
            <PortalScene isActive={active || false} />
          </MeshPortalMaterial>
        </RoundedBox>
      </group>
    </>
  );
};

export default Portal;
