import { useState, useEffect } from "react";

export const useCountdown = (targetDate: string | Date) => {
  const calculateTimeLeft = () => {
    const target = new Date(targetDate).getTime(); // Ensure it's a number (timestamp)
    const now = new Date().getTime();
    const diff = Math.max(target - now, 0); // Prevent negative values

    const hours = Math.floor(diff / 3600000)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((diff % 3600000) / 60000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((diff % 60000) / 1000)
      .toString()
      .padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
};
