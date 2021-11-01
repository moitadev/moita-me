import Head from 'next/head'
import { useForm } from 'react-hook-form';
import React, { useRef } from "react";
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip';
import axios from 'axios';

library.add(fab, fas)

export default function About() {
  const router = useRouter();
  const contactSection = useRef(null);
  
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
        router.push('/')
      }
    } catch (err) {
      console.error(err);
    }
    
  }

  const gotoContactSection = () => window.scrollTo({ 
    top: contactSection.current.offsetTop, 
    behavior: "smooth"
  });
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
                <a href="https://www.linkedin.com/in/msales97/" target="_blank">
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} className="icons" />
                </a>
              </li>
              <li className="inline sm:block px-2 py-4">
                <a href="https://github.com/moitadev" target="_blank">
                  <FontAwesomeIcon icon={["fab", "github"]} className="icons" />
                </a>
              </li>
              <li className="inline sm:block px-2 py-4">
                <a href="https://dribbble.com/moita" target="_blank">
                  <FontAwesomeIcon icon={["fab", "dribbble"]} className="icons" />
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-2 sm:ml-24">
            <h1 className="font-bold text-3xl">Hi! I’m Marcos, AKA Moita.</h1>
            
            <p className="font-light my-1 pb-2">
              I’m a self taught <b className="font-semibold">web developer</b> who also does a bit of <b className="font-semibold">UI/UX</b>.
            </p>
            <p className="font-light">
              I’m passionate for coding and I consider myself as a very creative person. Right now I’m studying to be a <b className="font-semibold">fullstack developer</b> so please feel free to <b className="font-semibold cursor-pointer icons" onClick={gotoContactSection}>hit me up</b> with a cool project or a cool opportunity.
            </p>
          </div>
          <div className="ml-0 sm:ml-24 items-center">
            <img className="p-2 rounded-full" src="/assets/moitoji-primary.png" width={400} />
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
              <b>Here are some of the technologies that I've worked with/have knowledge:</b>
            </p>
            <div className="grid grid-flow-col gap-3 mt-8" data-aos="fade-up" data-aos-duration="3500" data-aos-delay="50">
              <div className="my-6">
                <FontAwesomeIcon data-tip="HTML" icon={["fab", "html5"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-6">
                <FontAwesomeIcon data-tip="CSS"  icon={["fab", "css3-alt"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-6">
                <FontAwesomeIcon data-tip="Bootstrap"  icon={["fab", "bootstrap"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-6">
                <FontAwesomeIcon data-tip="VueJS"  icon={["fab", "vuejs"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-6">
                <FontAwesomeIcon data-tip="Git"  icon={["fab", "git-alt"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-6">
                <FontAwesomeIcon data-tip="ReactJS"  icon={["fab", "react"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
            </div>
            <div className="grid grid-flow-col gap-0" data-aos="fade-up" data-aos-duration="3500" data-aos-delay="100">
              <div className="my-4">
                <FontAwesomeIcon data-tip="Figma"  icon={["fab", "figma"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-4">
                <FontAwesomeIcon data-tip="Wordpress"  icon={["fab", "wordpress"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-4">
                <FontAwesomeIcon data-tip="PHP"  icon={["fab", "php"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-4">
                <FontAwesomeIcon data-tip="Sass"  icon={["fab", "sass"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-4">
                <FontAwesomeIcon data-tip="Javascript"  icon={["fab", "js"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
              <div className="my-4">
                <FontAwesomeIcon data-tip="Docker"  icon={["fab", "docker"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
            </div>
            <div className="grid grid-flow-col gap-0" data-aos="fade-up" data-aos-duration="3500" data-aos-delay="150">
              <div className="my-4">
                <FontAwesomeIcon data-tip="NodeJS" icon={["fab", "node-js"]} size="2x" />
                <ReactTooltip place="top" type="dark" effect="float"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contactSection" ref={contactSection} className="p-2 flex flex-col items-center h-3/4">
        <p className="text-left">
            <b>Let’s grab a coffee and have a talk!</b> <FontAwesomeIcon icon={["fas", "coffee"]} size="xs" />
          </p>
        <div className="container mx-auto grid flex-col sm:grid-flow-col gap-4 items-center">
          <div className="ml-0 sm:ml-24 pb-2 w-100">
            <div className="grid-flow-col">
              <form className="my-6" onSubmit={handleSubmit(onSubmitForm)}>
                <span className="text-xs text-red-600 py-0">
                  {errors.name && "should I call you John or Jane Doe?"}
                </span>
                <input className="text-sm" type="text" name="name" {...register('name', { required: true},)} id="name" placeholder="name" />

                <span className="text-xs text-red-600 py-0">
                  {errors.email && "I'll need your email so I can contact you back"}
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
            in case you're having trouble with the form, send me an email directly at contato<a className="text-xs icons" href="mailto:contato@moita.me" target="_blank">@</a>moita.me<br />
            or reach me on my socials:
          </p>
          <ul className="flex justify-center items-center mt-0">
              <li className="inline px-2 py-4">
                <a href="https://www.linkedin.com/in/msales97/" target="_blank">
                  <FontAwesomeIcon icon={["fab", "linkedin-in"]} size="xs" className="icons" />
                </a>
              </li>
              <li className="inline sm:block px-2 py-4">
                <a href="https://github.com/moitadev" target="_blank">
                  <FontAwesomeIcon icon={["fab", "github"]} size="xs" className="icons" />
                </a>
              </li>
              <li className="inline sm:block px-2 py-4">
                <a href="https://dribbble.com/moita" target="_blank">
                  <FontAwesomeIcon icon={["fab", "dribbble"]} size="xs" className="icons" />
                </a>
              </li>
            </ul>
        </div>
      </section>
    </div>
  )
}
