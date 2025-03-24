"use client";

import { useEffect, useState } from "react";
import { MAX_TIME } from "../constants";

function Timer() {
  const [time, setTime] = useState<number>(MAX_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : MAX_TIME));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <span className="timer">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </span>
  );
}

export default Timer;
