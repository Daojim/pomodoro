import { useState, useRef, useEffect } from "react";

function Timer() {
  const [timeText, setTimeText] = useState("25:00"); // State for timer text
  const [isCountingDown, setIsCountingDown] = useState(false); // State for counting down but using it to change the button between Start/Pause
  const [count, setCount] = useState(1000);
  let startingMinutes = 25; // Setting default timer of pomodoro to be 25 minutes
  let time = startingMinutes * 60; // 25 minutes * 60 to get total amount of seconds

  function onStartPauseClick() {
    setIsCountingDown((prevState) => !prevState); // Switches to previous state
  }

  useEffect(() => {
    //geeksforgeeks code idea
    console.log("useEffect runs");

    const interval = setInterval(() => {
      time--;
      const minutes = Math.floor(time / 60); // Get the number of minutes by dividing total seconds calculated earlier
      let seconds = time % 60;
      setCount((prevCount) => prevCount - 1);
      setTimeText(`${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timerCard">
      <h1>{count}</h1>
      <div className="timerSection">
        <h1 className="countdown">{timeText}</h1>
        <div className="startPause">
          <button className="startPause-btn" onClick={onStartPauseClick}>
            {isCountingDown ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
