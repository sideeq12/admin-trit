import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Navbar } from '../components/admin_nav/adminNav'
import { Searchbar } from '../components/upsearch/upsearch'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    {/* <Navbar />
    <Searchbar /> */}
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
