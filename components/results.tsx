import Image from 'next/image'

const Results = ({ results }) => {
  return (
<div className="rounded-md shadow-lg">
    <div className="flex justify-between items-center dark:text-white bg-white dark:bg-dark-900 bg-opacity-80 py-4 px-5 text-lg font-semibold space-x-6 ">
        <div className="flex items-center space-x-2">
            <Image
                  src='https://cdn.sportmonks.com/images/soccer/teams/18/18.png'
                  width={40}
                  height={40}
                  alt=''
              />
            <div className="uppercase dark:opacity-80 ">CHE</div>
        </div>
        {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
        <h2 className="roboto text-default dark:text-white dark:opacity-80 font-bold text-xl text-center italic uppercase">Total results</h2>
        {/* <hr className="border-prefix flex-1 dark:opacity-80"> */}
        <div className="flex items-center space-x-2">
            <div className="uppercase dark:opacity-80 ">NEW</div>
            <Image
                  src='https://cdn.sportmonks.com/images/soccer/teams/20/20.png'
                  width={40}
                  height={40}
                  alt=''
              />
        </div>
    </div>
    <div className="bg-black dark:bg-dark flex flex-col justify-center items-center pb-10">
        <div className="text-default dark:text-white dark:opacity-80 font-bold mb-6">36<span className="opacity-60 font-normal"> matches</span></div>
        <div className="flex text-2xl space-x-1 leading-none mb-12">
            <div className="text-center">
                <div className="text-custom-secondary">21</div>
                <div className="text-sm dark:text-white opacity-60">Wins</div>
            </div>
            <div className="font-light text-gray-300">/</div>
            <div className="text-center">
                <div className="text-custom-tertiary">6</div>
                <div className="text-sm dark:text-white opacity-60">Draws</div>
            </div>
            <div className="font-light text-gray-300">/</div>
            <div className="text-center">
                <div className="text-custom-primary dark:text-redlive dark:opacity-80">9</div>
                <div className="text-sm dark:text-white opacity-60">Wins</div>
            </div>
        </div>
        <div className="w-8/12 text-sm flex justify-center">
            <div className="relative bg-white rounded-l-full flex items-center h-1" style={{width: "58%;"}}>
                <div className="flex space-x-1 items-center text-default dark:text-white dark:opacity-80 absolute bottom-2"><span className="font-bold text-custom-secondary text-sm ">21</span><span className="opacity-80 "> wins</span><span className="opacity-80">(58%)</span></div>
            </div>
            <div className="relative bg-black  flex items-center justify-center h-1" style={{width: "17%;"}}>
                <div className="flex space-x-1 items-center text-default dark:text-white dark:opacity-80 absolute bottom-2"><span className=" font-bold text-custom-tertiary text-sm ">6</span><span className="opacity-80 "> draws</span><span className="opacity-80">(17%)</span></div>
            </div>
            <div className="relative bg-white rounded-r-full flex items-center justify-end h-1 dark:bg-redlive"  style={{width: "25%;"}}>
                <div className="flex space-x-1 items-center text-default dark:text-white dark:opacity-80 absolute bottom-2"><span className=" font-bold text-custom-primary text-sm  dark:text-redlive">9</span><span className=" opacity-80"> wins</span><span className="opacity-80">(25%)</span></div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Results 