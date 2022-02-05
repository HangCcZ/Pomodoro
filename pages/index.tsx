import Head from 'next/head'
import Footer from '../components/Footer'
import CircularBar from '../components/CircularBar'
import { useState } from 'react'

export default function Home() {
  const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(600)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-red-300 py-2  ">
      <Head>
        <title>Let's Focus | Pomodoro</title>
        <link rel="icon" href="/tomato-svgrepo-com.svg" />
      </Head>
      <header>
        <h2 className="pt-4 text-xl font-semibold text-gray-50">Pomodoro</h2>
      </header>
      <main className="flex w-full flex-1 flex-col items-center text-center font-semibold text-gray-200">
        <div className="mt-8 grid h-14 w-11/12 rounded-full bg-red-400 text-xs">
          <div className="mx-1 grid grid-cols-3 items-center gap-1 ">
            <div className="rounded-full px-3 py-4">pomodoro</div>
            <div className="rounded-full px-3 py-4">short break</div>
            <div className="rounded-full px-3 py-4">long break</div>
          </div>
        </div>

        <div className="mt-14">
          <CircularBar
            size={250}
            strokeWidth={20}
            totalTime={totalTimeInSeconds}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
