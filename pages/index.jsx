import Head from 'next/head'
import Footer from '../components/Footer'
import CircularBar from '../components/CircularBar'
import ModeSelector from '../components/ModeSelector'
import SettingButton from '../components/SettingButton'
import { useState } from 'react'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-300 py-2  ">
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
        <SettingButton />
      </main>

      <Footer />
    </div>
  )
}