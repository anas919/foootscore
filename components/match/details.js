import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState  } from 'react';
import BallSVG from '../../public/ball.svg'
import SubstituteSVG from '../../public/substitute.svg'

const Details = ({ dataEvents }) => {
  const [darkMode, setDarkMode] = useState(false);
  
  
  return (
    <div className="py-1 bg-white dark:bg-stone-800">
    {dataEvents.map(([time, eventTypes], index) => (
      <div key={index}>
          {Object.entries(eventTypes).map(([eventType, eventData], index) => (
          <div key={index}>
              {
                  eventType=='goalscorers' ?
                      eventData.away_scorer ?
                          <div className="flex space-x-2 text-sm">
                              <div className="flex-1 flex items-center justify-end"></div>
                              <div className="flex-grow-0 flex-shrink-0 w-48px flex items-center justify-center text-custom-secondary">
                                  <div className="relative dark:text-white">{time}'</div>
                              </div>
                              <div className="flex-1 flex items-center">
                                  <div className="w-10px">
                                      <div className="text-primary dark:text-white">
                                          <div className="w-14px leading-none">
                                              <BallSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="ml-2 dark:text-white">{eventData.away_scorer}</div>
                              </div>
                          </div>
                      :
                      <div className="flex space-x-2 text-sm">
                          <div className="flex-1 flex items-center justify-end">
                              <div className="mr-1 dark:text-white">{eventData.home_scorer}</div>
                              <div className="w-10px">
                                  <div className="text-redlive">
                                      <div className="w-14px leading-none">
                                          <BallSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="flex-grow-0 flex-shrink-0 w-48px flex items-center justify-center text-custom-secondary">
                              <div className="relative dark:text-white">{time}'</div>
                          </div>
                          <div className="flex-1 flex items-center"></div>
                      </div>
                  :
                  eventType=='cards' ?
                      eventData.away_fault ?
                          <div className="flex space-x-2 text-sm">
                              <div className="flex-1 flex items-center justify-end"></div>
                              <div className="flex-grow-0 flex-shrink-0 w-48px flex items-center justify-center text-custom-secondary">
                                  <div className="relative dark:text-white">{time}'</div>
                              </div>
                              <div className="flex-1 flex items-center">
                                  <div className="w-10px">
                                      <div className="text-primary dark:text-white">
                                          <div className="w-14px leading-none">
                                              {
                                                  eventData.card=='yellow card' ?
                                                  <Image
                                                      src={"https://widgets.sportmonks.com/images/yellow_card.svg"}
                                                      width={15}
                                                      height={15}
                                                      alt=""
                                                  />
                                                  :
                                                  <Image
                                                      src={"https://widgets.sportmonks.com/images/red_card.svg"}
                                                      width={15}
                                                      height={15}
                                                      alt=""
                                                  />
                                              }
                                          </div>
                                      </div>
                                  </div>
                                  <div className="ml-2 dark:text-white">{eventData.away_fault}</div>
                              </div>
                          </div>
                          :
                          <div className="flex space-x-2 text-sm">
                              <div className="flex-1 flex items-center justify-end">
                                  <div className="mr-1 dark:text-white">{eventData.home_fault}</div>
                                  <div className="w-10px">
                                      <div className="text-redlive">
                                          <div className="w-14px leading-none">
                                              {
                                                  eventData.card=='yellow card' ?
                                                  <Image
                                                      src={"https://widgets.sportmonks.com/images/yellow_card.svg"}
                                                      width={15}
                                                      height={15}
                                                      alt=""
                                                  />
                                                  :
                                                  <Image
                                                      src={"https://widgets.sportmonks.com/images/red_card.svg"}
                                                      width={15}
                                                      height={15}
                                                      alt=""
                                                  />
                                              }
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="flex-grow-0 flex-shrink-0 w-48px flex items-center justify-center text-custom-secondary">
                                  <div className="relative dark:text-white">{time}'</div>
                              </div>
                              <div className="flex-1 flex items-center"></div>
                          </div>
                  :
                  eventType=='substitutes' ?
                      eventData.away_scorer ?
                      <div className="flex space-x-2 text-sm">
                          <div className="flex-1 flex items-center justify-end"></div>
                          <div className="flex-grow-0 flex-shrink-0 w-48px flex items-center justify-center text-custom-secondary">
                              <div className="relative dark:text-white">{time}'</div>
                          </div>
                          <div className="flex-1 flex items-center">
                              <div className="w-10px">
                                  <div className="text-primary dark:text-white">
                                      <div className="w-14px leading-none">
                                          <SubstituteSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                                      </div>
                                  </div>
                              </div>
                              <div className="ml-2 dark:text-white"><span className='text-red-500 font-bold'>{eventData.away_scorer.out}</span>-<span className='text-green-500 font-bold'>{eventData.away_scorer.in}</span></div>
                          </div>
                      </div>
                      :
                      <div className="flex space-x-2 text-sm">
                          <div className="flex-1 flex items-center justify-end">
                              <div className="mr-1 dark:text-white"><span className='text-red-500 font-bold'>{eventData.home_scorer.out}</span>-<span className='text-green-500 font-bold'>{eventData.home_scorer.in}</span></div>
                              <div className="w-10px">
                                  <div className="text-redlive">
                                      <div className="w-14px leading-none">
                                          <SubstituteSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="flex-grow-0 flex-shrink-0 w-48px flex items-center justify-center text-custom-secondary">
                              <div className="relative dark:text-white">{time}'</div>
                          </div>
                          <div className="flex-1 flex items-center"></div>
                      </div>
                  :
                  null
              }
          </div>
          ))}
      </div>
    ))}
  </div>
  )
}

export default Details