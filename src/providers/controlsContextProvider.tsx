import { CameraControls } from "@react-three/drei";
import { createContext, PropsWithChildren, useContext } from "react";

type ControlsContextType = {
  cameraControlsRef: React.RefObject<CameraControls | null>;
};

const defaultContextValue: ControlsContextType = {
  cameraControlsRef: { current: null },
};
const ControlsContext = createContext(defaultContextValue);

export const ControlsProvider = (
  props: PropsWithChildren<ControlsContextType>
) => {
  return (
    <ControlsContext.Provider
      value={{ cameraControlsRef: props.cameraControlsRef }}
    >
      {props.children}
    </ControlsContext.Provider>
  );
};

export const useAppControls = (
  controlSelector?: (context: ControlsContextType) => any
) => {
  const context = useContext(ControlsContext);

  if (controlSelector) {
    return controlSelector(context);
  }

  if (!context) {
    throw new Error("useControls must be used within a ControlsProvider");
  }
  return context;
};

export const cameraControlsSelector = (context: ControlsContextType) =>
  context.cameraControlsRef;
