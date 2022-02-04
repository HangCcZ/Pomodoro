import { useState, useRef, useEffect } from 'react'

export default function CircularBar({ size, strokeWidth, totalTime }) {
  const [percentage, setPercentage] = useState(100)
  const [timeLeft, setTimeLeft] = useState(10)
  const [intervalID, setIntervalID] = useState(0)
  const viewBox = `0 0 ${size} ${size}`
  const radius = (size - strokeWidth) / 2
  const circumference = radius * Math.PI * 2
  const dash = (percentage * circumference) / 100
  const percentagePerSecond = 100 / totalTime

  /**debug - setPercentage can't use timeLeft
   *    because it keep using old value of timeLeft
   *  */

  /**setState callback is use to update state immediately */
  const interval = () => {
    const currentIntervalID = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1)
      setPercentage((percentage) => percentage - percentagePerSecond)
    }, 1000)
    setIntervalID((intervalID) => currentIntervalID)
  }

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft((timeLeft) => totalTime)
      setPercentage((percentage) => 100)
      clearInterval(intervalID)
    }
  })

  return (
    <div>
      <svg width={size} height={size} viewBox={viewBox}>
        <circle
          fill="none"
          className="stroke-red-500"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        ></circle>

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
        ></circle>
      </svg>

      <button onClick={interval} disabled={percentage != 100}>
        Start
      </button>
      <p>{timeLeft}</p>
      <p>{percentage}</p>
    </div>
  )
}
