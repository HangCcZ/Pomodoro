import { createContext } from 'react'
export const SettingContext = createContext({
  intervalID: [null, null],
  isStarted: [null, null],
  clockTime: [null, null],
  clockMode: [null, null],
  pomodoroTime: [null, null],
  shortBreakTime: [null, null],
  longBreakTime: [null, null],
  fontOption: [null, null],
  colorOptin: [null, null],
  percentage: [null, null],
})
