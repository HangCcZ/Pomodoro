import { useContext } from 'react'
import { SettingContext } from '../lib/context'
export default function ClockButton({ isTicking, onStart, onPause }) {
  const [isStarted, setIsStarted] = useContext(SettingContext).isStarted

  const renderButton = () => {
    if (!isStarted) {
      return (
        <button onClick={onStart} className="font-semibold hover:text-red-400">
          Start
        </button>
      )
    } else if (isTicking) {
      return (
        <button onClick={onPause} className="font-semibold hover:text-red-400">
          Pause
        </button>
      )
    } else if (!isTicking && isStarted) {
      return (
        <button onClick={onStart} className="font-semibold hover:text-red-400">
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
