import Image from 'next/image'
import sunSVG from '../public/sun.svg?url'

const Events = ({ events }) => {
  return (
    <div className="false rounded-md shadow-lg">
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
        <h2 className="roboto text-default dark:text-white dark:opacity-80 font-bold text-xl text-center italic uppercase">2nd Half</h2>
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
    <div className="bg-indigo">
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end"></div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">90'<span className="absolute -top-0.5 text-xs">+5</span></div>
                    <div className="text-xs">(1-4)</div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center">
                <div className="text-left">
                    <div className="flex items-center space-x-2">
                        <div className="text-primary dark:text-white dark:opacity-60">
                            <div className="w-14px leading-none">
                            <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                            </div>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <div className="dark:opacity-80">Lucas Moura</div>
                            <div className="opacity-50 italic text-xs">(Pape Matar Sarr)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end"></div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">90'<span className="absolute -top-0.5 text-xs">+1</span></div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center">
                <div className="text-left">
                    <div className="flex space-x-2 items-center">
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="dark:opacity-80">Lucas Moura</div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="opacity-50">Pedro Porro</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end"></div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">90'<span className="absolute -top-0.5 text-xs">+1</span></div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center">
                <div className="text-left">
                    <div className="flex space-x-2 items-center">
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="dark:opacity-80">G. Abbott</div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="opacity-50">Oliver Skipp</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end">
                <div className="text-right">
                    <div className="flex space-x-2 items-center">
                        <div className="flex justify-end space-x-2">
                            <div className="dark:opacity-80">Wilfried Gnonto</div>
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 justify-end">
                            <div className="opacity-50">Jack Harrison</div>
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">88'</div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center"></div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end"></div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">77'</div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center">
                <div className="text-left">
                    <div className="flex space-x-2 items-center">
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="dark:opacity-80">M. Craig</div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="opacity-50">Yves Bissouma&nbsp;</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end"></div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">76'</div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center">
                <div className="text-left">
                    <div className="flex space-x-2 items-center">
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="dark:opacity-80">Richarlison</div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="opacity-50">Heung-min Son</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end"></div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">69'</div>
                    <div className="text-xs">(1-3)</div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center">
                <div className="text-left">
                    <div className="flex items-center space-x-2">
                        <div className="text-primary dark:text-white dark:opacity-60">
                            <div className="w-14px leading-none">
                            <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                            </div>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <div className="dark:opacity-80">Harry Kane</div>
                            <div className="opacity-50 italic text-xs">(Pedro Porro)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end">
                <div className="text-right">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-2 items-center">
                            <div className="dark:opacity-80">Jack Harrison</div>
                            <div className="opacity-50 italic">(Georginio Rutter)</div>
                        </div>
                        <div className="text-primary dark:text-white dark:opacity-60">
                            <div className="w-14px leading-none">
                            <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">67'</div>
                    <div className="text-xs">(1-2)</div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center"></div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end"></div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">67'</div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center">
                <div className="text-left">
                    <div className="flex space-x-2 items-center">
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                   <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="dark:opacity-80">Pape Matar Sarr</div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                            <div className="opacity-50">Dejan Kulusevski</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end">
                <div className="text-right">
                    <div className="flex space-x-2 items-center">
                        <div className="flex justify-end space-x-2">
                            <div className="dark:opacity-80">Georginio Rutter</div>
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 justify-end">
                            <div className="opacity-50">Weston McKennie</div>
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">60'</div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center"></div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end">
                <div className="text-right">
                    <div className="flex space-x-2 items-center">
                        <div className="flex justify-end space-x-2">
                            <div className="dark:opacity-80">Junior Firpo</div>
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 justify-end">
                            <div className="opacity-50">Maximilian Wöber</div>
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">59'</div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center"></div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end">
                <div className="text-right">
                    <div className="flex space-x-2 items-center">
                        <div className="flex justify-end space-x-2">
                            <div className="dark:opacity-80">Brenden Aaronson</div>
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                   <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                        <div className="flex space-x-2 justify-end">
                            <div className="opacity-50">Pascal Struijk</div>
                            <div className="flex justify-center">
                                <div className="flex flex-col rotate-180 -space-y-1.5">
                                <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">59'</div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center"></div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end">
                <div className="text-right">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-2 items-center">
                            <div className="dark:opacity-80">Liam Cooper</div>
                        </div>
                        <div className="w-12px leading-none">
                            <Image
                                  src='https://widgets.sportmonks.com/images/yellow_card.svg'
                                  width={15}
                                  height={15}
                                  alt=''
                              />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">56'</div>
                    <div className="text-xs"></div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center"></div>
        </div>
        <div className="flex text-default dark:bg-dark dark:text-white border-prefix border-b py-2 border-gray-100 dark:border-dark-800 items-center">
            <div style={{width:'45%'}} className="flex items-center justify-end"></div>
            <div style={{width:'10%'}} className="flex flex-col items-center justify-center">
                <div className="flex flex-col text-center text-secondary">
                    <div className="relative">47'</div>
                    <div className="text-xs">(0-2)</div>
                </div>
            </div>
            <div style={{width:'45%'}} className="flex items-center">
                <div className="text-left">
                    <div className="flex items-center space-x-2">
                        <div className="text-primary dark:text-white dark:opacity-60">
                            <div className="w-14px leading-none">
                            <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                            </div>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <div className="dark:opacity-80">Pedro Porro</div>
                            <div className="opacity-50 italic text-xs"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Events 