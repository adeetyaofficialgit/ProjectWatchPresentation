// This is a standard snippet for all projects.

import { useControls } from "leva";
import { Perf } from "r3f-perf";
import * as THREE from "three";

const SetupHelpers = () => {
  const helperControls = useControls("Helpers", {
    axes: false,
    grid: false,
    polar: false,
    camera: false,
    r3f: true,
  });

  return (
    <>
      <Perf
        position={"top-left"}
        style={{ display: helperControls.r3f ? "block" : "none" }}
      />
      <axesHelper args={[5]} visible={helperControls.axes} />
      <gridHelper
        args={[100, 100, "red", "darkgray"]}
        visible={helperControls.grid}
      />
      <polarGridHelper args={[20, 8, 4]} visible={helperControls.polar} />
      <cameraHelper
        args={[new THREE.PerspectiveCamera()]}
        visible={helperControls.camera}
      />
    </>
  );
};

export default SetupHelpers;
