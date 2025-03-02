import { Text } from "@react-three/drei";
import { useCountdown } from "../helpers/useCountdown";
import React from "react";
import * as THREE from "three";

const ReleaseTimer = () => {
  const getTomorrowDate = React.useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  }, []);
  const timeleft = useCountdown(getTomorrowDate);

  return (
    <>
      <Text
        color="white"
        position={[0, -1, 4]}
        letterSpacing={1}
        castShadow
        fontSize={1.5}
        fontWeight={900}
        fillOpacity={0.5}
      >
        {timeleft}
      </Text>
    </>
  );
};

export default ReleaseTimer;
