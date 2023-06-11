import Head from "next/head"

import { Nav } from "../components/Nav"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>NextJS blog app</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
      </Head>
      <div className="container">
        <Nav />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}