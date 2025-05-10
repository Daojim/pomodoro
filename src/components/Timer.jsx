import { useState } from "react";

function Timer() {
  function onStartPauseClick() {
    alert("clicked");
  }

  //   const countdown = document.querySelector(".countdown");

  //   const startingMinutes = 25;
  //   let time = startingMinutes * 60;

  //   setInterval(updateCountdown, 1000);

  //   function updateCountdown() {
  //     const minutes = Math.floor(time / 60);
  //     let seconds = time % 60;

  //     time--;
  //   }

  const [timeText, setTimeText] = useState("hello");

  return (
    <div className="timerCard">
      <div className="timerSection">
        <h1 className="countdown">{timeText}</h1>
        <div className="startPause">
          <button
            className="startPause-btn"
            onClick={() => setTimeText("TEST STATE CHANGE")}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
