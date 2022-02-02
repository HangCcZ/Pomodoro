import Head from 'next/head'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 ">
      <Head>
        <title>Let's Focus | Pomodoro</title>
        <link rel="icon" href="/tomato-svgrepo-com.svg" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center text-center"></main>

      <Footer />
    </div>
  )
}
