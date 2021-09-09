import Head from 'next/head';
import Link from 'next/Link';
import { worksData } from '../lib/data';

export default function Home() {
  return (
    <div>
      <Head>
        <title>moita · web developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container p-2 flex flex-row justify-center h-screen items-center">
        <div className="items-center">
        Olá, eu sou o <b>Moita</b>!<hr className="border-2 border-solid m-1 w-3/6 border-moitagreen mx-4 items-center hidden sm:inline-flex" /><br />
        sou um <b>desenvolvedor web</b> e estou aqui para <b>ajudar você</b>.
        </div>
      </main>

      <div className="justify-center h-screen">
        {worksData.map((item) => (
          <WorkListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

function WorkListItem({ slug, title }) {
  return(
      <div>
        <Link href={`/works/${slug}`}>
          <a className="text-9xl text-left">{title}</a>
        </Link>
      </div>
  );
}