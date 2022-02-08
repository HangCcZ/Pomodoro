import { useContext } from 'react'
import { SettingContext } from '../lib/context'
export default function ModeSelector() {
  const [clockTime, setClockTime] = useContext(SettingContext).clockTime
  const [pomodoroTime, setPomodoroTime] =
    useContext(SettingContext).pomodoroTime
  const [shortBreakTime, setShortBreakTime] =
    useContext(SettingContext).shortBreakTime
  const [longBreakTime, setLongBreakTime] =
    useContext(SettingContext).longBreakTime
  const [mode, setMode] = useContext(SettingContext).clockMode
  const [isStarted, setIsStarted] = useContext(SettingContext).isStarted
  const [intervalID, setIntervalID] = useContext(SettingContext).intervalID

  return (
    <div className="mt-8 grid h-14 w-11/12 rounded-full bg-red-400 text-xs">
      <div className="mx-1 grid grid-cols-3 items-center gap-1 ">
        <button
          className="rounded-full px-3 py-4"
          onClick={() => {
            setMode(() => 'pomodoro')
            setClockTime(() => pomodoroTime)
            setIsStarted(() => false)
            clearInterval(intervalID)
          }}
        >
          pomodoro
        </button>
        <button
          className="rounded-full px-3 py-4"
          onClick={() => {
            setMode(() => 'shortbreak')
            setClockTime(() => shortBreakTime)
            setIsStarted(() => false)
            clearInterval(intervalID)
          }}
        >
          short break
        </button>
        <button
          className="rounded-full px-3 py-4"
          onClick={() => {
            setMode(() => 'longbreak')
            setClockTime(() => longBreakTime)
            setIsStarted(() => false)
            clearInterval(intervalID)
          }}
        >
          long break
        </button>
      </div>
    </div>
  )
}
