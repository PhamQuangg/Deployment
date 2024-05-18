import React, { useState, useRef } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const timeRef = useRef(null);
    const startTimer = () => {
        setIsRunning(true);
        timeRef.current = setInterval(() => {
          setTime(prevTime => prevTime + 1);
        }, 1000);
      };

      const resetTimer = () => {
        setTime(0);
        clearInterval(timeRef.current);
        setIsRunning(false);
      };
    const stopTimer = ()=>{
        clearInterval(timeRef.current)
    }
    const pauseTimer = ()=>{
      if(isRunning){
        setIsRunning(false)
        clearInterval(timeRef.current)
      } else{
        setIsRunning(true)
        startTimer();
      }
    }
  return(
    <div className="stopwatch">
      <h1>StopWatch</h1>
      <p>Time: {time}s</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <button onClick={pauseTimer}>
        {isRunning?"Pause" : "Resume"}
      </button>
    </div>
  );
};

export default StopWatch;
