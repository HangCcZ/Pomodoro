import { useContext } from 'react'
import { SettingContext } from '../lib/context'

export default function TimeRemain() {
  const [clockTime, setClockTime] = useContext(SettingContext).clockTime
  return (
    <div className="absolute top-1/3 w-full text-6xl font-semibold">
      <p>
        {Math.trunc(clockTime / 60)}:
        {clockTime % 60 < 10 ? '0' + (clockTime % 60) : clockTime % 60}
      </p>
    </div>
  )
}
