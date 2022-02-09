import { useState, useContext, useEffect } from 'react'
import TimeRemain from '../components/TimeRemain'
import ClockButton from '../components/ClockButton'
import { SettingContext } from '../lib/context'

export default function CircularBar({ size, strokeWidth }) {
  const [percentage, setPercentage] = useContext(SettingContext).percentage
  const [clockTime, setClockTime] = useContext(SettingContext).clockTime
  const [intervalID, setIntervalID] = useContext(SettingContext).intervalID
  const [isStarted, setIsStarted] = useContext(SettingContext).isStarted
  const [mode, setMode] = useContext(SettingContext).clockMode
  const [pomodoroTime, setPomodoroTime] =
    useContext(SettingContext).pomodoroTime
  const [shortBreakTime, setShortBreakTime] =
    useContext(SettingContext).shortBreakTime
  const [longBreakTime, setLongBreakTime] =
    useContext(SettingContext).longBreakTime

  const [isTicking, setIsTicking] = useState(false)

  const viewBox = `0 0 ${size} ${size}`
  const radius = (size - strokeWidth) / 2
  const circumference = radius * Math.PI * 2
  const dash = (percentage * circumference) / 100
  const percentagePerSecond = 100 / clockTime

  /**setState callback is use to update state immediately */
  const onStart = () => {
    const currentIntervalID = setInterval(() => {
      setClockTime((clockTime) => clockTime - 1)
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

  useEffect(() => {
    if (clockTime <= 0) {
      setClockTime((clockTime) => {
        if (mode == 'pomodoro') {
          return pomodoroTime
        } else if (mode == 'shortBreak') {
          return shortBreakTime
        } else if (mode == 'longBreak') {
          return longBreakTime
        }
      })

      setIsTicking(false)
      setPercentage((percentage) => 100)
      setIsStarted(() => false)
      clearInterval(intervalID)
    }
  }, [clockTime])

  return (
    <div className="relative mt-14">
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
          style={{ transition: 'all 1s' }}
        />
      </svg>
      <TimeRemain />
      <ClockButton isTicking={isTicking} onStart={onStart} onPause={onPause} />
    </div>
  )
}
