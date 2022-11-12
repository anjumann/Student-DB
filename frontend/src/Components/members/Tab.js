import React, { useState } from 'react'
import { IoBeerOutline, IoWineOutline } from 'react-icons/io5'
import { BiBeer } from 'react-icons/bi'
import { GiWineGlass, GiGlassCelebration } from 'react-icons/gi'

const Tab = ({ branch, setBranch, setSection, setSemester, search, setSearch }) => {
    const TabList = [
        {
            title: 'ALL',
            icon: <BiBeer className={`inline mr-2 text-white ${branch === "ALL" ? 'text-red-500' : 'text-white'}`} />
        },
        {
            title: 'ISE',
            icon: <IoBeerOutline className={`inline mr-2 text-white ${branch === "ISE" ? 'text-red-500' : 'text-white'}`} />
        },
        {
            title: 'CSE',
            icon: <GiWineGlass className={`inline mr-2 text-white ${branch === "CSE" ? 'text-red-500' : 'text-white'}`} />
        },
        {
            title: 'ECE',
            icon: <IoWineOutline className={`inline mr-2 text-white ${branch === "ECE" ? 'text-red-500' : 'text-white'}`} />
        },
        {
            title: 'AIML',
            icon: <GiGlassCelebration className={`inline mr-2 text-white ${branch === "AIML" ? 'text-red-500' : 'text-white'}`} />
        },

    ]




    return (
        <>
            <div className='flex flex-wrap gap-3' >
                <div className="inline-flex  flex-wrap justify-center">
                    {TabList.map((item, key) => {
                        return (
                            <button key={key} className={` flex items-center h-10 px-2 py-2 -mb-px text-center  bg-transparent  sm:px-4 -px-1 whitespace-nowrap cursor-base focus:outline-none  
                            ${branch === item.title ? (' text-red-500 border-b-2 heading-shadow  border-red-500') : ('text-gray-100 heading-shadow ')}`}
                                onClick={() => setBranch(item.title)}
                            >
                                {item.icon}

                                <span className="mx-1 text-sm sm:text-base"  >
                                    {item.title}
                                </span>
                            </button>
                        )
                    })}
                </div>
                <select className="select select-ghost w-fit text-white mx-auto backdrop-blur-sm"
                    onChange={(e) => setSemester(e.target.value)}
                >
                    <option value={"ALL"} defaultValue>Semster</option>
                    <option value={"ALL"} >All</option>
                    <option value={"5th"} >5th</option>
                </select>
                <select className="select select-ghost w-fit text-white mx-auto backdrop-blur-sm"
                    onChange={(e) => setSection(e.target.value)}
                >
                    <option value={"ALL"} defaultValue>Section</option>
                    <option value={"ALL"} >All</option>
                    <option value={"A"} >A</option>
                    <option value={"B"} >B</option>
                    <option value={"C"} >C</option>
                    <option value={"D"} >D</option>
                </select>
                <input
                onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.target.blur()
                    }
                  }}
                type="search" className="w-fit py-2 pl-10 pr-4 border rounded-lg bg-gray-800 text-gray-300 border-gray-600 focus:border-red-400  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-red-300" placeholder="Search"/>
            </div>
        </>
    )
}

export default Tab


// active tab

    // <button button className = "flex items-center h-10 px-2 py-2 -mb-px text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:px-4 -px-1 dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none" >
    //                 <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mx-1 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
    //                 </svg>

    //                 <span className="mx-1 text-sm sm:text-base">
    //                     Profile
    //                 </span>
    //             </button >