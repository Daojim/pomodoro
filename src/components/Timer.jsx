import { useState, useEffect, useRef } from "react";

function Timer() {
  const [timeText, setTimeText] = useState("1:00"); // State for timer text
  const [isCountingDown, setIsCountingDown] = useState(false); // State for counting down but using it to change the button between Start/Pause
  const time = useRef(25 * 60); //useRef doesn't reset on re-render or cause re-renders when updated
  const intervalId = useRef(null); //null is blank/initial value
  let alarmTone = new Audio("./sounds/alarm.wav");
  let buttonSound = new Audio("./sounds/clack.wav");

  const pomodoroTime = 25;
  const shortBreak = 5;
  const longBreak = 15;

  function onStartPauseClick() {
    buttonSound.play();
    setIsCountingDown((prevState) => !prevState); // Switches to previous state
  }

  function changeMode(mode) {
    clearInterval(intervalId.current);
    setIsCountingDown(false);
    setTimeText(`${mode}:00`);
    time.current = mode * 60;
  }

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
      <button className="pomodoro-btn" onClick={() => changeMode(pomodoroTime)}>
        Pomodoro
      </button>
      <button className="shortBreak-btn" onClick={() => changeMode(shortBreak)}>
        Short Break
      </button>
      <button className="longBreak-btn" onClick={() => changeMode(longBreak)}>
        Long Break
      </button>
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
