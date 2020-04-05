import Head from 'next/head'
import Navbar from './Navbar/Navbar'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Demo Website</title>
        <link href='https://fonts.googleapis.com/css2?family=Dosis:wght@500;600;700&display=swap' rel='stylesheet' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css' />
        <script defer src='https://use.fontawesome.com/releases/v5.3.1/js/all.js' />
      </Head>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
