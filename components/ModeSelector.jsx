export default function ModeSelector() {
  return (
    <div className="mt-8 grid h-14 w-11/12 rounded-full bg-red-400 text-xs">
      <div className="mx-1 grid grid-cols-3 items-center gap-1 ">
        <div className="rounded-full px-3 py-4">pomodoro</div>
        <div className="rounded-full px-3 py-4">short break</div>
        <div className="rounded-full px-3 py-4">long break</div>
      </div>
    </div>
  )
}
