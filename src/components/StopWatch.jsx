import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer; // local variable for interval

    if (running) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    }
    console.log(timer);

    // if (!running) clearInterval(timer);
    // cleanup when stopped or component unmounts
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>⏱️ Stopwatch</h1>
      <h2>{time} s</h2>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
