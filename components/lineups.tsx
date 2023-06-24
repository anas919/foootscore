import Image from 'next/image'
import SunSVG from '../public/sun.svg'
import React, { useState, useEffect } from 'react';

const Lineups = ({ lineups,event_home_team ,event_away_team ,home_team_logo ,away_team_logo }) => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(()=>{
        console.log(lineups)
    },[])
  return (
    <div className="rounded-md shadow-lg">
        <div className="flex justify-between items-center dark:text-white bg-white dark:bg-dark-900 bg-opacity-80 py-4 px-5 text-lg font-semibold space-x-6 ">
            <div className="flex items-center space-x-2">
            <Image
                    src={home_team_logo}
                    width={40}
                    height={40}
                    alt=''
                />
                <div className="uppercase dark:opacity-80 ">{event_home_team}</div>
            </div>
            {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
            <h2 className="roboto text-default dark:text-white dark:opacity-80 font-bold text-xl text-center italic uppercase">Lineup</h2>
            {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
            <div className="flex items-center space-x-2">
                <div className="uppercase dark:opacity-80 ">{event_away_team}</div>
            <Image
                    src={away_team_logo}
                    width={40}
                    height={40}
                    alt=''
                />
            </div>
        </div>
    <div className="flex flex-row bg-indigo dark:bg-dark justify-evenly items-baseline pb-2">
        <div className="space-y-2 w-3/12 pl-4">
            <div className="py-2 font-bold dark:text-white dark:opacity-80">Lineup</div>
            <div>
                {
                    lineups.home_team.starting_lineups.map((player, index)=> (
                        <div key={index}>
                            <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                                <div className="w-1/10 text-right opacity-50">{player.player_number ? player.player_number : ''}</div>
                                <div className="dark:opacity-80">{player.player}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="py-2 font-bold dark:text-white dark:opacity-80">Bench</div>
            <div>
                {
                    lineups.home_team.substitutes.map((player, index)=> (
                        <div key={index}>
                            <div className="flex w-full items-center text-sm space-x-1 dark:text-white">
                                <div className="w-1/10 text-right opacity-50">{player.player_number ? player.player_number : ''}</div>
                                <div className="dark:opacity-80">{player.player}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="w-6/12">
            <div className="relative text-black">
                <div className="flex justify-between text-white mb-2">
                    <div className="space-y-1">
                        <div className="font-bold dark:opacity-80">4-3-3</div>
                        {
                            lineups.home_team.coaches.map((coache, index)=> (
                                <div key={index} className="text-sm dark:opacity-80">{coache.coache}</div>
                            ))
                        }
                    </div>
                    <div className="text-right space-y-1">
                        <div className="font-bold dark:opacity-80">4-3-3</div>
                        {
                            lineups.away_team.coaches.map((coache, index)=> (
                                <div key={index} className="text-sm dark:opacity-80">{coache.coache}</div>
                            ))
                        }
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src='https://widgets.sportmonks.com/images/footballpitch.svg'
                        width={680}
                        height={410}
                        alt=''
                    />
                </div>
                <div className="lineup-position gk-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[0].player_number ? lineups.home_team.starting_lineups[0].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[0].player}</div>
                </div>
                <div className="lineup-position rb-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[1].player_number ? lineups.home_team.starting_lineups[1].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[1].player}</div>
                </div>
                <div className="lineup-position rcd-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[2].player_number ? lineups.home_team.starting_lineups[2].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[2].player}</div>
                </div>
                <div className="lineup-position lcd-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[3].player_number ? lineups.home_team.starting_lineups[3].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[3].player}</div>
                </div>
                <div className="lineup-position lb-h ">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[4].player_number ? lineups.home_team.starting_lineups[4].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[4].player}</div>
                </div>
                <div className="lineup-position rm-h ">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[5].player_number ? lineups.home_team.starting_lineups[5].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[5].player}</div>
                </div>
                <div className="lineup-position cm-h  ">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[6].player_number ? lineups.home_team.starting_lineups[6].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[6].player}</div>
                </div>
                <div className="lineup-position lm-h ">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[7].player_number ? lineups.home_team.starting_lineups[7].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[7].player}</div>
                </div>
                <div className="lineup-position rf-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[8].player_number ? lineups.home_team.starting_lineups[8].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[8].player}</div>
                </div>
                <div className="lineup-position st-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[9].player_number ? lineups.home_team.starting_lineups[9].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[9].player}</div>
                </div>
                <div className="lineup-position lf-h">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.home_team.starting_lineups[10].player_number ? lineups.home_team.starting_lineups[10].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.home_team.starting_lineups[10].player}</div>
                </div>
                <div className="lineup-position gk-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[0].player_number ? lineups.away_team.starting_lineups[0].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[0].player}</div>
                </div>
                <div className="lineup-position rb-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[1].player_number ? lineups.away_team.starting_lineups[1].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[1].player}</div>
                </div>
                <div className="lineup-position rcd-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[2].player_number ? lineups.away_team.starting_lineups[2].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[2].player}</div>
                </div>
                <div className="lineup-position lcd-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[3].player_number ? lineups.away_team.starting_lineups[3].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[3].player}</div>
                </div>
                <div className="lineup-position lb-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[4].player_number ? lineups.away_team.starting_lineups[4].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[4].player}</div>
                </div>
                <div className="lineup-position rw-a ">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[5].player_number ? lineups.away_team.starting_lineups[5].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[5].player}</div>
                </div>
                <div className="lineup-position rcm-a ">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[6].player_number ? lineups.away_team.starting_lineups[6].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[6].player}</div>
                </div>
                <div className="lineup-position lcm-a ">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[7].player_number ? lineups.away_team.starting_lineups[7].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[7].player}</div>
                </div>
                <div className="lineup-position lw-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[8].player_number ? lineups.away_team.starting_lineups[8].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[8].player}</div>
                </div>
                <div className="lineup-position rst-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[9].player_number ? lineups.away_team.starting_lineups[9].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[9].player}</div>
                </div>
                <div className="lineup-position lst-a">
                    <div className="lineup-circle">
                        <div className="font-bold ">{lineups.away_team.starting_lineups[10].player_number ? lineups.away_team.starting_lineups[10].player_number : '-'}</div>
                    </div>
                    <div className="lineup-circle-player">{lineups.away_team.starting_lineups[10].player}</div>
                </div>
            </div>
        </div>
        <div className="space-y-2 w-3/12 pr-4">
            <div className="py-2 text-right font-bold dark:text-white dark:opacity-80">Lineup</div>
            <div>
                {
                    lineups.away_team.starting_lineups.map((player, index)=> (
                        <div key={index}>
                            <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                                <div className="text-right dark:opacity-80">{player.player}</div>
                                <div className="w-1/10 opacity-50 ml-2">{player.player_number ? player.player_number : ''}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="py-2 text-right font-bold dark:text-white dark:opacity-80">Bench</div>
            <div>
                {
                    lineups.away_team.substitutes.map((player, index)=> (
                        <div key={index}>
                            <div className="flex w-full justify-end items-center space-x-1 text-sm dark:text-white">
                                <div className="text-right dark:opacity-80">{player.player}</div>
                                <div className="w-1/10 opacity-50 ml-2">{player.player_number ? player.player_number : ''}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
</div>
  )
}

export default Lineups