import Head from 'next/head'
import Footer from '../components/Footer'
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
      <main className="flex w-full flex-1 flex-col items-center text-center font-semibold text-gray-200">
        <div className="mt-8 flex w-10/12 items-center justify-between rounded-full bg-red-400 px-5 py-5 text-xs">
          <div className="rounded-xl bg-red-900">pomodoro</div>
          <div>short break</div>
          <div>long break</div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
