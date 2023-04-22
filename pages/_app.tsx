import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';
// import "tailwindcss/tailwind.css";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alex Portfolio web</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
