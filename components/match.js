import Image from 'next/image'
import Link from 'next/link'
import Details from './match/details';
import React, { useState  } from 'react';

const Match = ({ match }) => {
  const [expanded, setExpanded] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const [details, setDetails] = useState(null);
  const [dataEvents, setDataEvents] = useState(null);

  const handleExpand = () => {
    setExpanded(!expanded);

    // Fetch data only if it hasn't been fetched before
    if (!dataFetched) {
      fetchData(match.event_key); // Custom function to fetch the details from the endpoint
    }
  };
  
  const fetchData = (eventKey) => {

    const parsedData = Object.entries({ "goalscorers":match.goalscorers, "substitutes":match.substitutes, "cards":match.cards }).reduce((result, [eventType, eventArray]) => {
      eventArray.forEach(event => {
        const { time, ...eventData } = event;
        result[time] = result[time] || {};
        result[time][eventType] = eventData;
      });
      return result;
    }, {});
    setDataEvents(Object.entries(parsedData))
    //
    setDetails('data');
    setDataFetched(true);
        
  };

  return (
    <div key={match.event_key} onClick={()=> { handleExpand() }}>
            <div className="relative  ">
                <div className="px-2 text-sm flex py-1 justify-between transition-all border-prefix border-b border-opacity-40 border-lightgrey dark:border-dark-900 items-center cursor-pointer hover:bg-cultured bg-white dark:bg-stone-800 dark:hover:bg-darker">
                    <div className="w-1/12 flex items-center px-1 space-x-2 relative">
                        <div className="dark:text-white uppercase">FT</div>
                    </div>
                    <div className=" w-10/12 space-x-6 flex items-center px-1">
                        <div className="flex w-5/12 flex-1 text-right justify-end items-center space-x-2 undefined">
                            <div className="flex space-x-2 items-center">
                                <div className=" text-default dark:text-white  font-semibold">{match.event_home_team}</div>
                            </div>
                            <div className="">
                                <Image
                                        src={match.home_team_logo}
                                        width={25}
                                        height={25}
                                        alt=""
                                    />
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-lightgrey dark:bg-dark-900 text-custom-secondary dark:text-white px py-px w-64px rounded-full items-center justify-center">
                                <div className="font-semibold text-center tracking-widest text-base">{match.event_ft_result}</div>
                            </div>
                        </div>
                        <div className="flex w-5/12 flex-1 items-center space-x-2 undefined">
                            <div className=" flex-shrink-0">
                                <Image
                                        src={match.away_team_logo}
                                        width={25}
                                        height={25}
                                        alt=""
                                    />
                            </div>
                            <div className="flex space-x-2 items-center">
                                <div className="text-default dark:text-white  font-semibold opacity-60">{match.event_away_team}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/12 flex px-1 justify-end">
                        <div className="dark:text-white text-redlive hover:text-default cursor-pointer dark:hover:text-white dark:hover:opacity-60 hover:font-bold focus:outline-none">
                            <Link href={`/fixtures/fixture/${match.event_key}`}>Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            {expanded && (
              <div>
                {match ? (
                  // Render the details using the fetched data
                  <div>
                    <Details dataEvents={dataEvents} />
                    {/* Render the fetched details here <Details matchEvents={matchEvents} />*/}
                  </div>
                ) : (
                  // Render a loading indicator while fetching data
                  <div>Loading...</div>
                )}
              </div>
            )}
        </div>
  )
}

export default Match