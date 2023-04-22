import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/navlogo.png" sizes="32x32" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;500;600;700&family=Nunito:wght@600;700;800&family=Poppins:wght@100;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
