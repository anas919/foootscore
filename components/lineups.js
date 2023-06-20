import Image from 'next/image'
import sunSVG from '../public/sun.svg?url'

const Lineups = ({ lineups }) => {
  return (
    <div className="rounded-md shadow-lg">
    <div className="flex justify-between items-center dark:text-white bg-white dark:bg-dark-900 bg-opacity-80 py-4 px-5 text-lg font-semibold space-x-6 ">
        <div className="flex items-center space-x-2">
        <Image
                  src='https://cdn.sportmonks.com/images/soccer/teams/7/71.png'
                  width={40}
                  height={40}
              />
            <div className="uppercase dark:opacity-80 ">LEE</div>
        </div>
        {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
        <h2 className="roboto text-default dark:text-white dark:opacity-80 font-bold text-xl text-center italic uppercase">Lineup</h2>
        {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
        <div className="flex items-center space-x-2">
            <div className="uppercase dark:opacity-80 ">TOT</div>
        <Image
                  src='https://cdn.sportmonks.com/images/soccer/teams/6/6.png'
                  width={40}
                  height={40}
              />
        </div>
    </div>
    <div className="flex flex-row bg-indigo dark:bg-dark justify-evenly items-baseline pb-2">
        <div className="space-y-2 w-3/12 pl-4">
            <div className="py-2 font-bold dark:text-white dark:opacity-80">Lineup</div>
            <div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">22.</div>
                        <div className="dark:opacity-80">Joel Robles</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">2.</div>
                        <div className="dark:opacity-80">Luke Ayling</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">25.</div>
                        <div className="dark:opacity-80">Rasmus Kristensen</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">6.</div>
                        <div className="dark:opacity-80">Liam Cooper</div>
                        <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                        <div className="w-10px leading-none">
                        <Image
                                  src={sunSVG}
                                  width={10}
                                  height={10}
                              />
                              </div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">39.</div>
                        <div className="dark:opacity-80">Maximilian Wöber</div>
                        <div className="w-10px leading-none">
                        <Image
                                  src={sunSVG}
                                  width={10}
                                  height={10}
                              />
                        </div>
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
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">21.</div>
                        <div className="dark:opacity-80">Pascal Struijk</div>
                        <div className="w-10px leading-none">
                        <Image
                              src='https://widgets.sportmonks.com/images/yellow_card.svg'
                              width={10}
                              height={10}
                          />
              </div>
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
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">28.</div>
                        <div className="dark:opacity-80">Weston McKennie</div>
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
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">4.</div>
                        <div className="dark:opacity-80">Adam Forshaw</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">5.</div>
                        <div className="dark:opacity-80">Robin Koch</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">11.</div>
                        <div className="dark:opacity-80">Jack Harrison</div>
                        <div>
                            <div className="w-14px text-primary dark:text-white dark:opacity-60">
                                <div className="w-14px leading-none">
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
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
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">19.</div>
                        <div className="dark:opacity-80">Rodrigo</div>
                    </div>
                </div>
            </div>
            <div className="py-2 font-bold dark:text-white dark:opacity-80">Bench</div>
            <div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">1.</div>
                        <div className="dark:opacity-80">Illan Meslier</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">3.</div>
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
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">7.</div>
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
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">8.</div>
                        <div className="dark:opacity-80">Marc Roca</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">10.</div>
                        <div className="dark:opacity-80">Crysencio Summerville</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">24.</div>
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
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">29.</div>
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
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">42.</div>
                        <div className="dark:opacity-80">Sam Greenwood</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                        <div className="w-1/10 text-right opacity-50">62.</div>
                        <div className="dark:opacity-80">J. Chilokoa-Mullen</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-6/12">
            <div className="relative text-black">
                <div className="flex justify-between dark:text-white text-black mb-2">
                    <div className="space-y-1">
                        <div className="font-bold dark:opacity-80">5-4-1</div>
                        <div className="text-sm dark:opacity-80">Sam Allardyce</div>
                    </div>
                    <div className="text-right space-y-1">
                        <div className="font-bold dark:opacity-80">4-4-2</div>
                        <div className="text-sm dark:opacity-80">Ryan Mason</div>
                    </div>
                </div>
                <div className="relative">
                <Image
                  src='https://widgets.sportmonks.com/images/footballpitch.svg'
                  width={680}
                  height={410}
              />
                          </div>
                <div className="lineup-position gk-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">22</div>
                    </div>
                    <div className="lineup-circle-player">Joel Robles</div>
                </div>
                <div className="lineup-position rb-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">2</div>
                    </div>
                    <div className="lineup-circle-player">Luke Ayling</div>
                </div>
                <div className="lineup-position rcd-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">25</div>
                    </div>
                    <div className="lineup-circle-player">Rasmus Kristensen</div>
                </div>
                <div className="lineup-position lcd-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">6</div>
                    </div>
                    <div className="lineup-circle-player">Liam Cooper</div>
                </div>
                <div className="lineup-position lb-h ">
                    <div className="lineup-circle">
                        <div className="font-bold ">39</div>
                    </div>
                    <div className="lineup-circle-player">Maximilian Wöber</div>
                </div>
                <div className="lineup-position rm-h ">
                    <div className="lineup-circle">
                        <div className="font-bold ">21</div>
                    </div>
                    <div className="lineup-circle-player">Pascal Struijk</div>
                </div>
                <div className="lineup-position cm-h  ">
                    <div className="lineup-circle">
                        <div className="font-bold ">28</div>
                    </div>
                    <div className="lineup-circle-player">Weston McKennie</div>
                </div>
                <div className="lineup-position lm-h ">
                    <div className="lineup-circle">
                        <div className="font-bold ">4</div>
                    </div>
                    <div className="lineup-circle-player">Adam Forshaw</div>
                </div>
                <div className="lineup-position rf-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">5</div>
                    </div>
                    <div className="lineup-circle-player">Robin Koch</div>
                </div>
                <div className="lineup-position st-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">11</div>
                    </div>
                    <div className="lineup-circle-player">Jack Harrison</div>
                </div>
                <div className="lineup-position lf-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">19</div>
                    </div>
                    <div className="lineup-circle-player">Rodrigo</div>
                </div>
                <div className="lineup-position gk-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">20</div>
                    </div>
                    <div className="lineup-circle-player">Fraser Forster</div>
                </div>
                <div className="lineup-position rb-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">12</div>
                    </div>
                    <div className="lineup-circle-player">Emerson Royal</div>
                </div>
                <div className="lineup-position rcd-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">6</div>
                    </div>
                    <div className="lineup-circle-player">Davinson Sánchez</div>
                </div>
                <div className="lineup-position lcd-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">34</div>
                    </div>
                    <div className="lineup-circle-player">Clément Lenglet</div>
                </div>
                <div className="lineup-position lb-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">33</div>
                    </div>
                    <div className="lineup-circle-player">Ben Davies</div>
                </div>
                <div className="lineup-position rw-a ">
                    <div className="lineup-circle">
                        <div className="font-bold ">23</div>
                    </div>
                    <div className="lineup-circle-player">Pedro Porro</div>
                </div>
                <div className="lineup-position rcm-a ">
                    <div className="lineup-circle">
                        <div className="font-bold ">38</div>
                    </div>
                    <div className="lineup-circle-player">Yves Bissouma&nbsp;</div>
                </div>
                <div className="lineup-position lcm-a ">
                    <div className="lineup-circle">
                        <div className="font-bold ">4</div>
                    </div>
                    <div className="lineup-circle-player">Oliver Skipp</div>
                </div>
                <div className="lineup-position lw-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">7</div>
                    </div>
                    <div className="lineup-circle-player">Heung-min Son</div>
                </div>
                <div className="lineup-position rst-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">21</div>
                    </div>
                    <div className="lineup-circle-player">Dejan Kulusevski</div>
                </div>
                <div className="lineup-position lst-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">10</div>
                    </div>
                    <div className="lineup-circle-player">Harry Kane</div>
                </div>
            </div>
        </div>
        <div className="space-y-2 w-3/12 pr-4">
            <div className="py-2 text-right font-bold dark:text-white dark:opacity-80">Lineup</div>
            <div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div className="text-right dark:opacity-80">Fraser Forster</div>
                        <div className="w-1/10 opacity-50 ml-2">20.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div className="text-right dark:opacity-80">Emerson Royal</div>
                        <div className="w-1/10 opacity-50 ml-2">12.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div className="text-right dark:opacity-80">Davinson Sánchez</div>
                        <div className="w-1/10 opacity-50 ml-2">6.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div className="text-right dark:opacity-80">Clément Lenglet</div>
                        <div className="w-1/10 opacity-50 ml-2">34.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div className="text-right dark:opacity-80">Ben Davies</div>
                        <div className="w-1/10 opacity-50 ml-2">33.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
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
                        <div>
                            <div className="w-14px text-primary dark:text-white dark:opacity-60">
                                <div className="w-14px leading-none">
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                        <div className="text-right dark:opacity-80">Pedro Porro</div>
                        <div className="w-1/10 opacity-50 ml-2">23.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
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
                        <div className="text-right dark:opacity-80">Yves Bissouma&nbsp;</div>
                        <div className="w-1/10 opacity-50 ml-2">38.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
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
                        <div className="text-right dark:opacity-80">Oliver Skipp</div>
                        <div className="w-1/10 opacity-50 ml-2">4.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
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
                        <div className="text-right dark:opacity-80">Heung-min Son</div>
                        <div className="w-1/10 opacity-50 ml-2">7.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
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
                        <div className="text-right dark:opacity-80">Dejan Kulusevski</div>
                        <div className="w-1/10 opacity-50 ml-2">21.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div>
                            <div className="w-14px text-primary dark:text-white dark:opacity-60">
                                <div className="w-14px leading-none">
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="w-14px text-primary dark:text-white dark:opacity-60">
                                <div className="w-14px leading-none">
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
                        <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                        <div className="text-right dark:opacity-80">Harry Kane</div>
                        <div className="w-1/10 opacity-50 ml-2">10.</div>
                    </div>
                </div>
            </div>
            <div className="py-2 text-right font-bold dark:text-white dark:opacity-80">Bench</div>
            <div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
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
                        <div className="text-right dark:opacity-80">Richarlison</div>
                        <div className="w-1/10 opacity-50 ml-2">9.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div className="text-right dark:opacity-80">Arnaut Danjuma</div>
                        <div className="w-1/10 opacity-50 ml-2">16.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div className="text-right dark:opacity-80">Japhet Tanganga</div>
                        <div className="w-1/10 opacity-50 ml-2">25.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div>
                            <div className="w-14px text-primary dark:text-white dark:opacity-60">
                                <div className="w-14px leading-none">
                                    <Image
                                  src={sunSVG}
                                  width={15}
                                  height={15}
                              />
                                </div>
                            </div>
                        </div>
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
                        <div className="text-right dark:opacity-80">Lucas Moura</div>
                        <div className="w-1/10 opacity-50 ml-2">27.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
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
                        <div className="text-right dark:opacity-80">Pape Matar Sarr</div>
                        <div className="w-1/10 opacity-50 ml-2">29.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div className="text-right dark:opacity-80">Brandon Austin</div>
                        <div className="w-1/10 opacity-50 ml-2">40.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
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
                        <div className="text-right dark:opacity-80">M. Craig</div>
                        <div className="w-1/10 opacity-50 ml-2">51.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                        <div className="text-right dark:opacity-80">Yago Santiago</div>
                        <div className="w-1/10 opacity-50 ml-2">58.</div>
                    </div>
                </div>
                <div>
                    <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
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
                        <div className="text-right dark:opacity-80">G. Abbott</div>
                        <div className="w-1/10 opacity-50 ml-2">77.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Lineups