export default function ModeSelector() {
  return (
    <div className="mt-8 grid h-14 w-11/12 rounded-full bg-red-400 text-xs">
      <div className="mx-1 grid grid-cols-3 items-center gap-1 ">
        <button className="rounded-full px-3 py-4">pomodoro</button>
        <button className="rounded-full px-3 py-4">short break</button>
        <button className="rounded-full px-3 py-4">long break</button>
      </div>
    </div>
  )
}
