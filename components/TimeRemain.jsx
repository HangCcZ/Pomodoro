export default function TimeRemain({ timeInSeconds }) {
  return (
    <div className="absolute top-1/3 w-full text-6xl font-semibold">
      <p>
        {Math.trunc(timeInSeconds / 60)}:
        {timeInSeconds % 60 < 10
          ? '0' + (timeInSeconds % 60)
          : timeInSeconds % 60}
      </p>
    </div>
  )
}
