import Image from 'next/image'
import SunSVG from '../public/sun.svg'
import React, { useState, useEffect } from 'react';

const Location = ({ location }) => {
    const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="rounded-md shadow-lg">
    <div className="flex justify-between items-center dark:text-white bg-white dark:bg-dark-900 bg-opacity-80 py-4 px-5 text-lg font-semibold space-x-6 ">
        <div className="flex items-center space-x-2">
            <Image
                  src='https://cdn.sportmonks.com/images/soccer/teams/18/18.png'
                  width={40}
                  height={40}
                  alt=''
              />
            <div className="uppercase dark:opacity-80 ">CHE</div>
        </div>
        {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
        <h2 className="roboto text-black dark:text-white dark:opacity-80 font-bold text-xl text-center italic uppercase">Location info</h2>
        {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
        <div className="flex items-center space-x-2">
            <div className="uppercase dark:opacity-80 ">NEW</div>
            <Image
                  src='https://cdn.sportmonks.com/images/soccer/teams/20/20.png'
                  width={40}
                  height={40}
                  alt=''
              />
        </div>
    </div>
    <div className="flex justify-center space-x-6 bg-indigo dark:bg-dark px-5 py-7">
        <div className="p-5 pb-9 border-prefix border border-gray-100 rounded-md dark:bg-dark-900 dark:border-dark-900">
            <div className="flex flex-col space-y-5">
                <div className="font-bold text-center dark:text-white dark:opacity-80">Venue</div>
                <div className="flex gap-x-4 gap-y-2 flex-row items-center">
            <Image
                  src='https://cdn.sportmonks.com/images/soccer/venues/14/321614.png'
                  width={200}
                  height={200}
                  alt=''
              />
                    <div className="dark:text-white space-y-2 flex-1">
                        <div className="flex">
                            <div className="dark:opacity-80 font-medium w-4/12">Venue</div>
                            <div className="opacity-60 w-8/12">Stamford Bridge</div>
                        </div>
                        <div className="flex">
                            <div className="dark:opacity-80 font-medium w-4/12">Capacity</div>
                            <div className="opacity-60 w-8/12">41798</div>
                        </div>
                        <div className="flex">
                            <div className="dark:opacity-80 font-medium w-4/12">Surface</div>
                            <div className="opacity-60 w-8/12 capitalize">grass</div>
                        </div>
                        <div className="flex">
                            <div className="dark:opacity-80 font-medium w-4/12">City</div>
                            <div className="opacity-60 w-8/12">London</div>
                        </div>
                        <div className="flex">
                            <div className="dark:opacity-80 font-medium w-4/12">Address</div>
                            <div className="opacity-60 w-8/12">Fulham Road</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-prefix border border-gray-100 dark:bg-dark-900 dark:border-dark-900 dark:text-white rounded-md px-5 py-5 pb-9">
            <div className="flex flex-col space-y-5">
                <div className="font-bold text-center dark:opacity-80">Weather Report</div>
                <div className="flex flex-wrap text-center">
                    <div className="w-1/3 py-4 flex flex-col items-center leading-4">
                        <div className="text-custom-secondary text-2xl mb-1">
                        <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                        </div>
                        <div className="font-base opacity-60">Weather</div>
                        <div className="font-medium capitalize dark:opacity-80">overcast clouds</div>
                    </div>
                    <div className="w-1/3 py-4 flex flex-col items-center leading-4">
                        <div className="text-custom-secondary text-2xl mb-1">
                        <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                        </div>
                        <div className="font-base opacity-60">Temperature</div>
                        <div className="font-medium capitalize dark:opacity-80">23.7℃</div>
                    </div>
                    <div className="w-1/3 py-4 flex flex-col items-center leading-4">
                        <div className="text-custom-secondary text-2xl mb-1">
                        <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                        </div>
                        <div className="font-base opacity-60">Clouds</div>
                        <div className="font-medium capitalize dark:opacity-80">100%</div>
                    </div>
                    <div className="w-1/3 py-4 flex flex-col items-center leading-4">
                        <div className="text-custom-secondary text-2xl mb-1">
                        <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                        </div>
                        <div className="font-base opacity-60">Wind Speed</div>
                        <div className="font-medium capitalize dark:opacity-80">3.54</div>
                    </div>
                    <div className="w-1/3 py-4 flex flex-col items-center leading-4">
                        <div className="text-custom-secondary text-2xl mb-1">
                        <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                        </div>
                        <div className="font-base opacity-60">Humidity</div>
                        <div className="font-medium capitalize dark:opacity-80">23%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Location 