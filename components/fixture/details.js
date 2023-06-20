import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState  } from 'react';
import BallSVG from '../../public/ball.svg'
import SubstituteSVG from '../../public/substitute.svg'

const FixtureDetails = ({ dataEvents }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
  <div className="grid grid-cols-11 pt-4 text-sm">
    <div className="col-span-5 flex items-end flex-col gap-1">
    {dataEvents.map(([time, eventTypes], index) => (
      <div key={index}>
          {Object.entries(eventTypes).map(([eventType, eventData], index) => (
          <div key={index}>
              {
                  eventType=='goalscorers' ?
                      eventData.home_scorer ?
                      <div className="flex space-x-4">
                        <div className="text-right opacity-60 dark:opacity-80 truncate">{eventData.home_scorer}</div>
                        <div className="flex items-center space-x-2">
                          <div className="flex text-custom-secondary w-16px">{time}'</div>
                          <div className="text-redlive">
                            <div className="w-12px leading-none">
                              <BallSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      :
                      null
                  :
                  eventType=='cards' ?
                      eventData.home_fault ?
                        <div className="flex space-x-4">
                          <div className="text-right opacity-60 dark:opacity-80 truncate">{eventData.home_fault}</div>
                          <div className="flex items-center space-x-2">
                            <div className="flex text-custom-secondary w-16px">{time}'</div>
                            <div className="text-redlive">
                              <div className="w-12px leading-none">
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
                        :
                        null
                  :
                  eventType=='substitutes' ?
                      eventData.home_scorer.length ?
                      <div className="flex space-x-4">
                          <div className="text-right opacity-60 dark:opacity-80 truncate">{eventData.home_fault}</div>
                          <div className="flex items-center space-x-2">
                            <div className="flex text-custom-secondary w-16px">{time}'</div>
                            <div className="text-redlive">
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
                            </div>
                          </div>
                        </div>
                      :
                      null
                  :
                  null
              }
          </div>
          ))}
      </div>
    ))}
    </div>
    <div className="col-span-1"></div>
    <div className="flex col-span-5 flex-col">
    {dataEvents.map(([time, eventTypes], index) => (
      <div key={index}>
          {Object.entries(eventTypes).map(([eventType, eventData], index) => (
          <div key={index}>
              {
                  eventType=='goalscorers' ?
                      eventData.away_scorer ?
                      <div className="flex space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="text-white">
                                <div className="w-12px leading-none">
                                  <BallSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                                </div>
                            </div>
                            <div className="flex text-custom-secondary w-16px">{time}'</div>
                        </div>
                        <div className="opacity-60 dark:opacity-80">{eventData.away_scorer}</div>
                    </div>
                      :
                      null
                  :
                  eventType=='cards' ?
                      eventData.away_fault ?
                        <div className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                              <div className="text-white">
                                  <div className="w-12px leading-none">
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
                              <div className="flex text-custom-secondary w-16px">{time}'</div>
                          </div>
                          <div className="opacity-60 dark:opacity-80">{eventData.away_fault}</div>
                        </div>
                        :
                        null
                  :
                  eventType=='substitutes' ?
                      eventData.away_scorer.length ?
                      <div className="flex space-x-4">
                          <div className="text-right opacity-60 dark:opacity-80 truncate">{eventData.away_fault}</div>
                          <div className="flex items-center space-x-2">
                            <div className="flex text-custom-secondary w-16px">{time}'</div>
                            <div className="text-redlive">
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
                          </div>
                        </div>
                      :
                      null
                  :
                  null
              }
          </div>
          ))}
      </div>
    ))}
    </div>
  </div>
  )
}

export default FixtureDetails