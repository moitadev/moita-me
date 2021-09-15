import Link from 'next/Link';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container m-auto pt-8 p-4 max-w-9xl flex flex-col">
      <header className="flex flex-row justify-between items-center bg-moitablack">
        <div className="flex flex-row items-center">
          <Link href="/">
            <a><img src="/assets/icon.svg" width={50}/></a>
          </Link>
          <Link href="/">
            <a><img className="p-2 hidden sm:inline-block" src="/assets/textNegative.svg" width={100} /></a>
          </Link>
        </div>
        <nav className="flex my-4">
          <ul className="space-x-4 col-end-7 inline-flex items-center">
            <li>
              <Link href="/about">
                <a>about</a>
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
