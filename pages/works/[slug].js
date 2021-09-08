import Head from 'next/head'
import { worksData } from '../../lib/data';


export default function worksPage({title, date, content}) {
  return (
    <div>
      <Head>
        <title>moita · {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
        <small>{date}</small>
        <p>{content}</p>
      </main>
    </div>
  )
}

export async function getStaticProps(context) {
    console.log(context);
    const { params } = context;
  return {
    props: worksData.find((item) => item.slug === params.slug),
  };
}

export async function getStaticPaths() {
    
    return {
      paths: worksData.map((item) => ({
          params: {
              slug: item.slug,
          }
      })),
      fallback: false,
    };
}