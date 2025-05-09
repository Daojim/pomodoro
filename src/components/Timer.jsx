function Timer() {
  function onStartPauseClick() {
    alert("clicked");
  }

  const startingMinutes = 25;
  let time = startingMinutes * 60;

  return (
    <div className="countdownCard">
      <div className="countdownTimer">
        Timer
        <div className="startPause">
          <button className="startPause-btn" onClick={onStartPauseClick}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
