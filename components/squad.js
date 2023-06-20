import Image from 'next/image'
import sunSVG from '../public/sun.svg?url'

const Squad = ({ squad }) => {
  return (
<div className="font w-full mx-auto border-prefix border-solid bg-black dark:bg-dark border-lightgrey">
    <div>
        <div className="nav-widget flex justify-between items-center
            py-2.5 px-1 text-sm leading-none text-white text-opacity-60">
            <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                    <div className="bg-sub-primary flex items-center justify-center rounded-full p-1 w-32px h-32">
                        <Image
                            src='https://cdn.sportmonks.com/images/soccer/leagues/28/732.png'
                            width={15}
                            height={15}
                            alt=''
                            />
                    </div>
                    <div className="text-sm leading-none text-white text-opacity-60">World Cup 2022</div>
                </div>
            </div>
            <div className="flex justify-end">
                <div>
                    <div className="flex justify-between p-0.5 rounded-full border-prefix border border-white border-opacity-20">
                        <div className="p-0.5 bg-white  rounded-full cursor-pointer">
                            <Image
                                src={sunSVG}
                                width={15}
                                height={15}
                                />
                        </div>
                        <div className="p-0.5   rounded-full space-x-1 cursor-pointer">
                            v
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="dark:text-white dark:opacity-90">
            <div className="flex space-x-2 justify-between items-center bg-lightgrey text-default dark:bg-dark-900 dark:text-white border-prefix border border-lightgrey dark:border-dark-900 text-sm px-3">
                <div className="flex items-center text-default dark:text-white dark:bg-dark-900">
                    <div className="font-normal flex py-2 pr-3  items-center border-prefix border-r border-white dark:border-dark-800 opacity-60">Squad</div>
                </div>
                <div className="flex items-center space-x-2"></div>
            </div>
            <div className="relative mx-auto my-top">
                <div className="inline-block ml-2" style={{width: "180px"}}>
                <table className="">
                    <thead>
                        <tr className="h-32 my-auto text-sm">
                            <th className="text-custom-secondary dark:text-white dark:opacity-80 font-light cursor-pointer">
                                <div className="flex items-center justify-center">
                                    No
                                    <Image
                                        src={sunSVG}
                                        width={15}
                                        height={15}
                                        />
                                </div>
                            </th>
                            <th className="text-custom-secondary dark:text-white dark:opacity-80 font-light cursor-pointer">
                                <div className="flex items-center">
                                    Player
                                    <Image
                                        src={sunSVG}
                                        width={15}
                                        height={15}
                                        />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src='https://cdn.sportmonks.com/images/soccer/players/28/129820.png'
                                            alt=''
                                            />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Alisson</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Goalkeeper</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">12</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/23/218295.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Weverton</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Goalkeeper</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">1</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/6/159142.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Ederson</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Goalkeeper</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">13</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/17/129841.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Dani Alves</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Defender</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">3</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/16/95792.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Thiago Silva</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Defender</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">4</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/23/1167415.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Bremer</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Defender</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">6</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/29/129725.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Alex Sandro</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Defender</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">3</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/0/460160.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Éder Militão</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Defender</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/16/96208.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Marquinhos</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Defender</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">6</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/1/130177.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Alex Telles&nbsp;</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Defender</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/8/159208.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Danilo</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full">Defender</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">11</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/2/160258.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Raphinha</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Midfielder</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">15</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/3/96099.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Fabinho</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Midfielder</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">10</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/16/186320.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Neymar</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Midfielder</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">8</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/3/205411.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Fred</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Midfielder</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">22</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/11/215915.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Salva Suay</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Midfielder</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">5</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/20/159700.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Casemiro</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Midfielder</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">7</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/20/220052.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Lucas Paquetá</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Midfielder</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">11</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/15/600687.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Vinicius Junior</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Midfielder</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/9/459145.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Bruno Guimarães</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Midfielder</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">26</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/28/10959356.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Gabriel Martinelli</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Attacker</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">21</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/13/12393293.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Antony</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Attacker</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">18</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/17/5329.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Gabriel Jesus&nbsp;</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Attacker</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">10</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/20/7346228.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Rodrygo</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Attacker</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/17/219633.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Richarlison</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Attacker</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/19/219859.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Pedro</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" >Attacker</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/placeholder.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Ayrton</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/24/225048.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Nino</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">22</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/8/223656.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Rony</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/13/33645.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Joelinton</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">19</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/25/96633.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Malcom</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">20</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/9/219497.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Raphael Veiga</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">14</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/15/467567.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Roger Ibañez</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">17</td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/23/37526007.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">André</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr className="h-20 text-sm">
                            <td className="px-2">- </td>
                            <td className="">
                                <div className="flex items-center truncate min-w-0 max-w-130px space-x-2">
                                    <div className="flex items-center min-w-0 space-x-2">
                                        <Image
                                            width={32}
                                            height={32}
                                            src="https://cdn.sportmonks.com/images/soccer/players/19/37547795.png" alt="" />
                                        <div className="py-0.5 pb-1 min-w-0">
                                            <div className="truncate">Vanderson</div>
                                            <div className="inline-block text-xs px-2 text-white rounded-full" ></div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="absolute ml-2 right-0 top-0 bottom-0" style={{left: "180px"}}>
            <div className="relative w-full h-full">
                <div className="absolute overflow-scroll inset-0 mr-0 bottom-0">
                    <table className="w-full">
                        <thead className="">
                            <tr className="h-32 my-auto text-sm text-custom-secondary dark:text-white font-light">
                                <th className="text-custom-secondary dark:text-white dark:opacity-80 font-light cursor-pointer">
                                    <div className="flex items-center justify-center">
                                        Age
                                        <Image
                                            src={sunSVG}
                                            width={15}
                                            height={15}
                                            />
                                    </div>
                                </th>
                                <th className="text-custom-secondary dark:text-white dark:opacity-80 font-light cursor-pointer">
                                    <div className="flex items-center justify-center ">
                                        <div className="truncate">Games</div>
                                        <Image
                                            src={sunSVG}
                                            width={15}
                                            height={15}
                                            />
                                    </div>
                                </th>
                                <th className="">
                                    <div className="flex items-center justify-center cursor-pointer">
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
                                </th>
                                <th className="">
                                    <div className="flex items-center justify-center cursor-pointer">
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
                                        <Image
                                            src={sunSVG}
                                            width={15}
                                            height={15}
                                            />
                                    </div>
                                </th>
                                <th className="">
                                    <div className="flex items-center justify-center cursor-pointer">
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
                                        <Image
                                            src={sunSVG}
                                            width={15}
                                            height={15}
                                            />
                                    </div>
                                </th>
                                <th className="">
                                    <div className="flex items-center justify-center text-custom-secondary dark:text-white dark:opacity-80 m-auto cursor-pointer">
                                        <div className="w-16px leading-none">
                                            <Image
                                                src={sunSVG}
                                                width={15}
                                                height={15}
                                                />
                                        </div>
                                        <Image
                                            src={sunSVG}
                                            width={15}
                                            height={15}
                                            />
                                    </div>
                                </th>
                                <th className="">
                                    <div className="flex items-center justify-center dark:opacity-80 cursor-pointer">
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
                                </th>
                                <th className="">
                                    <div className="flex items-center justify-center cursor-pointer">
                                        <div className="w-10px leading-none">
                                            <Image
                                                src="https://widgets.sportmonks.com/images/yellow_card.svg"
                                                width={15}
                                                height={15}
                                                />
                                        </div>
                                        <Image
                                            src={sunSVG}
                                            width={15}
                                            height={15}
                                            />
                                    </div>
                                </th>
                                <th className="">
                                    <div className="flex items-center justify-center cursor-pointer">
                                        <div className="w-10px leading-none">
                                            <Image
                                                src="https://widgets.sportmonks.com/images/red_card.svg"
                                                width={15}
                                                height={15}
                                                />
                                        </div>
                                        <Image
                                            src={sunSVG}
                                            width={15}
                                            height={15}
                                            />
                                    </div>
                                </th>
                                <th className="">
                                    <div className="flex items-center justify-center cursor-pointer">
                                        <div className="mb-1 relative leading-none">
                                            <div>
                                                <div className="w-10px leading-none">
                                                    <Image
                                                        src="https://widgets.sportmonks.com/images/yellow_card.svg"
                                                        width={15}
                                                        height={15}
                                                        />
                                                </div>
                                            </div>
                                            <div className="absolute top-1 left-1 rounded-sm">
                                                <div className="w-10px leading-none">
                                                    <Image
                                                        src="https://widgets.sportmonks.com/images/yellow_card.svg"
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
                                    </div>
                                </th>
                                <th className="text-center">
                                    <div className="flex items-center justify-center cursor-pointer">
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
                                </th>
                                <th className="">
                                    <div className="flex items-center justify-center cursor-pointer">
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
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">30</td>
                                <td className="px-3">4</td>
                                <td className="px-3">4</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">380</td>
                                <td className="px-3">7.04</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">35</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">10</td>
                                <td className="px-3">6.63</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">29</td>
                                <td className="px-3">1</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">90</td>
                                <td className="px-3">7.04</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">40</td>
                                <td className="px-3">2</td>
                                <td className="px-3">1</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">117</td>
                                <td className="px-3">6.94</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">38</td>
                                <td className="px-3">4</td>
                                <td className="px-3">4</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">390</td>
                                <td className="px-3">7.55</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">26</td>
                                <td className="px-3">2</td>
                                <td className="px-3">1</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">108</td>
                                <td className="px-3">6.69</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">32</td>
                                <td className="px-3">3</td>
                                <td className="px-3">2</td>
                                <td className="px-3">1</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">204</td>
                                <td className="px-3">7.34</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">25</td>
                                <td className="px-3">4</td>
                                <td className="px-3">4</td>
                                <td className="px-3">0</td>
                                <td className="px-3">2</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">349</td>
                                <td className="px-3">6.99</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">29</td>
                                <td className="px-3">5</td>
                                <td className="px-3">4</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">426</td>
                                <td className="px-3">7.16</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">30</td>
                                <td className="px-3">2</td>
                                <td className="px-3">1</td>
                                <td className="px-3">1</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">58</td>
                                <td className="px-3">6.78</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">31</td>
                                <td className="px-3">3</td>
                                <td className="px-3">3</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">282</td>
                                <td className="px-3">7.11</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">26</td>
                                <td className="px-3">5</td>
                                <td className="px-3">4</td>
                                <td className="px-3">1</td>
                                <td className="px-3">3</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">317</td>
                                <td className="px-3">7.16</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">29</td>
                                <td className="px-3">1</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">90</td>
                                <td className="px-3">7.14</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">31</td>
                                <td className="px-3">3</td>
                                <td className="px-3">3</td>
                                <td className="px-3">0</td>
                                <td className="px-3">2</td>
                                <td className="px-3">2</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">280</td>
                                <td className="px-3">7.07</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">30</td>
                                <td className="px-3">4</td>
                                <td className="px-3">2</td>
                                <td className="px-3">2</td>
                                <td className="px-3">2</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">141</td>
                                <td className="px-3">6.94</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">34</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">36</td>
                                <td className="px-3">6.83</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">31</td>
                                <td className="px-3">4</td>
                                <td className="px-3">4</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">390</td>
                                <td className="px-3">7.76</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">25</td>
                                <td className="px-3">4</td>
                                <td className="px-3">4</td>
                                <td className="px-3">0</td>
                                <td className="px-3">3</td>
                                <td className="px-3">1</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">317</td>
                                <td className="px-3">7.19</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">22</td>
                                <td className="px-3">4</td>
                                <td className="px-3">4</td>
                                <td className="px-3">0</td>
                                <td className="px-3">3</td>
                                <td className="px-3">1</td>
                                <td className="px-3">3</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">302</td>
                                <td className="px-3">7.14</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">25</td>
                                <td className="px-3">2</td>
                                <td className="px-3">0</td>
                                <td className="px-3">2</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">2</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">68</td>
                                <td className="px-3">6.58</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">21</td>
                                <td className="px-3">3</td>
                                <td className="px-3">1</td>
                                <td className="px-3">2</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">111</td>
                                <td className="px-3">6.56</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">23</td>
                                <td className="px-3">4</td>
                                <td className="px-3">1</td>
                                <td className="px-3">3</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">170</td>
                                <td className="px-3">6.81</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">26</td>
                                <td className="px-3">3</td>
                                <td className="px-3">1</td>
                                <td className="px-3">2</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">92</td>
                                <td className="px-3">7.04</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">22</td>
                                <td className="px-3">5</td>
                                <td className="px-3">1</td>
                                <td className="px-3">4</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">1</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">178</td>
                                <td className="px-3">6.81</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">26</td>
                                <td className="px-3">4</td>
                                <td className="px-3">4</td>
                                <td className="px-3">0</td>
                                <td className="px-3">3</td>
                                <td className="px-3">3</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">326</td>
                                <td className="px-3">7.57</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">25</td>
                                <td className="px-3">2</td>
                                <td className="px-3">0</td>
                                <td className="px-3">2</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">62</td>
                                <td className="px-3">6.94</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">25</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0.0</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">26</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0.0</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">28</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0.0</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">26</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0.0</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">26</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0.0</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">27</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0.0</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">24</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0.0</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">21</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0.0</td>
                            </tr>
                            <tr className="h-20 text-center text-sm">
                                <td className="px-3">21</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0</td>
                                <td className="px-3">0.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
  )
}

export default Squad