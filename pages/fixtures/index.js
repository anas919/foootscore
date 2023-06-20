import React, { useState, useEffect, forwardRef  } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import calendarSVG from '../../public/calendar.svg?url'
import MoonSVG from '../../public/moon.svg'
import SunSVG from '../../public/sun.svg'
import BallSVG from '../../public/ball.svg'
import SubstituteSVG from '../../public/substitute.svg'
import substituteSVG from '../../public/substitute.svg?url'
import Select from 'react-select';
import { format, formatDistance, formatRelative, subDays ,addDays } from 'date-fns'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Match from '../../components/match';
import axios from 'axios';

const Fixtures = ({ liveScoreMatches }) => {
    useEffect(()=>{
        fetchDataLeagues()
    },[])
    //
    const CalendarInput = forwardRef(({ value, onClick }, ref) => (
        <div onClick={onClick} ref={ref} className="example-custom-input flex flex-row justify-center items-center border border-white border-opacity-20 rounded-full px-2 py-1 cursor-pointer bg-white">
            <span className="text-black text-xs opacity-40 uppercase font-bold">{format(selectedDate, "d MMM yyyy")}</span>
            <Image
                src={calendarSVG}
                width={25}
                height={25}
                alt="Filter Calendar"
            />
        </div>
    ));
    //
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [matches, setMatches] = useState(liveScoreMatches)
  const [leagues, setLeagues] = useState([{ value: 'all', label:<div className="flex grow items-center text-black">All</div> }])
  const options = leagues;
  /* const options = [
        { value: 'all', label:<div className="flex grow items-center text-black">All</div> },
        { value: 'Super Liga', label: 
        <div className="flex grow items-center text-black">
            <div className="mr-1">
                <Image
                        src="https://cdn.sportmonks.com/images/soccer/leagues/271.png"
                        alt="SuperLiga"
                        width={15}
                        height={15}
                    />
            </div>
            Chealsea
        </div>},
        { value: 'Premier Ship', label: 
        <div className="flex grow items-center text-black">
            <div className="mr-1">
                <Image
                        src="https://cdn.sportmonks.com/images/soccer/teams/18/18.png"
                        alt="Premier Ship"
                        width={15}
                        height={15}
                    />
            </div>
            Chealsea
        </div>},
    ]; */

    const [selectedOption, setSelectedOption] = useState(null);

    const fetchDataMatches = async (date) => {
        const response = await fetch(
            'https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=1a246378ee1a27812647163f0b157b4cbc475baade4283ccf6efd1ae97f4f3f0&from='+format(date, "yyyy-MM-dd")+'&to='+format(date, "yyyy-MM-dd")
        );
        const data = await response.json();
        
        const liveScoreMatches = data.result ? data.result : []
        setMatches(liveScoreMatches);
        setSelectedDate(date)
    }
    const fetchDataLeagues = async () => {
        await axios({
            method: 'get',
            url: 'https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=1a246378ee1a27812647163f0b157b4cbc475baade4283ccf6efd1ae97f4f3f0',
            headers: {
              'Accept': 'application/json',
            },
        })
        .then(res => {
            console.log(res.data.result)
            //const dataLeagues = data.result ? data.result : []
            let prepareLeagues = []
            res.data.result.map((league)=>{
                prepareLeagues.push(
                    { value: league.league_key, label:<div className="flex grow items-center text-black"><div className="mr-1"><Image src={league.league_logo} alt={league.league_name+'('+league.country_name+')'} width={15} height={15} /></div>{league.league_name}</div> }
                )
            })
            setLeagues((prevLeagues) => [...prevLeagues, ...prepareLeagues]);
        })
        .catch(error => {
            console.log(error)
        });
        
    }
    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className="nav-widget flex justify-between space-x-1 items-center py-2 px-3 bg-indigo-950 dark:bg-zinc-900">
                <div className="w-1/5">
                    <div className="relative bg-lighter dark:bg-dark-900 text-white dark:text-black rounded-full cursor-pointer ">
                        <Select
                            className='w-full h-36px leading-none bg-lighter border-prefix border border-lighter dark:bg-dark-900 dark:border-dark-900 text-sm cursor-pointer focus:outline-none focus:ring-0 select-no-ring text-white dark:text-opacity-80'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            instanceId={1}
                        />
                    </div>
                </div>
                <div className="mt-0 w-auto mx-2">
                    <div className="flex justify-between p-0.5 rounded-full border-prefix border border-white border-opacity-20">
                        <div className="p-1 px-3 bg-white dark:bg-slate-800 text-default dark:text-white  rounded-full cursor-pointer">
                            <div className="dark:opacity-80 text-custom-primary">All</div>
                        </div>
                        <div className="flex items-center p-1 px-3   rounded-full text-red-500 space-x-1 cursor-pointer">
                            <div className="w-4px h-4px rounded-full bg-red-500"></div>
                            <div>Live</div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-2 ml-auto">
                    <div className="flex space-x-1 items-center text-white">
                        <div className="flex flex-col bg-lighter dark:bg-dark-900 justify-center h-36px leading-tight rounded-full focus:outline-none items-center">
                            <DatePicker
                                selected={selectedDate}
                                onChange={(date) => fetchDataMatches(date)}
                                customInput={<CalendarInput />}
                            />
                            {/* <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} /> */}
                            {/* <div style={{position:'relative',bottom:0,left:0}}>
                                <Calendar onChange={setSelectedDate} value={selectedDate} />
                            </div> */}
                        </div>
                        <div onClick={()=>{fetchDataMatches(subDays(new Date(), 1), "d")}} className="flex justify-center border border-white border-opacity-20 rounded-full px-2 py-1 cursor-pointer ">
                            <div className="dark:opacity-90">{format(subDays(new Date(), 1), "d")}</div>
                            <div className="text-xs opacity-40 uppercase font-bold">{format(subDays(new Date(), 1), "EEE")}</div>
                        </div>
                        <div onClick={()=>{fetchDataMatches(new Date())}} className="flex justify-center border border-white border-opacity-20 rounded-full px-2 py-1 cursor-pointer ">
                            <div className="dark:opacity-90">{format(new Date(), "d")}</div>
                            <div className="text-xs opacity-40 uppercase font-bold">today</div>
                        </div>
                        <div onClick={()=>{fetchDataMatches(addDays(new Date(), 1), "d")}} className="flex justify-center border border-white border-opacity-20 rounded-full px-2 py-1 cursor-pointer ">
                            <div className="dark:opacity-90">{format(addDays(new Date(), 1), "d")}</div>
                            <div className="text-xs opacity-40 uppercase font-bold">{format(addDays(new Date(), 1), "EEE")}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div onClick={() => { setDarkMode(!darkMode) }} className="flex justify-between p-0.5 rounded-full border-prefix border border-white border-opacity-20">
                        <div className="p-1 bg-white dark:bg-transparent dark:bg-dark-800  rounded-full cursor-pointer">
                        <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
                            {/* <Image
                                    src={sunSVG}
                                    width={15}
                                    height={15}
                                    alt=""
                                /> */}
                        </div>
                        <div className="p-1 bg-transparent dark:bg-white rounded-full space-x-1 cursor-pointer">
                        <MoonSVG height="15" width="15" fill={darkMode ? "#000" : "#fff"}/>
                            {/* <Image
                                    src={moonSVG}
                                    width={15}
                                    height={15}
                                    alt=""
                                /> */}
                        </div>
                    </div>
                </div>
            </div>
            {matches.map((match, index)=> (
                <Match key={index} match={match} />
            ))}
        </div>
  );
};

export async function getServerSideProps(context) {
    
    //https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=!_your_account_APIkey_!
    const response = await fetch(
        'https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=1a246378ee1a27812647163f0b157b4cbc475baade4283ccf6efd1ae97f4f3f0&from=2021-06-19&to=2021-06-19'
    );
    const data = await response.json();

    
    const liveScoreMatches = data.result ? data.result : []

    return {
        props: {
            liveScoreMatches
        },
    };
}


export default Fixtures;
