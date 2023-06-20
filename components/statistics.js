import Image from 'next/image'
import sunSVG from '../public/sun.svg?url'

const Statistics = ({ statistics }) => {
  return (
    <div className="rounded-md shadow-lg">
    <div className="flex justify-between items-center dark:text-white bg-white dark:bg-dark-900 bg-opacity-80 py-4 px-5 text-lg font-semibold space-x-6 ">
        <div className="flex items-center space-x-2">
            <Image
                  src='https://cdn.sportmonks.com/images/soccer/teams/7/71.png'
                  width={40}
                  height={40}
                  alt=''
              />
            <div className="uppercase dark:opacity-80 ">LEE</div>
        </div>
        {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
        <h2 className="roboto text-default dark:text-white dark:opacity-80 font-bold text-xl text-center italic uppercase">match statistics</h2>
        {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
        <div className="flex items-center space-x-2">
            <div className="uppercase dark:opacity-80 ">TOT</div>
            <Image
                  src='https://cdn.sportmonks.com/images/soccer/teams/6/6.png'
                  width={40}
                  height={40}
                  alt=''
              />
        </div>
    </div>
    <div className="flex flex-col items-center justify-between py-7 space-y-4 bg-white dark:bg-dark px-10">
        <div className="w-7/12">
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Ball possession</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                            <div className="text-custom-secondary px-2">52%</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-l-full h-1 bg-black" style={{width: "52%"}}></div>
                            <div className="bg-custom-primary rounded-r-full h-1 bg-black" style={{width: "48%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">48%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Total shots</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                            <div className="text-custom-secondary px-2">19</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-l-full h-1 bg-black" style={{width: "63%"}}></div>
                            <div className="bg-custom-primary rounded-r-full h-1 bg-black" style={{width: "37%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">11</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Shots on goal</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">2</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-l-full h-1 bg-black" style={{width: "22%"}}></div>
                            <div className="bg-custom-primary rounded-r-full h-1 bg-black" style={{width: "78%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                            <div className="text-custom-secondary px-2">7</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Total passes</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                            <div className="text-custom-secondary px-2">441</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-l-full h-1 bg-black" style={{width: "50%"}}></div>
                            <div className="bg-custom-primary rounded-r-full h-1 bg-black" style={{width: "50%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">437</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Pass accuracy</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">77%</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-l-full h-1 bg-black" style={{width: "50%"}}></div>
                            <div className="bg-custom-primary rounded-r-full h-1 bg-black" style={{width: "50%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                            <div className="text-custom-secondary px-2">78%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Yellow cards</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                            <div className="text-custom-secondary px-2">3</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-full h-1 bg-black" style={{width: "100%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Red cards</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">0</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-primary rounded-full h-1 bg-black" style={{width: "100%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">0</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Corners</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                            <div className="text-custom-secondary px-2">12</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-l-full h-1 bg-black" style={{width: "80%"}}></div>
                            <div className="bg-custom-primary rounded-r-full h-1 bg-black" style={{width: "20%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">3</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Fouls</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                            <div className="text-custom-secondary px-2">7</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-l-full h-1 bg-black" style={{width: "58%"}}></div>
                            <div className="bg-custom-primary rounded-r-full h-1 bg-black" style={{width: "42%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">5</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Offsides</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">1</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-l-full h-1 bg-black" style={{width: "50%"}}></div>
                            <div className="bg-custom-primary rounded-r-full h-1 bg-black" style={{width: "50%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">1</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-base w-full">
                <div className="text-center dark:text-white dark:opacity-80">Saves</div>
                <div className="flex items-center space-x-3">
                    <div className="w-1/12 flex justify-end">
                        <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                            <div className="text-custom-secondary px-2">3</div>
                        </div>
                    </div>
                    <div className="w-10/12 space-y-2 text-center">
                        <div className="flex justify-center">
                            <div className="bg-custom-secondary rounded-l-full h-1 bg-black" style={{width: "75%"}}></div>
                            <div className="bg-custom-primary rounded-r-full h-1 bg-black" style={{width: "25%"}}></div>
                        </div>
                    </div>
                    <div className="w-1/12 flex justify-start">
                        <div className="rounded-full py-0.5 font-semibold text-center ">
                            <div className="text-custom-secondary px-2">1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Statistics 