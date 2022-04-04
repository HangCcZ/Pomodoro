import { Fragment, useRef, useState } from 'react'

export default function Modal({ open, setOpen }) {
  const cancelButtonRef = useRef(null)
  return (
    <div
      className={`${
        open ? 'block' : 'hidden'
      } max-w-3xl rounded-lg bg-white p-8 sm:w-1/2`}
    >
      <div className="flex justify-between">
        <h1 className="mb-7 text-2xl font-semibold text-slate-700">Setting</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-slate-400"
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
      </div>

      <hr className="mb-5" />
      <div>
        <h2 className="mb-2 font-semibold tracking-widest text-slate-700">
          TIME (MINUTES)
        </h2>
        <div className="mb-5 grid grid-cols-3">
          <div>
            <label>
              <p className="text-slate-400">pomodoro</p>
            </label>
            <input
              type="number"
              className="w-28 rounded-lg border-2 p-2 text-lg text-slate-700 outline-none"
            />
          </div>
          <div>
            <label>
              <p className="text-slate-400">shortbreak</p>
            </label>
            <input
              type={'number'}
              className="w-28 rounded-lg border-2 p-2 text-lg text-slate-700 outline-none"
            />
          </div>
          <div>
            <label>
              <p className="text-slate-400">longbreak</p>
            </label>
            <input
              type={'number'}
              className="w-28 rounded-lg border-2 p-2 text-lg text-slate-700 outline-none"
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
          <div className="h-10 w-10 rounded-full bg-slate-600 p-2 text-center text-lg text-white">
            Aa
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 p-2 text-center text-lg">
            Aa
          </div>
          <div className="h-10 w-10 rounded-full bg-slate-200 p-2 text-center text-lg">
            Aa
          </div>
        </div>
      </div>
      <hr className="mb-5" />
      <div className="flex items-center justify-between">
        <h2 className="mb-2 font-semibold tracking-widest text-slate-700">
          Color
        </h2>
        <div className="flex space-x-6">
          <div className="h-10 w-10 rounded-full bg-red-300 p-2 text-center text-lg "></div>
          <div className="h-10 w-10 rounded-full bg-green-300 p-2 text-center text-lg"></div>
          <div className="h-10 w-10 rounded-full bg-blue-300 p-2 text-center text-lg"></div>
        </div>
      </div>
    </div>
  )
}
