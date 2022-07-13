import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='select-none'>
      <Navbar />
      <div className='pt-14 bg-slate-50' id='home'>
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
