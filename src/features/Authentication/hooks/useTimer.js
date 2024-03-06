import { useEffect, useState } from "react";

const useTimer = (desireTime) => {
  const [time, setTime] = useState(desireTime);
  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);
    return () => {
      if (time) clearInterval(timer);
    };
  }, [time]);
  const reset = () => {
    if (time === 0) {
      return setTime(desireTime);
    }
  };

  return { time, setTime, reset };
};
export default useTimer;
