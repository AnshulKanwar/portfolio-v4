import Head from "next/head";
import Sidebar from "../components/sidebar";
import Hero from "../components/hero";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Anshul Kanwar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen grid grid-cols-[1fr_2fr] py-20">
        <div className="grid place-items-center border-r border-[#96A0B3] dark:border-[#3D4F74]">
          <Sidebar />
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </Layout>
  );
}
