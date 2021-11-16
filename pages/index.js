import Head from 'next/head';
import React, { useRef } from "react";
import Link from 'next/Link';
import { worksData } from '../lib/data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Controller, Scene } from 'react-scrollmagic';

library.add(fab, fas)

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
        <div className="flex-col items-center antialiased" data-aos="fade-down" data-aos-duration="250">
          Hey, I'm <b>Moita</b>!<hr className="border-2 border-solid m-1 w-3/6 border-moitagreen mx-4 items-center hidden sm:inline-flex" /><br />
          I'm a <b>web developer</b> and I'm here to <b>help you</b>.
        </div>
        <div className="items-center flex-col my-8" data-aos="fade-up" data-aos-duration="250">
          <button className="btn draw-border" onClick={gotoWorkSection}>
            my projects
          </button>
        </div>
      </main>

      <div ref={workSection} className="container m-auto pt-8 p-4 justify-center max-w-9xl flex flex-col">
        <section className="workSection Pilli">
        <Controller>
          <Scene duration={'200%'} pin triggerHook={0}>
            <div className="workTitle">
              <div className="text-left">
                <h1 className="text-7xl font-bold" data-aos="fade-right" data-aos-duration="3500">Pilli</h1><br />
                <p data-aos="fade-right" data-aos-duration="3500">Front-end Developer &#8211; Web App</p>
                <div data-aos="fade-right" data-aos-duration="4500"><p className="text-xs my-3 opacity-50">vue · bootstrap · sass · firebase</p></div>
                <ul className="flex justify-center items-center mt-0" data-aos="fade-right" data-aos-duration="3500">
                  <li className="inline justify-center px-4 pb-4 pt-0">
                    <a href="https://pillimidia-3fa4c.web.app/" target="_blank">
                      <FontAwesomeIcon icon={["fas", "desktop"]} size="lg" className="icons" />
                    </a>
                  </li>
                  <li className="inline justify-center px-4 pb-4 pt-0">
                    <a href="https://github.com/moitadev/pillimidia" target="_blank">
                      <FontAwesomeIcon icon={["fas", "code"]} size="lg" className="icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Scene>
        </Controller>
          <div className="workImages">
            <div>
              <div className="ml-0 items-center">
                <img className="p-2 " src="/assets/pillidesk1.png" width={600} />
              </div>
            </div>
            <div>
              <div className="ml-0 items-center">
                <img className="p-2 rounded" src="/assets/pillimobi1.png" width={600} />
              </div>
            </div>
            <div>
              <div className="ml-0 items-center">
                <img className="p-2 rounded-full" src="/assets/pilli1.png" width={600} />
              </div>
            </div>
          </div>
        </section>
        <section className="workSection Pilli">
        <Controller>
          <Scene duration={'200%'} pin triggerHook={0}>
            <div className="workTitle">
              <div className="text-left">
                <h1 className="text-7xl font-bold" data-aos="fade-right" data-aos-duration="3500">React Form</h1><br />
                <p data-aos="fade-right" data-aos-duration="4000">Fullstack Developer &#8211; Web App</p>
                <div data-aos="fade-right" data-aos-duration="4500"><p className="text-xs my-3 opacity-50">react · nodemailer · NodeJS</p></div>
                <ul className="flex justify-center items-center mt-0" data-aos="fade-right" data-aos-duration="5500">
                  <li className="inline justify-center px-4 pb-4 pt-0">
                    <Link href={'/about#contactSection'}>
                      <a>
                        <FontAwesomeIcon icon={["fas", "desktop"]} size="lg" className="icons" />
                      </a>
                    </Link>
                  </li>
                  <li className="inline justify-center px-4 pb-4 pt-0">
                    <a href="https://github.com/moitadev/moita-me/blob/main/pages/api/contact.js" target="_blank">
                      <FontAwesomeIcon icon={["fas", "code"]} size="lg" className="icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Scene>
        </Controller>
          <div className="workImages">
            <div>
              <div className="ml-0items-center">
              <img className="p-2 " src="/assets/formdesk1.png" width={600} />
              </div>
            </div>
            <div>
              <div className="ml-0 items-center">
              <img className="p-2" src="/assets/formmobi1.png" width={600} />
              </div>
            </div>
            <div>
              <div className="ml-0 items-center">
              <img className="p-2 rounded-full" src="/assets/formdesk2.png" width={600} />
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="my-6 p-2 flex flex-col justify-center items-center">
        <div className="container mx-auto grid flex-col justify-center items-center">
          <p className="font-light text-xs justify-center text-center mb-0 pb-0">
            more projects on
          </p>
          <ul className="flex justify-center items-center mt-0">
            <li className="inline sm:block px-2 py-4 pt-0">
              <a href="https://github.com/moitadev" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} size="xs" className="icons" />
              </a>
            </li>
            <li className="inline sm:block px-2 py-4 pt-0">
              <a href="https://dribbble.com/moita" target="_blank">
                <FontAwesomeIcon icon={["fab", "dribbble"]} size="xs" className="icons" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

{worksData.map((item) => (
  <WorkListItem key={item.slug} {...item} />
))}

function WorkListItem({ slug, title }) {
  return(
    <Link href={`/works/${slug}`}>
      <a className="sm:text-9xl text-4xl p-3 subpixel-antialiased text-left">{title}</a>
    </Link>
  );
}