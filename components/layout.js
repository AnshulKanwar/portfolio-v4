import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Anshul Kanwar</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#D9DCE3"/>
        {/* <meta name="theme-color" content="#D9DCE3" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#212B3F" media="(prefers-color-scheme: dark)" /> */}
      </Head>
      <div className="min-h-screen text-[#212B3F] bg-[#D9DCE3] dark:text-[#D9DCE3] dark:bg-[#212B3F]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
