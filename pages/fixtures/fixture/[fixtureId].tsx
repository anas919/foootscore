import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SunSVG from '../../../public/sun.svg'
import MoonSVG from '../../../public/moon.svg'
import BallSVG from '../../../public/ball.svg'
import BackSVG from '../../../public/back.svg'
import axios from 'axios';
import WhistleSVG from '../../../public/whistle.svg'
import FieldSVG from '../../../public/field.svg'
import CalendarSVG from '../../../public/calendar.svg'
import FixtureDetails from '../../../components/fixture/details';
import LoadingSpinner from '../../../utils/LoadingSpinner';
import Lineups from '../../../components/lineups'
import Statistics from '../../../components/statistics'
require('dotenv').config()

const Fixture = () => {

    const [darkMode, setDarkMode] = useState(false);
    const router = useRouter()
    const [match, setMatch] = useState([])
    const [loading, setLoading] = useState(true)
    const [dataEvents, setDataEvents] = useState([]);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    const [showStatistics, setShowStatistics] = useState<boolean>(true);
    const [showLineups, setShowLineups] = useState<boolean>(false);

    
    useEffect(() => {
        if(!router.isReady) return;
        const fetchData = async () => {

                await axios({
                    method: 'get',
                    url: `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=${process.env.API_KEY}&matchId=${router.query.fixtureId}`,
                    headers: {
                      'Accept': 'application/json',
                    },
                })
                .then(res => {
                    //updateUserData("","","","","")
                    setMatch(res.data.result)
                    setLoading(false);
                    //Events
                    const parsedData = Object.entries({ "goalscorers":res.data.result[0].goalscorers, "substitutes":res.data.result[0].substitutes, "cards":res.data.result[0].cards }).reduce((result, [eventType, eventArray]) => {
                        eventArray.forEach(event => {
                        const { time, ...eventData } = event;
                        result[time] = result[time] || {};
                        result[time][eventType] = eventData;
                        });
                        return result;
                    }, {});
                    console.log(Object.entries(parsedData))
                    setDataEvents(Object.entries(parsedData))
                })
                .catch(error => {
                    console.log("error")
                    console.log(error)
                });
          
        };
        fetchData();
        //Capture screen sizes to render UI responsivly
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [router.isReady]);

    const navigateBack = () => {
        router.push('/');
    }

    return (
        <div className={darkMode ? 'dark' : ''}>
            { loading ?
                <div className='flex h-screen'>
                    <div className='m-auto'>
                        <LoadingSpinner />
                    </div>
                </div>
            :
                isSmallScreen ?
                match.map((res, index) => (
                    <div className="nav-widget-dark bg-indigo-950 dark:bg-zinc-900 text-white py-3 space-y-4">
                        <div className="flex items-center px-2.5 space-x-2">
                            <div className="w-2/12 flex justify-start" onClick={()=>{ navigateBack() }}>
                                <BackSVG height="25" width="25" fill={"#fff"}/>
                            </div>
                            <div className="flex flex-wrap justify-center items-center space-x-1 text-sm w-8/12">
                                <div className="w-24px h-24px flex justify-center items-center bg-white rounded-full mr-1">
                                    <Image
                                        src={res.league_logo}
                                        width={16}
                                        height={16}
                                        alt=''
                                    />
                                </div>
                                <div className="flex items-center space-x-2 opacity-60">
                                    <div className="border-prefix pr-2 border-r border-opacity-60 border-white leading-none">{res.league_name} ({res.country_name})</div>
                                    <div className="flex space-x-2"><span>{res.league_round}</span></div>
                                </div>
                            </div>
                            <div className="flex justify-end w-2/12">
                                <div onClick={() => { setDarkMode(!darkMode) }} className="flex justify-between p-0.5 rounded-full border-prefix border border-white border-opacity-20">
                                    <div className="p-0.5 bg-white dark:bg-transparent dark:bg-dark-800  rounded-full cursor-pointer">
                                        <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                                    </div>
                                    <div className="p-0.5 bg-transparent dark:bg-white rounded-full space-x-1 cursor-pointer">
                                        <MoonSVG height="15" width="15" fill={darkMode ? "#000" : "#fff"}/>
                                    </div>
                                </div>
                                {/* <div className="flex justify-between p-0.5 rounded-full border-prefix border border-white border-opacity-20">
                                    <div className="p-0.5   rounded-full cursor-pointer">
                                        SSVVGG Dark
                                    </div>
                                    <div className="p-0.5 bg-dark-800 text-white  rounded-full space-x-1 cursor-pointer">
                                        SSVVGG Light
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="flex flex-col items-center px-1.5">
                            <div className="grid grid-cols-12 items-center justify-center gap-8 py-2">
                                <div className="col-span-5 flex items-center gap-2 justify-self-end">
                                    <div className="relative flex-shrink-0">
                                        <Image
                                            src={res.home_team_logo}
                                            width={64}
                                            height={64}
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col relative items-center col-span-2">
                                    <div className="flex absolute -top-4 text-center text-xs">
                                        <div className="dark:text-white dark:opacity-80 uppercase">NS</div>
                                    </div>
                                    <div className="bg-custom-primary rounded-full py-1 px-5 dark:bg-dark-900">
                                        <div className="flex items-center dark:opacity-80 text-base space-x-2"><span>{res.event_final_result}</span></div>
                                    </div>
                                    <div className="absolute truncate dark:opacity-80 text-center text-xs top-8"></div>
                                </div>
                                <div className="col-span-5 flex items-center gap-2 justify-self-start">
                                    <div className="relative flex-shrink-0">
                                        <Image
                                            src={res.away_team_logo}
                                            width={64}
                                            height={64}
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                            <FixtureDetails dataEvents={dataEvents} />
                        </div>
                        <div className="text-sm px-4 justify-between flex flex-wrap gap-x-2 gap-y-1 pt-3 border-prefix border-t-2 border-white border-opacity-30 items-center opacity-60 pb-1">
                            <div className="flex items-center space-x-2">
                                <div className="text-xl flex items-center">
                                    <CalendarSVG height="12" width="12" fill={"#fff"}/>
                                </div>
                                <div>{res.event_date}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="text-xl flex items-center">
                                    <FieldSVG height="12" width="12" fill={"#fff"}/>
                                </div>
                                <div>{res.event_stadium}</div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="text-xl flex items-center">
                                    <WhistleSVG height="12" width="12" fill={"#fff"}/>
                                </div>
                                <div>{res.event_referee ? res.event_referee : 'Unkown'}</div>
                            </div>
                        </div>
                    </div>
                    
                ))
                :
                match.map((res, index) => (
                    <div key={index}>
                        <div className="nav-widget text-white py-3 bg-indigo-950 dark:bg-zinc-900 space-y-8">
                            <div className="flex items-center px-2.5 space-x-2">
                                <div className="flex justify-start w-3/12">
                                    <div onClick={()=>{ navigateBack() }} className="bg-lighter cursor-pointer text-sm dark:bg-dark-900 rounded-full flex items-center space-x-2 px-5 py-2">
                                        <div className="false dark:opacity-80">Back to livescores</div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap justify-center items-center space-x-1 text-base w-6/12 ">
                                    <div className="w-32px h-32px flex justify-center items-center bg-white rounded-full mr-1">
                                        <Image
                                            src={res.league_logo}
                                            width={24}
                                            height={24}
                                            alt=''
                                            />
                                    </div>
                                    <div className="flex items-center space-x-2 opacity-60">
                                        <div className="border-prefix pr-2 border-r border-opacity-60 border-white leading-none">{res.league_name} ({res.country_name})</div>
                                        <div className="flex space-x-2"><span>{res.league_round}</span></div>
                                    </div>
                                </div>
                                <div className="flex justify-end w-3/12">
                                    <div onClick={() => { setDarkMode(!darkMode) }} className="flex justify-between p-0.5 rounded-full border-prefix border border-white border-opacity-20">
                                        <div className="p-0.5 bg-white dark:bg-transparent dark:bg-dark-800  rounded-full cursor-pointer">
                                            <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                                        </div>
                                        <div className="p-0.5 bg-transparent dark:bg-white rounded-full space-x-1 cursor-pointer">
                                            <MoonSVG height="15" width="15" fill={darkMode ? "#000" : "#fff"}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center px-2.5">
                                <div className="grid grid-cols-12 items-center justify-center gap-10 py-4">
                                    <div className="col-span-5 flex items-center gap-2 justify-self-end">
                                        <div className="text-center text-2xl dark:opacity-80 ">{res.event_home_team}</div>
                                        <div className="relative flex-shrink-0">
                                            <Image
                                                src={res.home_team_logo}
                                                width={96}
                                                height={96}
                                                alt=''
                                                />
                                        </div>
                                    </div>
                                    <div className="flex flex-col relative items-center space-y-1 col-span-2">
                                        <div className="flex absolute -top-4 text-center text-base">
                                            <div className="dark:text-white dark:opacity-80 uppercase">FT</div>
                                        </div>
                                        <div className="bg-custom-primary rounded-full py-1 px-5 dark:bg-dark-900">
                                            <div className="flex items-center dark:opacity-80 space-x-5 text-2xl"><span>{res.event_final_result}</span></div>
                                        </div>
                                        <div className="absolute truncate dark:opacity-80 text-center text-base top-12 ">
                                            <div>FH ({res.event_halftime_result})</div>
                                        </div>
                                    </div>
                                    <div className="col-span-5 flex items-center gap-2 justify-self-start">
                                        <div className="text-center text-2xl dark:opacity-80 order-2">{res.event_away_team}</div>
                                        <div className="relative flex-shrink-0">
                                            <Image
                                                src={res.away_team_logo}
                                                width={96}
                                                height={96}
                                                alt=''
                                                />
                                        </div>
                                    </div>
                                </div>
                                <FixtureDetails dataEvents={dataEvents} />
                            </div>
                            <div className="text-base px-6 justify-evenly flex flex-wrap gap-x-2 gap-y-1 pt-3 border-prefix border-t-2 border-white border-opacity-30 items-center opacity-80 pb-1">
                                <div className="flex items-center space-x-2">
                                    <div className="text-xl flex items-center">
                                        <CalendarSVG height="15" width="15" fill={"#fff"}/>
                                    </div>
                                    <div>{res.event_date}</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="text-xl flex items-center">
                                        <FieldSVG height="15" width="15" fill={"#fff"}/>
                                    </div>
                                    <div>{res.event_stadium}</div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="text-xl flex items-center">
                                        <WhistleSVG height="15" width="15" fill={"#fff"}/>
                                    </div>
                                    <div>{res.event_referee ? res.event_referee : 'Unkown'}</div>
                                </div>
                            </div>
                            {/* {
                                res.lineups.home_team.starting_lineups.length ?
                                <Lineups
                                    lineups={res.lineups}
                                    event_home_team={res.event_home_team}
                                    event_away_team={res.event_away_team}
                                    home_team_logo={res.home_team_logo}
                                    away_team_logo={res.away_team_logo}
                                />
                                :
                                null
                            }
                            <Statistics statistics={res.statistics} /> */}
                            {/* 
                            <Lineups />
                            <Results />
                            <Location />
                            <Events />
                            <Statistics />
                            <Standings />
                            <Squad />
                            */}
                        </div>
                        <div className="pt-1.5 flex justify-center flex-wrap bg-white dark:bg-black">
                            <div onClick={()=> { setShowStatistics(true);setShowLineups(false) }} className={`px-6 py-4 rounded-t-sm cursor-pointer dark:text-white ${showStatistics ? "dark:bg-black border-prefix border-b-2 border-red-500" : "opacity-50 "}`}>
                                <div className="dark:opacity-80">Statistics</div>
                            </div>
                            <div onClick={()=> { setShowLineups(true);setShowStatistics(false) }} className={`px-6 py-4 rounded-t-sm cursor-pointer dark:text-white ${showLineups ? "dark:bg-black border-prefix border-b-2 border-red-500" : "opacity-50 "}`}>
                                <div className="dark:opacity-80">Lineup</div>
                            </div>
                        </div>
                        <div className='p-2'>
                            {
                                showStatistics ?
                                <Statistics statistics={res.statistics}
                                    event_home_team={res.event_home_team}
                                    event_away_team={res.event_away_team}
                                    home_team_logo={res.home_team_logo}
                                    away_team_logo={res.away_team_logo}
                                 />
                                :
                                res.lineups.home_team.starting_lineups.length ?
                                <Lineups
                                    lineups={res.lineups}
                                    event_home_team={res.event_home_team}
                                    event_away_team={res.event_away_team}
                                    home_team_logo={res.home_team_logo}
                                    away_team_logo={res.away_team_logo}
                                />
                                :
                                null
                            }
                        </div>
                    </div>
                    )
                )
            }
        </div>
    )

}

export default Fixture

/* export const getServerSideProps = async () => { 
    
  const res = await fetch('https://api.sportmonks.com/v3/football/fixtures/18510845?api_token=QVMlNB7QePSUt5tIfQVMtbi3X76XQaDbklTRN10LWCh3YuLfNvULSNMeoyjl&include=lineups;events;statistics')
  const data = await res.json()
  console.log(data)
  return { props: { data } }
}
  */