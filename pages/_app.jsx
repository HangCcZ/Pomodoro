import '../styles/globals.css'
import { SettingContext } from '../lib/context'
import { useState } from 'react'
import { minuteToSecond } from '../lib/minuteToSecond.js'

function MyApp({ Component, pageProps }) {
  const [intervalID, setIntervalID] = useState(0)
  const [isStarted, setIsStarted] = useState(false)
  const [mode, setMode] = useState('pomodoro')
  const [pomodoroTime, setPomodoroTime] = useState(minuteToSecond(25))
  const [shortBreakTime, setShortBreakTime] = useState(minuteToSecond(5))
  const [longBreakTime, setLongBreakTime] = useState(minuteToSecond(10))
  const [color, setColor] = useState()
  const [font, setFont] = useState('font-SpaceMono')
  const [percentage, setPercentage] = useState(100)
  const [clockTime, setClockTime] = useState(() => {
    if (mode == 'pomodoro') {
      return pomodoroTime
    } else if (mode == 'shortbreak') {
      return shortBreakTime
    } else if (mode == 'longbreak') {
      return longBreakTime
    }
  })

  return (
    <SettingContext.Provider
      value={{
        intervalID: [intervalID, setIntervalID],
        isStarted: [isStarted, setIsStarted],
        clockTime: [clockTime, setClockTime],
        pomodoroTime: [pomodoroTime, setPomodoroTime],
        shortBreakTime: [shortBreakTime, setShortBreakTime],
        longBreakTime: [longBreakTime, setLongBreakTime],
        fontOption: [font, setFont],
        colorOptin: [color, setColor],
        clockMode: [mode, setMode],
        percentage: [percentage, setPercentage],
      }}
    >
      <div className={font}>
        <Component {...pageProps} />
      </div>
    </SettingContext.Provider>
  )
}

export default MyApp
