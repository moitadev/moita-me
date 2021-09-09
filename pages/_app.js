import Link from 'next/Link';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container m-auto pt-8 p-4 max-w-9xl flex flex-col">
      <header className="flex justify-between items-center">
        <div className="flex">
          <img src="/assets/icon.svg" width={50}/>
          <img className="px-2 inline-block hidden sm:inline-block" src="/assets/textNegative.svg" width={100} />
        </div>
        <nav className="flex my-4">
          <ul className="space-x-4 col-end-7 inline-flex items-center">
            <li>
              <Link href="/about">
                <a>sobre</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
