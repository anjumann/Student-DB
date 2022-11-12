import React from 'react'
import { GiTechnoHeart } from 'react-icons/gi'


const Footer = () => {
    return (
        <>

            <footer className="bg-none sticky  ">
                <div className="container px-6 py-8 mx-auto ">
                    <hr className="my-10 border-gray-200 dark:border-gray-700" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-gray-400">© Copyright 2022. All Rights Reserved.</p>

                        <p className="text-sm text-gray-400 capitalize "> Build with <GiTechnoHeart className='inline text-red-500' /> by Team</p>

                        <div className="flex mt-3 -mx-2 sm:mt-0">
                            <div className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Home </div>

                            <div className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Team </div>

                            <div className="mx-2 text-sm text-gray-400 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Github </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer

