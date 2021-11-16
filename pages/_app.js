import Link from 'next/Link';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

config.autoAddCss = false;
import '../styles/globals.css';


function moitaApp({ Component, pageProps }) {
  useEffect(() =>{
    AOS.init();
  }, []);
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-moitablack p-6 fixed w-full z-50">
        <div className="flex items-center flex-shrink-0 mr-6 w-auto">
          <Link href="/">
            <a><img src="/assets/icon.svg" width={50}/></a>
          </Link>
          <Link href="/">
            <a><img className="p-2 hidden sm:inline-block" src="/assets/textNegative.svg" width={100} /></a>
          </Link>
        </div>
        <div className="w-auto block items-center">
          <ul className="space-x-4 col-end-7 inline-flex items-center">
            <li>
              <Link href="/about">
                <a>about</a>
              </Link>
            </li>
            {/* <li>
              <Link href="/blog">
                <a>blog</a>
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
      <div className="relative max-w-7xl mx-auto">
        <Component {...pageProps} />
      </div>
      
    </>
  )
}

export default moitaApp
