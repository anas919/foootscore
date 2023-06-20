import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
import sunSVG from '../../../public/sun.svg?url'
import Lineups from '../../../components/lineups';
import Results from '../../../components/results';
import Location from '../../../components/location';
import Events from '../../../components/events';
import Statistics from '../../../components/statistics';
import Standings from '../../../components/standings';
import Squad from '../../../components/squad';
import axios from 'axios';
import WhistleSVG from '../../../public/whistle.svg'
import FieldSVG from '../../../public/field.svg'
import CalendarSVG from '../../../public/calendar.svg'
import SubstituteSVG from '../../../public/substitute.svg'
import Details from '../../../components/match/details';
import FixtureDetails from '../../../components/fixture/details';
import { format } from 'date-fns';

const Fixture = () => {

    const [darkMode, setDarkMode] = useState(false);
    const router = useRouter()
    const [match, setMatch] = useState([])
    const [loading, setLoading] = useState(true)
    const [dataEvents, setDataEvents] = useState([]);
    
    useEffect(() => {
        if(!router.isReady) return;
        const fetchData = async () => {

                await axios({
                    method: 'get',
                    url: `https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=1a246378ee1a27812647163f0b157b4cbc475baade4283ccf6efd1ae97f4f3f0&matchId=${router.query.fixtureId}`,
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

            /* try {
                const fetchData = await axios.get('https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=1a246378ee1a27812647163f0b157b4cbc475baade4283ccf6efd1ae97f4f3f0&matchId=1143107'+fixtureId, {})
                setMatch(fetchData.data.result)
                setLoading(false);
                
                const parsedData = Object.entries({ "goalscorers":fetchData.data.result.goalscorers, "substitutes":fetchData.data.result.substitutes, "cards":fetchData.data.result.cards }).reduce((result, [eventType, eventArray]) => {
                    eventArray.forEach(event => {
                    const { time, ...eventData } = event;
                    result[time] = result[time] || {};
                    result[time][eventType] = eventData;
                    });
                    return result;
                }, {});
                console.log(Object.entries(parsedData))
                setDataEvents(Object.entries(parsedData))
            } catch (error) {
                console.log(error)
            } */
    
        fetchData();
    }, [router.isReady]);

  return (
    <div className={darkMode ? 'dark' : ''}>
    {
        loading ?
        <div>Loading</div>
        :
        match.map((res, index) => (
        <div key={index} className="nav-widget dark:bg-dark text-white py-3 bg-indigo-950 space-y-8">
        <div className="flex items-center px-2.5 space-x-2">
            <div className="flex justify-start w-3/12">
                <div className="bg-lighter cursor-pointer text-sm dark:bg-dark-900 rounded-full flex items-center space-x-2 px-5 py-2">
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
                <div className="flex justify-between p-0.5 rounded-full border-prefix border border-white border-opacity-20">
                    <div className="p-1 bg-white dark:bg-dark-800  rounded-full cursor-pointer">
                        
                                    <Image
                                        src={sunSVG}
                                        width={15}
                                        height={15}
                                        alt=''
                                    />
                    </div>
                    <div className="p-1   rounded-full space-x-1 cursor-pointer">
                        
                                    <Image
                                        src={sunSVG}
                                        width={15}
                                        height={15}
                                        alt=''
                                    />
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
        {/* <Lineups />
        <Results /> 
        <Location />
        <Events />
        <Statistics />
        <Standings />
        <Squad /> */}
    </div>))
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