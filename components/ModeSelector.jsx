import { useContext } from 'react'
import { SettingContext } from '../lib/context'
import classNames from 'classnames'

const theme = {
  red: {
    selectorBar: 'bg-red-400',
    bg: 'bg-red-500',
    hover: 'hover:bg-red-600',
  },
  green: {
    selectorBar: 'bg-green-400',
    bg: 'bg-green-500',
    hover: 'hover:bg-green-600',
  },
  blue: {
    selectorBar: 'bg-blue-400',
    bg: 'bg-blue-500',
    hover: 'hover:bg-blue-600',
  },
}

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
  const [color, setColor] = useContext(SettingContext).colorOption

  return (
    <div
      className={classNames(
        `mt-8 grid h-14 w-11/12 rounded-full text-sm`,
        theme[color].selectorBar
      )}
    >
      <div className="mx-1 grid grid-cols-3 items-center gap-1 ">
        <button
          className={classNames(
            `rounded-full px-3 py-4`,
            theme[color].hover,
            mode === 'pomodoro' ? theme[color].bg : ''
          )}
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
          className={classNames(
            `rounded-full px-3 py-4`,
            theme[color].hover,
            mode === 'shortBreak' ? theme[color].bg : ''
          )}
          onClick={() => {
            setMode(() => 'shortBreak')
            setClockTime(() => shortBreakTime)
            setIsStarted(() => false)
            clearInterval(intervalID)
          }}
        >
          short break
        </button>
        <button
          className={classNames(
            `rounded-full px-3 py-4`,
            theme[color].hover,
            mode === 'longBreak' ? theme[color].bg : ''
          )}
          onClick={() => {
            setMode(() => 'longBreak')
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
