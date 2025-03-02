// import SetupHelpers from "../helpers/setup";
import { useEffect, useRef } from "react";
import {
  cameraControlsSelector,
  useAppControls,
} from "../providers/controlsContextProvider";
import Portal from "./Portal";
import ReflectiveBase from "./ReflectiveBase";
import ReleaseTimer from "./ReleaseTimer";

export const Scene = (props: { isReady: boolean }) => {
  const cameraRef = useAppControls(cameraControlsSelector);
  const initialDolly = useRef(0);

  useEffect(() => {
    if (!cameraRef.current || !props.isReady) return;
    if (initialDolly.current === 0) {
      cameraRef.current.dolly(12, true);
      initialDolly.current = 1;
    }
  }, [cameraRef.current]);

  return (
    <>
      {/* <SetupHelpers /> */}
      <Portal />
      <ReflectiveBase />
      <ReleaseTimer />
    </>
  );
};
