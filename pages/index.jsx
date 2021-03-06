import Head from 'next/head'
import Footer from '../components/Footer'
import CircularBar from '../components/CircularBar'
import ModeSelector from '../components/ModeSelector'
import SettingButton from '../components/SettingButton'
import Modal from '../components/Modal'
import { useState, useContext } from 'react'
import { SettingContext } from '../lib/context'

export default function Home() {
  const [open, setOpen] = useState(false)
  const [color, setColor] = useContext(SettingContext).colorOption
  return (
    <div>
      <div
        className={`flex min-h-screen flex-col items-center justify-center bg-${color}-300 py-2`}
      >
        <Head>
          <title>Let's Focus | Pomodoro</title>
          <link rel="icon" href="/tomato-svgrepo-com.svg" />
        </Head>
        <header>
          <h2 className="pt-4 text-xl font-semibold text-gray-50">Pomodoro</h2>
        </header>
        <main className="flex w-full flex-1 flex-col items-center text-center font-semibold text-gray-100">
          <ModeSelector />
          <CircularBar size={300} strokeWidth={20} />
          <SettingButton setOpen={setOpen} />
        </main>
        <Modal open={open} setOpen={setOpen} />
        <Footer />
      </div>
    </div>
  )
}
