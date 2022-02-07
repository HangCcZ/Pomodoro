import '../styles/globals.css'
import { SettingContext } from '../lib/context'
import { useState } from 'react'
import { minuteToSecond } from '../lib/minuteToSecond.js'

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState('pomodoro')
  const [pomodoroTime, setPomodoroTime] = useState(minuteToSecond(10))
  const [shortBreakTime, setShortBreakTime] = useState(minuteToSecond(5))
  const [longBreakTime, setLongBreakTime] = useState(minuteToSecond(10))
  const [color, setColor] = useState()
  const [font, setFont] = useState('font-SpaceMono')
  return (
    <SettingContext.Provider
      value={{
        pomodoro: [pomodoroTime, setPomodoroTime],
        shortBreak: [shortBreakTime, setShortBreakTime],
        longBreak: [longBreakTime, setLongBreakTime],
        fontOption: [font, setFont],
        colorOptin: [color, setColor],
        mode: [mode, setMode],
      }}
    >
      <div className={font}>
        <Component {...pageProps} />
      </div>
    </SettingContext.Provider>
  )
}

export default MyApp
