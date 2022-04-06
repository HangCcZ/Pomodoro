import { useState, useContext } from 'react'
import { SettingContext } from '../lib/context'
import classNames from 'classnames'
import { minuteToSecond } from '../lib/minuteToSecond'

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export default function Modal({ open, setOpen }) {
  const [font, setFont] = useContext(SettingContext).fontOption
  const [pomodoroTime, setPomodoroTime] =
    useContext(SettingContext).pomodoroTime
  const [shortBreakTime, setShortBreakTime] =
    useContext(SettingContext).shortBreakTime
  const [longBreakTime, setLongBreakTime] =
    useContext(SettingContext).longBreakTime
  const [color, setColor] = useContext(SettingContext).colorOption

  const CloseButton = () => {
    return (
      <button onClick={() => setOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-slate-400 hover:text-slate-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    )
  }
  const [newSetting, setNewSetting] = useState({
    newPomodoroTime: 25,
    newShortBreakTime: 5,
    newlongBreakTime: 10,
    newFont: font,
    newColor: color,
  })

  //parse number here
  const onApplyClick = function () {
    setPomodoroTime(
      !isNaN(newSetting.newPomodoroTime)
        ? minuteToSecond(newSetting.newPomodoroTime)
        : pomodoroTime
    )
    setShortBreakTime(
      !isNaN(newSetting.newShortBreakTime)
        ? minuteToSecond(newSetting.newShortBreakTime)
        : shortBreakTime
    )
    setLongBreakTime(
      !isNaN(newSetting.newlongBreakTime)
        ? minuteToSecond(newSetting.newlongBreakTime)
        : longBreakTime
    )

    setFont(newSetting.newFont)
    setColor(newSetting.newColor)
  }

  const onTimeSettingChange = function (time, clockType) {
    setNewSetting({
      ...newSetting,
      [clockType]: time, // parse this on apply button
    })
  }

  const onColorClick = function (color) {
    setNewSetting({
      ...newSetting,
      newColor: color,
    })
  }

  const onFontClick = function (font) {
    setNewSetting({
      ...newSetting,
      newFont: font,
    })
  }

  return (
    <div
      className={`${
        open ? 'block' : 'hidden'
      } fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-75`}
    >
      <div className="relative max-w-xl rounded-lg bg-white p-8 sm:w-1/2">
        <div className="flex justify-between">
          <h1 className="mb-7 text-2xl font-semibold text-slate-700">
            Setting
          </h1>
          <CloseButton />
        </div>

        <hr className="mb-5" />
        <div>
          <h2 className="mb-2 font-semibold tracking-widest text-slate-700">
            TIME (MINUTES)
          </h2>
          <div className="mb-5 grid grid-cols-3 gap-4">
            <div>
              <label>
                <p className=" text-slate-400">pomodoro</p>
                <input
                  type="number"
                  value={newSetting.newPomodoroTime}
                  onChange={(e) => {
                    onTimeSettingChange(e.target.value, 'newPomodoroTime')
                  }}
                  className="max-w-full rounded-2xl border-2 bg-slate-200 p-2 text-center text-lg font-bold text-slate-700 outline-none"
                />
              </label>
            </div>
            <div>
              <label>
                <p className="text-slate-400">shortbreak</p>
              </label>
              <input
                type="number"
                min={1}
                value={newSetting.newShortBreakTime}
                onChange={(e) => {
                  onTimeSettingChange(e.target.value, 'newShortBreakTime')
                }}
                className="max-w-full rounded-2xl border-2 bg-slate-200 p-2 text-center text-lg font-bold text-slate-700 outline-none"
              />
            </div>
            <div>
              <label>
                <p className="text-slate-400">longbreak</p>
              </label>
              <input
                type="number"
                value={newSetting.newlongBreakTime}
                onChange={(e) => {
                  onTimeSettingChange(e.target.value, 'newlongBreakTime')
                }}
                className="max-w-full rounded-2xl border-2 bg-slate-200 p-2 text-center text-lg font-bold text-slate-700 outline-none"
              />
            </div>
          </div>
        </div>
        <hr className="mb-5" />
        <div className="mb-5 flex items-center justify-between">
          <h2 className="mb-2 font-semibold tracking-widest text-slate-700">
            FONT
          </h2>
          <div className="flex space-x-6">
            <button
              onClick={() => onFontClick('font-SpaceMono')}
              className={classNames(
                'h-10 w-10 rounded-full p-2 text-center text-lg',
                newSetting.newFont === 'font-SpaceMono'
                  ? 'bg-slate-500 text-slate-200'
                  : 'bg-slate-200 text-slate-700'
              )}
            >
              Aa
            </button>
            <button
              onClick={() => onFontClick('font-serif')}
              className={classNames(
                'h-10 w-10 rounded-full p-2 text-center font-serif text-lg',
                newSetting.newFont === 'font-serif'
                  ? 'bg-slate-500 text-slate-200'
                  : 'bg-slate-200 text-slate-700'
              )}
            >
              Aa
            </button>
            <button
              onClick={() => onFontClick('font-mono')}
              className={classNames(
                'h-10 w-10 rounded-full p-2 text-center font-mono text-lg',
                newSetting.newFont === 'font-mono'
                  ? 'bg-slate-500 text-slate-200'
                  : 'bg-slate-200 text-slate-700'
              )}
            >
              Aa
            </button>
          </div>
        </div>
        <hr className="mb-5" />
        <div className="flex items-center justify-between">
          <h2 className="mb-2 font-semibold tracking-widest text-slate-700">
            COLOR
          </h2>
          <div className="flex space-x-6">
            <button
              onClick={() => onColorClick('red')}
              className="h-10 w-10 rounded-full bg-red-300 p-2 text-center text-lg"
            >
              {newSetting.newColor === 'red' && <CheckIcon />}
            </button>
            <button
              onClick={() => onColorClick('green')}
              className="h-10 w-10 rounded-full bg-green-300 p-2 text-center text-lg"
            >
              {newSetting.newColor === 'green' && <CheckIcon />}
            </button>
            <button
              onClick={() => onColorClick('blue')}
              className="h-10 w-10 rounded-full bg-blue-300 p-2 text-center text-lg"
            >
              {newSetting.newColor === 'blue' && <CheckIcon />}
            </button>
          </div>
        </div>
        <div className="absolute inset-x-1/2 -bottom-4 flex justify-center">
          <button
            onClick={onApplyClick}
            className="rounded-xl bg-red-500 py-2 px-5 text-center uppercase text-white hover:bg-red-600 hover:ring-2 hover:ring-red-600"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  )
}
