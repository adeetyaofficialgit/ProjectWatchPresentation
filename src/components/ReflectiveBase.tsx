import { CubeCamera, MeshReflectorMaterial } from "@react-three/drei";
/* Base of Portal which reflects light */
const ReflectiveBase = () => {
  return (
    <CubeCamera resolution={1024} frames={1}>
      {(texture) => (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
          <planeGeometry args={[100, 100]} />
          <MeshReflectorMaterial
            resolution={1024}
            mixBlur={4}
            mixStrength={100}
            roughness={0.1}
            depthScale={1.2}
            minDepthThreshold={0.2}
            maxDepthThreshold={1.6}
            color="#050505"
            metalness={0.4}
            mirror={0.9}
            map={texture}
          />
        </mesh>
      )}
    </CubeCamera>
  );
};

export default ReflectiveBase;
