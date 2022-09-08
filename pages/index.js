import Head from "next/head";
import Sidebar from "../components/sidebar";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen grid grid-cols-[1fr_2fr] py-20">
        <div className="grid place-items-center border-r border-[#96A0B3]">
          <Sidebar />
        </div>
        <div>
          <Hero />
        </div>
      </div>
    </div>
  );
}
