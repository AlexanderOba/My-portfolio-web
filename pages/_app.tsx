import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alexander Ashimedua- Software Engineer Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
