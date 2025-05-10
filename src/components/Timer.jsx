import { useState, useEffect, useRef } from "react";

function Timer() {
  const [timeText, setTimeText] = useState("1:00"); // State for timer text
  const [isCountingDown, setIsCountingDown] = useState(false); // State for counting down but using it to change the button between Start/Pause
  const time = useRef(1 * 60); //useRef doesn't reset on re-render or cause re-renders when updated
  const intervalId = useRef(null); //null is blank/initial value
  let alarmTone = new Audio("./sounds/alarm.wav");
  let buttonSound = new Audio("./sounds/clack.wav");

  function onStartPauseClick() {
    buttonSound.play();
    setIsCountingDown((prevState) => !prevState); // Switches to previous state
  }

  // previous
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     time--;
  //     const minutes = Math.floor(time / 60); // Get the number of minutes by dividing total seconds calculated earlier
  //     let seconds = time % 60;
  //     setTimeText(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`); //If seconds is less than 10, add a leading zero
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [isCountingDown]);

  useEffect(() => {
    if (isCountingDown) {
      intervalId.current = setInterval(() => {
        //If time hits 0, the timer stops
        if (time.current <= 0) {
          clearInterval(intervalId.current);
          alarmTone.play();
          return;
        }

        time.current--;
        const minutes = Math.floor(time.current / 60);
        const seconds = time.current % 60;
        setTimeText(`${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
      }, 1000);
    } else {
      clearInterval(intervalId.current);
    }

    return () => clearInterval(intervalId.current);
  }, [isCountingDown]);

  return (
    <div className="timerCard">
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
