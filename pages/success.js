import Head from 'next/head'
import React from "react";
import Link from 'next/Link';

export default function success() {
  return (
    <div>
      <Head>
        <title>moita · Email Sent!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-2 flex flex-col justify-center h-screen items-center">
        <div className="flex-col items-center antialiased" data-aos="fade-down" data-aos-duration="250">
          Your email was successfully sent!
        </div>
        <div className="items-center flex-col my-8" data-aos="fade-up" data-aos-duration="250">
          <Link href="/">
            <button className="btn">
              GO HOME
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}