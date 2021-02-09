import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

export default function Myip() {
  const [MyMaping, setMyMaping] = useState(false)
  const MapNoSSR = dynamic(() => import('../components/Map.js'), {
    ssr: false
  })

  useEffect(() => {
    async function getIP() {
      const req = await fetch(`http://ip-api.com/json`)
      const res = await req.json()
      setMyMaping(res)
    }
    getIP()
  }, [])

  return (
    <>
      {MyMaping ? 
        <>
          {MyMaping.status === 'fail' ?
            <p className="text-red-500 dark:text-dark-400 text-center my-10 w-full text-xl font-bold">Sorry it looks like an error occurred!</p>
          :
            <>
              <div className="card my-10 mx-5 md:mx-8 rounded-xl p-10">
                <h1 className="text-center text-2xl font-extrabold dark:text-white mb-5">IP {MyMaping.query}</h1>
                <MapNoSSR latMap={MyMaping.lat} lonMap={MyMaping.lon} />
                <div className="space-y-6 sm:space-y-3 lg:grid-cols-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 mt-10 mx-1 mb-4">
                  <div className="flex">
                    <div className="py-3 px-5 w-full lg:max-w-sm bg-white rounded-xl card-shadow-sm ml-0 lg:ml-2 sm:mt-3">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold dark:text-gray-200">
                          ISP
                        </p>
                        <p className="text-gray-500 font-medium dark:text-gray-300">
                          {MyMaping.isp}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="py-3 px-5 w-full lg:max-w-sm bg-white rounded-xl card-shadow-sm ml-0 lg:ml-2 sm:mt-3">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold dark:text-gray-200">
                          Country
                        </p>
                        <p className="text-gray-500 font-medium dark:text-gray-300">
                          {MyMaping.country}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="py-3 px-5 w-full lg:max-w-sm bg-white rounded-xl card-shadow-sm ml-0 lg:ml-2 sm:mt-3">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold dark:text-gray-200">
                          City
                        </p>
                        <p className="text-gray-500 font-medium dark:text-gray-300">
                          {MyMaping.city}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="py-3 px-5 w-full lg:max-w-sm bg-white rounded-xl card-shadow-sm ml-0 lg:ml-2 sm:mt-3">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold dark:text-gray-200">
                          Region
                        </p>
                        <p className="text-gray-500 font-medium dark:text-gray-300">
                          {MyMaping.regionname}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="py-3 px-5 w-full lg:max-w-sm bg-white rounded-xl card-shadow-sm ml-0 lg:ml-2 sm:mt-3">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold dark:text-gray-200">
                          ZIP
                        </p>
                        <p className="text-gray-500 font-medium dark:text-gray-300">
                          {MyMaping.zip}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="py-3 px-5 w-full lg:max-w-sm bg-white rounded-xl card-shadow-sm ml-0 lg:ml-2 sm:mt-3">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold dark:text-gray-200">
                          Time Zone
                        </p>
                        <p className="text-gray-500 font-medium dark:text-gray-300">
                          {MyMaping.timezone}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          }
        </>
      :
        null
      }
    </>
  )
}