import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import PageWrapper from '../components/PageWrapper';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';

const Home: NextPage = () => {
  const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

  return (
    <>
      <Head>
        <title>Peter's Portfolio</title>
        <meta
          name="description"
          content="A portfolio of the design and development work of Peter McCrae Hokenson"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <PageWrapper>
        <Hero />
        <Showcase title="Design" />
      </PageWrapper>
    </>
  );
};

export default Home;
