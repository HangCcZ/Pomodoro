import { useState, useRef, useEffect } from 'react'

const secondsToMinutes = (timeInSeconds) => {
  return `${Math.trunc(timeInSeconds / 60)}:${
    timeInSeconds % 60 < 10 ? '0' + (timeInSeconds % 60) : timeInSeconds % 60
  }
  `
}

export default function CircularBar({ size, strokeWidth, totalTime }) {
  const [percentage, setPercentage] = useState(100)
  const [timeLeft, setTimeLeft] = useState(totalTime)
  const [intervalID, setIntervalID] = useState(0)
  const [isTicking, setIsTicking] = useState(false)
  const [isStarted, setIsStarted] = useState(false)
  const viewBox = `0 0 ${size} ${size}`
  const radius = (size - strokeWidth) / 2
  const circumference = radius * Math.PI * 2
  const dash = (percentage * circumference) / 100
  const percentagePerSecond = 100 / totalTime

  /**debug - setPercentage can't use timeLeft
   *    because it keep using old value of timeLeft
   *  */

  /**setState callback is use to update state immediately */
  const onStart = () => {
    const currentIntervalID = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1)
      setPercentage((percentage) => percentage - percentagePerSecond)
    }, 1000)
    setIsTicking(() => true)
    setIsStarted(() => true)
    setIntervalID((intervalID) => currentIntervalID)
  }

  const onPause = () => {
    clearInterval(intervalID)
    setIsTicking(() => false)
  }

  const renderButton = () => {
    if (!isStarted) {
      return (
        <button
          onClick={onStart}
          disabled={percentage != 100}
          className="font-semibold"
        >
          Start
        </button>
      )
    } else if (isTicking) {
      return (
        <button
          onClick={onPause}
          disabled={percentage == 100}
          className="font-semibold"
        >
          Pause
        </button>
      )
    } else if (!isTicking && isStarted) {
      return (
        <button
          onClick={onStart}
          disabled={percentage == 100}
          className="font-semibold"
        >
          Resume
        </button>
      )
    }
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft((timeLeft) => totalTime)
      setPercentage((percentage) => 100)
      clearInterval(intervalID)
    }
  })

  return (
    <div className="relative">
      <svg width={size} height={size} viewBox={viewBox} className="static">
        <circle
          fill="none"
          className="stroke-red-500"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />

        <circle
          fill="none"
          className="stroke-red-400"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeWidth={`${strokeWidth}px`}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap="round"
          style={{ transition: 'all 1.5s' }}
        />
      </svg>
      {/**TODO: need to set parent container as relative and set button as absolute to move into the circle */}
      <div className="absolute top-1/3 w-full text-6xl font-semibold">
        <p>{secondsToMinutes(timeLeft)}</p>
      </div>
      <div className="absolute top-2/3 w-full text-2xl text-gray-50">
        {renderButton()}
      </div>
    </div>
  )
}
