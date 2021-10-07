import Head from 'next/head';
import React, { useRef } from "react";
import Link from 'next/Link';
import { worksData } from '../lib/data';

export default function Home() {
  const workSection = useRef(null);

  const gotoWorkSection = () => window.scrollTo({ 
    top: workSection.current.offsetTop, 
    behavior: "smooth"
  });

  return (
    <div>
      <Head>
        <title>moita · web developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-2 flex flex-col justify-center h-screen items-center">
        <div className="flex-col items-center antialiased">
          Hey, I'm <b>Moita</b>!<hr className="border-2 border-solid m-1 w-3/6 border-moitagreen mx-4 items-center hidden sm:inline-flex" /><br />
          I'm a <b>web developer</b> and I'm here to <b>help you</b>.
        </div>
        <div className="items-center flex-col my-8">
          <button className="bg-transparent text-white transition duration-500 ease-in-out hover:text-moitagreen py-2 px-4 border-4 border-solid border-white hover:border-moitagreen" onClick={gotoWorkSection}>
            my projects
          </button>
        </div>
      </main>

      <div ref={workSection} className="container m-auto pt-8 p-4 justify-center max-w-9xl flex flex-col h-screen">
        {worksData.map((item) => (
          <WorkListItem key={item.slug} {...item} />
        ))}
      </div>
    </div>
  );
}

function WorkListItem({ slug, title }) {
  return(
    <Link href={`/works/${slug}`}>
      <a className="sm:text-9xl text-4xl p-3 subpixel-antialiased text-left">{title}</a>
    </Link>
  );
}