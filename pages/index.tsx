import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Intro from "../components/intro";
import PortFolio from "../components/portfolio";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <>
      <Head>
        <title>Raziq Ali</title>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001/'}/favicon.ico`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="HandheldFriendly" content="true" />
      </Head>
      <div>
        <Intro />
      </div>
      <div className="mt-44 sm:mt-96 md:mt-28 lg:mt-40 xl:mt-80" id="about">
        <About />
      </div>
      <div className="" id="portfolio">
        <PortFolio />
      </div>
      <div className="" id="timeline">
        <Timeline />
      </div>
      <div className="" id="contact">
        <Contact />
      </div>
      <div className="mt-20 h-12 bg-black bg-opacity-90 text-sm text-gray-300">
        <div className="w-10/12 md:w-9/12 h-full mx-auto flex items-center text-slate-500">
          © 2022 Raziq Ali. All rights reserved
        </div>
      </div>
    </>
  )
}