import Head from 'next/head';
import Hero from '@/components/Hero';
import ArticleSection3col from '@/components/ArticleSection3col';
import ArticleSection4col from '@/components/ArticleSection4col';
import Divider from '@/components/Divider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Wünderground - Home</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-neutral-50'>
        <Hero />
        <ArticleSection3col />
        <Divider />
        <ArticleSection4col />
      </main>
    </>
  );
}
