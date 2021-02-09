import { useForm } from 'react-hook-form'
import { useState } from 'react'
import dynamic from 'next/dynamic'

export default function Searchip() {
  const { register, handleSubmit, errors, getValues, clearErrors, watch } = useForm()
  const [Maping, setMaping] = useState(false)
  const MapNoSSR = dynamic(() => import('../components/Map.js'), {
    ssr: false
  })

  const onSubmit = async () => {
    const dataip = getValues('ip')
    const req = await fetch(`http://ip-api.com/json/${dataip}`)
    const res = await req.json()
    setMaping(res)
  }

  return (
    <>
      <div className="flex items-center justify-center my-6 mx-8">
        <div className="relative items-stretch w-full mb-4 relative w-5/6 md:w-3/4 text-xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="ip" id="ip" ref={register({ required: true })} className="ip py-3 pl-5 text-sm rounded-full pr-10 focus:outline-none focus:text-base dark:text-white w-full" placeholder="Search IP..." autoComplete="off" />
            <div className="absolute inset-y-0 right-0 flex items-center pl-2 pr-4">
              <button type="submit" className="text-gray-700 focus:text-gray-800 p-1 focus:outline-none focus:shadow-outline dark:text-gray-300 dark:focus:text-white">
                <i className="fas fa-search-location fa-xl"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {errors.ip && errors.ip.type == 'required' && (
        <p className="-mt-7 mb-2 text-sm text-red-500 dark:text-red-400 text-center slide-down">Input is required!</p>
      )}
      {Maping ? 
        <>
          {Maping.status === 'fail' ?
            <p className="text-red-500 dark:text-dark-400 text-center my-10 w-full text-xl font-bold">Sorry it looks like an error occurred!</p>
          :
            <>
              <div className="card my-10 mx-5 md:mx-8 rounded-xl p-10">
                <h1 className="text-center text-2xl font-extrabold dark:text-white mb-5">IP {Maping.query}</h1>
                <MapNoSSR latMap={Maping.lat} lonMap={Maping.lon} />
                <div className="space-y-6 sm:space-y-3 lg:grid-cols-3 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-4 mt-10 mx-1 mb-4">
                  <div className="flex">
                    <div className="py-3 px-5 w-full lg:max-w-sm bg-white rounded-xl card-shadow-sm ml-0 lg:ml-2 sm:mt-3">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold dark:text-gray-200">
                          ISP
                        </p>
                        <p className="text-gray-500 font-medium dark:text-gray-300">
                          {Maping.isp}
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
                          {Maping.country}
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
                          {Maping.city}
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
                          {Maping.regionname}
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
                          {Maping.zip}
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
                          {Maping.timezone}
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