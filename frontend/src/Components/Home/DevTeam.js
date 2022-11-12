import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const DevTeam = () => {
    return (
        <>
            <section className="bg-none backdrop-blur-sm w-11/12 lg:w-9/12 mx-auto border-x-2 backdrop-brightness-75">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center capitalize lg:text-4xl  text-white
                    heading-shadow">Developer</h1>
                    <div className="mt-2 w-fit mx-auto">
                        <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
                    </div>

                    <p className="max-w-2xl mx-auto my-6 text-center  text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.
                    </p>


                    <div className=" flex flex-wrap lg:space-x-6 mt-8 xl:mt-16 w-fit mx-auto   ">

                        <div className="flex flex-col items-center p-8 transition-all duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group border-gray-700 my-8 sm:w-11/12 mx-auto lg:w-fit hover:-translate-y-3 hover:scale-110 
                        hover:shadow-slate-100 hover:shadow-lg 
                        ">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 group-hover:shadow-slate-100 group-hover:shadow-lg transition-all duration-150 " src="/images/anjuman.jpeg" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold capitalize  text-white group-hover:text-white heading-shadow">Anjuman Raj</h1>

                            <p className="mt-2  capitalize  text-gray-300 group-hover:text-gray-300">4NM20IS014</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="https://github.com/anjumann" target="_blank" className="mx-2   text-gray-300 hover:text-gray-300 group-hover:text-white text-xl " aria-label="Reddit">
                                    <BsGithub />
                                </a>

                                <a href="https://www.linkedin.com/in/anjuman-raj/" target="_blank" className="mx-2   text-gray-300 hover:text-gray-300 group-hover:text-white text-xl " aria-label="Facebook">
                                    <BsLinkedin />
                                </a>

                                <a href="https://www.anjuman.tech/" target="_blank" className="mx-2  text-gray-300 hover:text-gray-300 group-hover:text-white text-xl " aria-label="Github">
                                    <FaExternalLinkSquareAlt />
                                </a>
                            </div>
                        </div>


                        {/* <div className="flex flex-col items-center p-8 transition-all duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group border-gray-700 my-8 sm:w-11/12 mx-auto lg:w-fit hover:-translate-y-3 hover:scale-110 
                        hover:shadow-slate-100 hover:shadow-lg 
                        ">
                            <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 group-hover:shadow-slate-100 group-hover:shadow-lg transition-all duration-150 " src="/images/sky.jpg" alt="" />

                            <h1 className="mt-4 text-2xl font-semibold capitalize  text-white group-hover:text-white heading-shadow">Ayush Ranjan</h1>

                            <p className="mt-2  capitalize  text-gray-300 group-hover:text-gray-300">4NM20IS023</p>

                            <div className="flex mt-3 -mx-2">
                                <a href="#" className="mx-2   text-gray-300 hover:text-gray-300 group-hover:text-white text-xl heading-shadow " aria-label="Reddit">
                                    <BsGithub />
                                </a>

                                <a href="#" className="mx-2   text-gray-300 hover:text-gray-300 group-hover:text-white text-xl heading-shadow " aria-label="Facebook">
                                    <BsLinkedin />
                                </a>

                                <a href="#" className="mx-2  text-gray-300 hover:text-gray-300 group-hover:text-white text-xl heading-shadow " aria-label="Github">
                                    <FaExternalLinkSquareAlt />
                                </a>
                            </div>
                        </div> */}


                    </div>S
                    <hr className="my-12 border-gray-200 " />

                </div>
            </section>
        </>
    )
}

export default DevTeam