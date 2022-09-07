import Head from 'next/head'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Hero from '../components/hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Sidebar />
        <Hero />
      </Layout>
    </div>
  )
}
