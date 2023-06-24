import Image from 'next/image'
import SunSVG from '../public/sun.svg'

const Statistics = ({ statistics,event_home_team ,event_away_team ,home_team_logo ,away_team_logo }) => {
  return (
    <div className="rounded-md shadow-lg">
    <div className="flex justify-between items-center dark:text-white bg-white dark:bg-zinc-900 bg-opacity-80 py-4 px-5 text-lg font-semibold space-x-6 ">
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
        <h2 className="roboto text-default dark:text-white dark:opacity-80 font-bold text-xl text-center italic uppercase">match statistics</h2>
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
    <div className="flex flex-col items-center justify-between py-7 space-y-4 dark:bg-zinc-900 dark:text-white bg-white text-black px-10">
        <div className="w-7/12">
            {
                statistics.map((statistic, index)=>(
                    <div key={index} className="text-base w-full">
                        <div className="text-center dark:text-white dark:opacity-80">{statistic.type}</div>
                        <div className="flex items-center space-x-3">
                            <div className="w-1/12 flex justify-end">
                                <div className="rounded-full py-0.5 font-semibold text-center bg-lightgrey">
                                    <div className="text-custom-secondary px-2">{statistic.home}</div>
                                </div>
                            </div>
                            <div className="w-10/12 space-y-2 text-center">
                                <div className="flex justify-center">
                                    <div className="bg-custom-secondary rounded-l-full h-2 bg-black" style={{width: `${Math.round((parseInt(statistic.home)*100)/(parseInt(statistic.home)+parseInt(statistic.away)))}%`}}></div>
                                    <div className="bg-custom-primary rounded-r-full h-2 bg-cyan-500" style={{width: `${Math.round((parseInt(statistic.away)*100)/(parseInt(statistic.home)+parseInt(statistic.away)))}%`}}></div>
                                </div>
                            </div>
                            <div className="w-1/12 flex justify-start">
                                <div className="rounded-full py-0.5 font-semibold text-center ">
                                    <div className="text-custom-secondary px-2">{statistic.away}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
</div>
  )
}

export default Statistics 