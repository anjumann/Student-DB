import {Link} from 'react-router-dom'
import React from 'react'
import Herosvg from '../../constant/Herosvg'
const Hero = () => {
    return (
        <>
            <div className=" my-16 mx-auto  md:w-9/12 backdrop-blur-sm backdrop-brightness-90 rounded-3xl  ">
                <div className="items-center lg:flex   mx-10">
                    <div className="w-full lg:w-3/4 px-3 lg:px-10 py-10">
                        <div className="lg:max-w-lg w-full ">
                            <h1 className="text-xl font-semibold text-gray-800 uppercase dark:text-white lg:text-3xl heading-shadow">Student Site</h1>

                            <p className="mt-2 text-gray-600 dark:text-gray-400">Student Social Site  </p>
                            <div className=' h-36 items-center flex flex-wrap gap-3 lg:space-x-4 ' >
                                <Link to='/register' >
                                    <button className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform hover:bg-red-600 rounded-md lg:w-auto  focus:outline-none border-2 border-red-600 ">Register</button>
                                </Link>

                                <Link to='/login' >
                                    <button className="w-full tracking-wider px-6 py-2.5 mt-6 text-sm text-white uppercase transition-colors duration-300 transform hover:bg-red-600 rounded-md lg:w-auto  focus:outline-none border-2 border-red-600 ">login</button>
                                </Link>

                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/4">
                        <Herosvg />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero