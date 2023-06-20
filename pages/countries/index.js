import React, { useState, useEffect } from 'react';
import Image from 'next/image'

const Leagues = ({ groupedLeagues }) => {


  return (
    <div className='mx-auto p-4'>
      <h1 className="text-2xl font-bold mb-4">Leagues by Countries</h1>
      <div className=''>
        {groupedLeagues.map((country) => (
          <div key={country[0]}>
            <div className='flex flex-row p-4 items-center'>
              <Image
                src={country[0].split(',')[1]}
                width={60}
                height={60}
                alt={country[0].split(',')[0]}
              />
              <span className="text-xl font-semibold ml-2">{country[0].split(',')[0]}</span>
            </div>
            <div className="">
              {country[1].map((league) => (
                  <div key={league.league_key} className="p-4 sm:w-full md:w-1/3 xl:w-1/6 items-center">
                    <Image
                      src={league.league_logo}
                      width={40}
                      height={40}
                      alt={league.league_name}
                    />
                    <span className='ml-2'>{league.league_name}</span>
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export async function getServerSideProps(context) {
  /* const response = await fetch(
    'https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=1a246378ee1a27812647163f0b157b4cbc475baade4283ccf6efd1ae97f4f3f0'
  );
  const data = await response.json(); */
  const data = {
    "success": 1,
    "result": [
      {
           "league_key": "205",
           "league_name": "Coppa Italia",
           "country_key": "5",
           "country_name": "Italy",
           "league_logo": "https://apiv2.allsportsapi.com/logo/logo_leagues/205_coppa-italia.png",
           "country_logo": "https://apiv2.allsportsapi.com/logo/logo_country/5_italy.png"
       },
       {
           "league_key": "206",
           "league_name": "Serie B",
           "country_key": "5",
           "country_name": "Italy",
           "league_logo": "https://apiv2.allsportsapi.com/logo/logo_leagues/206_serie-b.png",
           "country_logo": "https://apiv2.allsportsapi.com/logo/logo_country/5_italy.png"
       },
       {
           "league_key": "207",
           "league_name": "Serie A",
           "country_key": "5",
           "country_name": "Italy",
           "league_logo": "https://apiv2.allsportsapi.com/logo/logo_leagues/207_serie-a.png",
           "country_logo": "https://apiv2.allsportsapi.com/logo/logo_country/5_italy.png"
       },
       {
        "league_key": 177,
        "league_name": "Premier League",
        "country_key": 50,
        "country_name": "Ghana",
        "league_logo": "https://apiv2.allsportsapi.com/logo/logo_leagues/177_premier-league.png",
        "country_logo": "https://apiv2.allsportsapi.com/logo/logo_country/50_ghana.png"
        },
        {
        "league_key": 423,
        "league_name": "Cup",
        "country_key": 73,
        "country_name": "Lithuania",
        "league_logo": "https://apiv2.allsportsapi.com/logo/logo_leagues/423_cup.png",
        "country_logo": "https://apiv2.allsportsapi.com/logo/logo_country/73_lithuania.png"
        }
    ]
  }

  //console.log(data.result)
  const groupedLeaguesByCountries = data.result.reduce((groupedLeagues, league) => {
    const countryName = league.country_name;
    const countryFlag = league.country_logo;
    if(groupedLeagues[countryName+','+countryFlag] == null) groupedLeagues[countryName+','+countryFlag] = []//if the groupedLeagues for a given country arrary does not exist create it
    groupedLeagues[countryName+','+countryFlag].push(league)
    return groupedLeagues
  },{})
  
  const groupedLeagues = Object.entries(groupedLeaguesByCountries)
  
  console.log(groupedLeagues)
  return {
    props: {
      groupedLeagues,
    },
  };
}

export default Leagues;
