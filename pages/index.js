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

      <main>
        <h1>
          Moita.me
        </h1>
      </main>

      <div>
        {worksData.map((item) => (
          <div key={item.slug}>

            <h1>
            <Link href={`/works/${item.slug}`}>
              <a>{item.title}</a>
            </Link>
            </h1>
            <small>{item.date}</small>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
