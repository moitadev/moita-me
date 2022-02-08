import Head from 'next/head';
import React, { useRef } from "react";
import Image from 'next/image'
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { Controller, Scene } from 'react-scrollmagic';


library.add(fab, fas)

export default function Home() {

  const convertImage = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

  const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

  function PortfolioDescription(work){
    return (
      <Controller>
        <Scene duration={'200%'} pin triggerHook={0}>
          <div className="workTitle w-full">
            <div className="text-left">
              <h1 className="text-7xl font-bold" data-aos="fade-right" data-aos-duration="3500">{work.name}</h1><br />
              <p data-aos="fade-right" data-aos-duration="3500">{work.position} &#8211; {work.apptype}</p>
              <div data-aos="fade-right" data-aos-duration="4500">
                <p className="text-xs my-3 opacity-50">{work.technologies}</p>
              </div>
              <ul className="flex justify-center items-center mt-0" data-aos="fade-right" data-aos-duration="3500">
                <li className="inline justify-center px-4 pb-4 pt-0">
                  <a href={work.livedemo} target={work.linktarget} rel="noreferrer">
                    <FontAwesomeIcon icon={["fas", "desktop"]} size="lg" className="icons" />
                  </a>
                </li>
                <li className="inline justify-center px-4 pb-4 pt-0">
                  <a href={work.gitcode} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fas", "code"]} size="lg" className="icons" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Scene>
      </Controller>
    );
  }

  function PortfolioImage(img){
    return (
      <div>
        <div className="ml-0 items-center divBelow">
          <Image 
            src={img.source}
            alt={img.alt}
            width={img.width}
            height={img.height}
            className={img.class}
            quality={img.quality}
            layout='responsive'
            placeholder='blur'
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              convertImage(700, 475)
            )}`}
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>moita · web developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-2 flex flex-col justify-center h-screen items-center">
        <div className="flex-col items-center antialiased" data-aos="fade-down" data-aos-duration="250">
          Hey, I&apos;m <b>Moita</b>!<hr className="border-2 border-solid m-1 w-3/6 border-moitagreen mx-4 items-center hidden sm:inline-flex" /><br />
          I&apos;m a <b>web developer</b> and I&apos;m here to <b>help you</b>.
        </div>
        <div className="items-center flex-col my-8" data-aos="fade-up" data-aos-duration="250">
          <Link to='portfolioSection' spy={true} smooth={true} offset={-100} duration={500}>
            <button className="btn draw-border">
              my projects
            </button>
          </Link>
        </div>
      </main>

      <div className="container m-auto pt-8 p-4 justify-center max-w-9xl flex flex-col">
        <section id="portfolioSection" className="workSection">
          <PortfolioDescription
            name="Pilli" 
            position="Frontend Developer"
            apptype="Web App"
            technologies="vue · bootstrap · sass · firebase"
            livedemo="https://pillimidia-3fa4c.web.app/"
            linktarget="_blank"
            gitcode="https://github.com/moitadev/pillimidia"
          />

          <div className="workImages">
            <PortfolioImage
              source="/assets/pillidesk1.png"
              width={828}
              height={1040}
              quality="75"
            />
            
            <PortfolioImage
              source="/assets/pillimobi1.png"
              width={869}
              height={801}
              quality="75"
            />

            <PortfolioImage
              source="/assets/pilli1.png"
              width={880}
              height={880}
              quality="75"
              class="rounded-full"
            />
          </div>
        </section>
        <section className="workSection">
          <PortfolioDescription
            name="React Form" 
            position="Fullstack Developer"
            apptype="Web App"
            technologies="react · nodemailer · NodeJS"
            livedemo="/about#contactSection"
            linktarget="_self"
            gitcode="https://github.com/moitadev/moita-me/blob/main/pages/api/contact.js"
          />

          <div className="workImages">
            <PortfolioImage
              source="/assets/formdesk1.png"
              width={877}
              height={852}
              quality="75"
            />
             
            <PortfolioImage
              source="/assets/formmobi1.png"
              width={860}
              height={482}
              quality="75"
            />

            <PortfolioImage
              source="/assets/formdesk2.png"
              width={620}
              height={480}
              quality="75"
            />

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
              <a href="https://github.com/moitadev" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "github"]} size="xs" className="icons" />
              </a>
            </li>
            <li className="inline sm:block px-2 py-4 pt-0">
              <a href="https://dribbble.com/moita" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={["fab", "dribbble"]} size="xs" className="icons" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
