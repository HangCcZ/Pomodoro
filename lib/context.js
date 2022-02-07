import { createContext } from 'react'
export const SettingContext = createContext({
  clock: [null, null],
  mode: [null, null],
  pomodoro: [null, null],
  shortBreak: [null, null],
  longBreak: [null, null],
  fontOption: [null, null],
  colorOptin: [null, null],
})
