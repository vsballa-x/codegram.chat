import { trpc } from "@/utils/trpc";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Home: React.FC = () => {
  const hello = trpc.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Codegram</title>
        <meta
          name="description"
          content="Chat, connect and challenge GitHub users on fun coding activities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={`${inter.className} text-2xl`}>
          {hello.data ?? "Loading..."}
        </h1>
      </main>
    </>
  );
};

export default Home;
