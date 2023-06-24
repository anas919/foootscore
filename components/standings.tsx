import Image from 'next/image'
import SunSVG from '../public/sun.svg'
import React, { useState, useEffect } from 'react';

const Standings = ({ standings }) => {
    const [darkMode, setDarkMode] = useState(false);
  return (
<div className="font w-full mx-auto border-prefix border-solid bg-black dark:bg-dark border-lightgrey">
<div className="nav-widget flex-col justify-between space-x-1 items-center py-2 px-3">
    <div className="flex items-center space-x-2">
        <div className="bg-black flex items-center justify-center rounded-full p-1 w-32px h-32px">
                <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
            <div className="flex text-white dark:text-opacity-90 items-end space-x-2">
                <div className="text-lg leading-none">Premier League</div>
            </div>
        </div>
        <div className="flex justify-between p-0.5 rounded-full border-prefix border border-white border-opacity-20">
            <div className="p-0.5 bg-white dark:bg-dark-800  rounded-full cursor-pointer">
                <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
            </div>
            <div className="p-0.5   rounded-full space-x-1 cursor-pointer">
                <SunSVG height="15" width="15" fill={darkMode ? "#fff" : "#000"}/>
            </div>
        </div>
    </div>
    <div className="flex space-x-2 justify-between items-center bg-lightgrey text-default dark:bg-dark-900 dark:text-white border-prefix border border-lightgrey dark:border-dark-900 text-sm px-3">
        <div className="flex space-x-1">
            <div className="border-prefix border-r border-white dark:border-dark-800 text-base flex items-center truncate pr-3 py-2 opacity-60 ">Regular Season</div>
        </div>
        <div className="flex items-center space-x-4"></div>
    </div>
    <div className="py-1 px-1 sticky top-0 z-5 bg-black dark:bg-dark justify-between flex items-center border-prefix border-b border-lightgrey dark:border-dark-800 dark:text-white dark:text-opacity-60 text-sm">
        <div style={{width:"2%"}} className="text-center text-custom-secondary dark:text-white dark:opacity-80">#</div>
        <div style={{width:"45%"}} className="ml-2 text-custom-secondary dark:text-white dark:opacity-80">
            <div>Team</div>
        </div>
        <div style={{width:"50%"}} className=" flex items-center justify-around text-center text-custom-secondary dark:text-white dark:opacity-80">
            <div style={{width:"15%"}} className="">P</div>
            <div style={{width:"15%"}} className="">W</div>
            <div style={{width:"15%"}} className="">D</div>
            <div style={{width:"15%"}} className="">L</div>
            <div style={{width:"15%"}} className="">GD</div>
            <div style={{width:"15%"}} className="">Pts</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-green">1</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                src='https://cdn.sportmonks.com/images/soccer/teams/9/9.png'
                width={24}
                height={24}
                alt=''
                />
            <div className="truncate min-w-0 max-w-full">Manchester City</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">28</div>
            <div style={{width:"10%"}} className="">5</div>
            <div style={{width:"10%"}} className="">5</div>
            <div style={{width:"10%"}} className="">61</div>
            <div style={{width:"10%"}} className="">89</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-green">2</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                src='https://cdn.sportmonks.com/images/soccer/teams/19/19.png'
                width={24}
                height={24}
                alt=''
                />
            <div className="truncate min-w-0 max-w-full">Arsenal</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">26</div>
            <div style={{width:"10%"}} className="">6</div>
            <div style={{width:"10%"}} className="">6</div>
            <div style={{width:"10%"}} className="">45</div>
            <div style={{width:"10%"}} className="">84</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-green">3</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src='https://cdn.sportmonks.com/images/soccer/teams/14/14.png'
                alt=''
                />
            <div className="truncate min-w-0 max-w-full">Manchester United</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">23</div>
            <div style={{width:"10%"}} className="">6</div>
            <div style={{width:"10%"}} className="">9</div>
            <div style={{width:"10%"}} className="">15</div>
            <div style={{width:"10%"}} className="">75</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-green">4</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/20/20.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Newcastle United</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">19</div>
            <div style={{width:"10%"}} className="">14</div>
            <div style={{width:"10%"}} className="">5</div>
            <div style={{width:"10%"}} className="">35</div>
            <div style={{width:"10%"}} className="">71</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-blue-500">5</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/8/8.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Liverpool</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">19</div>
            <div style={{width:"10%"}} className="">10</div>
            <div style={{width:"10%"}} className="">9</div>
            <div style={{width:"10%"}} className="">28</div>
            <div style={{width:"10%"}} className="">67</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-blue-500">6</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/14/78.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Brighton &amp; Hove Albion</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">18</div>
            <div style={{width:"10%"}} className="">8</div>
            <div style={{width:"10%"}} className="">12</div>
            <div style={{width:"10%"}} className="">19</div>
            <div style={{width:"10%"}} className="">62</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-purple-500">7</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/15/15.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Aston Villa</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">18</div>
            <div style={{width:"10%"}} className="">7</div>
            <div style={{width:"10%"}} className="">13</div>
            <div style={{width:"10%"}} className="">5</div>
            <div style={{width:"10%"}} className="">61</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">8</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/6/6.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Tottenham Hotspur</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">18</div>
            <div style={{width:"10%"}} className="">6</div>
            <div style={{width:"10%"}} className="">14</div>
            <div style={{width:"10%"}} className="">7</div>
            <div style={{width:"10%"}} className="">60</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">9</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/12/236.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Brentford</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">15</div>
            <div style={{width:"10%"}} className="">14</div>
            <div style={{width:"10%"}} className="">9</div>
            <div style={{width:"10%"}} className="">12</div>
            <div style={{width:"10%"}} className="">59</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">10</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/11/11.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Fulham</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">15</div>
            <div style={{width:"10%"}} className="">7</div>
            <div style={{width:"10%"}} className="">16</div>
            <div style={{width:"10%"}} className="">2</div>
            <div style={{width:"10%"}} className="">52</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">11</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/19/51.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Crystal Palace</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">11</div>
            <div style={{width:"10%"}} className="">12</div>
            <div style={{width:"10%"}} className="">15</div>
            <div style={{width:"10%"}} className="">-9</div>
            <div style={{width:"10%"}} className="">45</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">12</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/18/18.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Chelsea</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">11</div>
            <div style={{width:"10%"}} className="">11</div>
            <div style={{width:"10%"}} className="">16</div>
            <div style={{width:"10%"}} className="">-9</div>
            <div style={{width:"10%"}} className="">44</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">13</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/29/29.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Wolverhampton Wanderers</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">11</div>
            <div style={{width:"10%"}} className="">8</div>
            <div style={{width:"10%"}} className="">19</div>
            <div style={{width:"10%"}} className="">-27</div>
            <div style={{width:"10%"}} className="">41</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">14</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/1/1.png" alt="" />
            <div className="truncate min-w-0 max-w-full">West Ham United</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">11</div>
            <div style={{width:"10%"}} className="">7</div>
            <div style={{width:"10%"}} className="">20</div>
            <div style={{width:"10%"}} className="">-13</div>
            <div style={{width:"10%"}} className="">40</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">15</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/20/52.png" alt="" />
            <div className="truncate min-w-0 max-w-full">AFC Bournemouth</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">11</div>
            <div style={{width:"10%"}} className="">6</div>
            <div style={{width:"10%"}} className="">21</div>
            <div style={{width:"10%"}} className="">-34</div>
            <div style={{width:"10%"}} className="">39</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">16</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/31/63.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Nottingham Forest</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">9</div>
            <div style={{width:"10%"}} className="">11</div>
            <div style={{width:"10%"}} className="">18</div>
            <div style={{width:"10%"}} className="">-30</div>
            <div style={{width:"10%"}} className="">38</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-transparent">17</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/13/13.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Everton</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">8</div>
            <div style={{width:"10%"}} className="">12</div>
            <div style={{width:"10%"}} className="">18</div>
            <div style={{width:"10%"}} className="">-23</div>
            <div style={{width:"10%"}} className="">36</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-pink-500">18</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/10/42.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Leicester City</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">9</div>
            <div style={{width:"10%"}} className="">7</div>
            <div style={{width:"10%"}} className="">22</div>
            <div style={{width:"10%"}} className="">-17</div>
            <div style={{width:"10%"}} className="">34</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-pink-500">19</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/7/71.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Leeds United</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">7</div>
            <div style={{width:"10%"}} className="">10</div>
            <div style={{width:"10%"}} className="">21</div>
            <div style={{width:"10%"}} className="">-30</div>
            <div style={{width:"10%"}} className="">31</div>
        </div>
    </div>
    <div className="justify-between py-1 flex items-center px-1 text-sm border-prefix border-b border-lightgrey text-primary dark:text-white dark:border-dark-800 dark:text-opacity-60 false hover:bg-lightgrey dark:hover:bg-dark-800">
        <div style={{width:"2%"}} className="text-center pl-1 border-prefix border-l-2 border-pink-500">20</div>
        <div style={{width:"45%"}} className="ml-2 flex items-center space-x-1">
            <Image
                width={24}
                height={24}
                src="https://cdn.sportmonks.com/images/soccer/teams/1/65.png" alt="" />
            <div className="truncate min-w-0 max-w-full">Southampton</div>
        </div>
        <div style={{width:"50%"}} className=" flex justify-around text-center">
            <div style={{width:"10%"}} className="">38</div>
            <div style={{width:"10%"}} className="">6</div>
            <div style={{width:"10%"}} className="">7</div>
            <div style={{width:"10%"}} className="">25</div>
            <div style={{width:"10%"}} className="">-37</div>
            <div style={{width:"10%"}} className="">25</div>
        </div>
    </div>
    <div className="space-y-2 mt-1">
        <div className="flex px-3 dark:text-white dark:text-opacity-60 text-xs flex-wrap gap-x-4 gap-y-0.5">
            <div><span className="text-xs text-custom-secondary">#</span>: Position</div>
            <div><span className="text-xs text-custom-secondary">Team</span>: Team</div>
            <div><span className="text-xs text-custom-secondary">P</span>: Played</div>
            <div><span className="text-xs text-custom-secondary">W</span>: Wins</div>
            <div><span className="text-xs text-custom-secondary">D</span>: Draws</div>
            <div><span className="text-xs text-custom-secondary">L</span>: Losses</div>
            <div><span className="text-xs text-custom-secondary">GF</span>: Goals For</div>
            <div><span className="text-xs text-custom-secondary">GA</span>: Goals Against</div>
            <div><span className="text-xs text-custom-secondary">GD</span>: Goal Difference</div>
            <div><span className="text-xs text-custom-secondary">Pts</span>: Points</div>
        </div>
        <div className="flex px-3 dark:text-white dark:text-opacity-60 text-xs flex-wrap gap-x-4 gap-y-1">
            <div className="flex items-center border-prefix border-l-2 border-green">
                <div className="ml-1 opacity-80">UEFA Champions League</div>
            </div>
            <div className="flex items-center border-prefix border-l-2 border-blue-500">
                <div className="ml-1 opacity-80">UEFA Europa League</div>
            </div>
            <div className="flex items-center border-prefix border-l-2 border-purple-500">
                <div className="ml-1 opacity-80">UEFA Conference League Qualifiers</div>
            </div>
            <div className="flex items-center border-prefix border-l-2 border-pink-500">
                <div className="ml-1 opacity-80">Relegation</div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}

export default Standings 