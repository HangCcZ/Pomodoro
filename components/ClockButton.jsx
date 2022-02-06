export default function ClockButton({
  isStarted,
  isTicking,
  onStart,
  onPause,
}) {
  const renderButton = () => {
    if (!isStarted) {
      return (
        <button onClick={onStart} className="font-semibold">
          Start
        </button>
      )
    } else if (isTicking) {
      return (
        <button onClick={onPause} className="font-semibold">
          Pause
        </button>
      )
    } else if (!isTicking && isStarted) {
      return (
        <button onClick={onStart} className="font-semibold">
          Resume
        </button>
      )
    }
  }

  return (
    <div className="absolute top-2/3 w-full text-2xl text-gray-50">
      {renderButton()}
    </div>
  )
}
