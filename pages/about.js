import Head from 'next/head'
import { useForm } from 'react-hook-form';
import React, { useRef } from "react";
import { Link } from "react-scroll";
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip';
import axios from 'axios';

library.add(fab, fas)



export default function About() {
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

  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  async function onSubmitForm(values){
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try{
      const response = await axios(config);
      if(response.status == 200){
        reset();
        router.push('/success')
      }
    } catch (err) {
      console.error(err);
    }
    
  }

  function Technologies(props){
    return(
      <div className={props.className}>
        <FontAwesomeIcon data-tip={props.name} icon={["fab", props.iconName ]} size="2x" />
        <ReactTooltip place="top" type="dark" effect="float"/>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>moita · about</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-2 flex flex-col justify-center h-screen items-center">
        <div className="container mx-auto grid flex-col sm:grid-flow-col gap-4 justify-center items-center">
          <div className="relative sm:fixed">
            <ul className="flex sm:block justify-center sm:justify-start items-center mt-52 sm:mt-0">
              <li className="inline sm:block px-2 py-4">
                <a href="https://www.linkedin.com/in/msales97/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="icons" />
                </a>
              </li>
              <li className="inline sm:block px-2 py-4">
                <a href="https://github.com/moitadev" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={["fab", "github"]} className="icons" />
                </a>
              </li>
              <li className="inline sm:block px-2 py-4">
                <a href="https://dribbble.com/moita" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={["fab", "dribbble"]} className="icons" />
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-2 sm:ml-24">
            <h1 className="font-bold text-3xl">Hi! I&apos;m Marcos, AKA Moita.</h1>
            
            <p className="font-light my-1 pb-2">
              I&apos;m a self taught <b className="font-semibold">web developer</b> who also does a bit of <b className="font-semibold">UI/UX</b>.
            </p>
            <p className="font-light">
              I&apos;m passionate for coding and I consider myself as a very creative person. Right now I&apos;m studying to be a <b className="font-semibold">fullstack developer</b> so please feel free to <Link to='contactSection' spy={true} smooth={true} offset={-100} duration={500}><b className="font-semibold cursor-pointer icons">hit me up</b></Link> with a cool project or a cool opportunity.
            </p>
          </div>
          <div className="ml-0 sm:ml-24 items-center w-80">
            <Image 
              src="/assets/moitoji-primary.png"
              width={400}
              height={400}
              className="p-2 rounded-full"
              quality="100"
              priority
              layout='responsive'
              placeholder='blur'
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                convertImage(700, 475)
              )}`}
            />
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={["fas", "arrow-down"]} className="animate-bounce" />
        </div>
      </main>
      <section className="h-screen p-2 flex flex-col justify-center items-center">
        <div className="container mx-auto grid flex-col sm:grid-flow-col gap-4">
          <div className="ml-2 sm:ml-24 pb-2">
            <p className="text-left">
              <b>Here are some of the technologies that I&apos;ve worked with/have knowledge:</b>
            </p>
            <div className="grid grid-flow-col gap-0 mt-8" data-aos="fade-up" data-aos-duration="3500" data-aos-delay="50">
              <Technologies className="my-6" name="ReactJS" iconName="react" />
              <Technologies className="my-6" name="VueJS" iconName="vuejs" />
              <Technologies className="my-6" name="HTML" iconName="html5" />
              <Technologies className="my-6" name="CSS" iconName="css3-alt" />
              <Technologies className="my-6" name="Bootstrap" iconName="bootstrap" />
              <Technologies className="my-6" name="Git" iconName="git-alt" />
            </div>
            <div className="grid grid-flow-col gap-0" data-aos="fade-up" data-aos-duration="3500" data-aos-delay="100">
              <Technologies className="my-4" name="NodeJS" iconName="node-js" />
              <Technologies className="my-4" name="Wordpress" iconName="wordpress" />
              <Technologies className="my-4" name="PHP" iconName="php" />
              <Technologies className="my-4" name="SASS" iconName="sass" />
              <Technologies className="my-4" name="Javascript" iconName="js" />
              <Technologies className="my-4" name="Docker" iconName="docker" />
            </div>
            <div className="grid grid-flow-col gap-0" data-aos="fade-up" data-aos-duration="3500" data-aos-delay="150">
              
              <Technologies className="my-6" name="Figma" iconName="figma" />
            </div>
          </div>
        </div>
      </section>
      <section id="contactSection" className="p-2 flex flex-col items-center h-3/4">
        <p className="text-left">
            <b>Let&apos;s grab a coffee and have a talk!</b> <FontAwesomeIcon icon={["fas", "coffee"]} size="xs" />
          </p>
        <div className="container mx-auto grid flex-col sm:grid-flow-col gap-4 items-center">
          <div className="ml-0 sm:ml-24 pb-2 w-100">
            <div className="grid-flow-col">
              <form className="my-6" onSubmit={handleSubmit(onSubmitForm)} >
                <span className="text-xs text-red-600 py-0">
                  {errors.name && "should I call you John or Jane Doe?"}
                </span>
                <input className="text-sm" type="text" name="name" {...register('name', { required: true},)} id="name" placeholder="name" />

                <span className="text-xs text-red-600 py-0">
                  {errors.email && "I&apos;ll need your email so I can contact you back"}
                </span>
                <input className="text-sm" type="text" {...register('email', { required: true })} id="email" placeholder="email"  />

                <span className="text-xs text-red-600 py-0">
                  {errors.message && "did you just forgot to type your message?"}
                </span>
                <textarea id="message" {...register('message', { required: true })} placeholder="message" className="text-sm textArea h-32"></textarea>
                <input type="submit" value="send" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="my-6 p-2 flex flex-col justify-center items-center">
        <div className="container mx-auto grid flex-col justify-center items-center">
          <p className="font-light text-xs justify-center text-center">
            in case you&apos;re having trouble with the form, send me an email directly at contato<a className="text-xs icons" href="mailto:msalescontato@gmail.com" target="_blank" rel="noreferrer">@</a>moita.me<br />
            or reach me on my socials:
          </p>
          <ul className="flex justify-center items-center mt-0">
              <li className="inline px-2 py-4">
                <a href="https://www.linkedin.com/in/msales97/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="xs" className="icons" />
                </a>
              </li>
              <li className="inline sm:block px-2 py-4">
                <a href="https://github.com/moitadev" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={["fab", "github"]} size="xs" className="icons" />
                </a>
              </li>
              <li className="inline sm:block px-2 py-4">
                <a href="https://dribbble.com/moita" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={["fab", "dribbble"]} size="xs" className="icons" />
                </a>
              </li>
            </ul>
        </div>
      </section>
    </div>
  )
}
