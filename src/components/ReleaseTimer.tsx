import { Text } from "@react-three/drei";
import { useCountdown } from "../helpers/useCountdown";
import React from "react";

const ReleaseTimer = () => {
  const getTomorrowDate = React.useMemo(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  }, []);
  const timeleft = useCountdown(getTomorrowDate);

  return (
    <>
      <Text color="white" position={[0, 0, 4]} letterSpacing={2} castShadow>
        {timeleft}
      </Text>
    </>
  );
};

export default ReleaseTimer;
