import Head from 'next/head'
import Header from '../components/Header.js'
import Search from '../components/SearchIP.js'
import Myip from '../components/MyIP.js'
import { useState } from 'react'

export default function Home() {

  const [Menu, setMenu] = useState(true)

  return (
    <>
      <Head>
        <title>Nexip</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossOrigin="anonymous" />
      </Head>

      <main className="min-h-screen flex items-center justify-center my-5">
        <div className="box-glass min-h-full bg-white w-11/12 md:w-3/4 rounded-xl z-10">
          <Header/>
          <div className="flex items-center justify-center my-4 md:my-2 mx-8">
            <div className="flex justify-center items-center">
              <div className="relative justify-center items-center">
                <div className="box-menu w-60 h-10 rounded-xl"></div>
                <button id="menu1" onClick={() => setMenu(true)} className={`absolute w-2/4 rounded-full inset-y-0 left-0 text-gray-900 dark:text-white text-center focus:outline-none cursor-pointer menu ${Menu ? 'active' : ''}`}>
                  Search IP
                </button>
                <button id="menu2" onClick={() => setMenu(false)} className={`absolute w-2/4 rounded-full inset-y-0 right-0 text-gray-900 dark:text-white text-center focus:outline-none cursor-pointer menu ${Menu ? '' : 'active'}`}>
                  My IP
                </button>
              </div>
            </div>
          </div>
          {Menu ?
            <Search />
          :
            <Myip />
          }
          <div className="my-2">
            <div className="max-w-7xl mx-auto py-2 px-2 sm:px-6 lg:px-8">
              <p className="text-center dark:text-gray-300 text-sm font-normal truncate mx-auto">
                Build by{' '}
                <a
                  href="https://nizar.tech"
                >
                  Nizar
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="bulat1"></div>
        <div className="bulat2"></div>
        <div className="kotak2 transform rotate-12"></div>
      </main>
    </>
  )
}
