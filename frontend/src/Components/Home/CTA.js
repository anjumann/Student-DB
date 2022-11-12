import React from 'react'
import { FaCodeBranch } from 'react-icons/fa'
import {AiOutlineStar} from 'react-icons/ai'

const CTA = () => {
    return (
        <>
            <section className="bg-none w-11/12 lg:w-9/12 mx-auto backdrop-blur-sm border-x-2 border-b-8 rounded-b-3xl  backdrop-brightness-75 ">
                <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-600 dark:text-white
                    heading-shadow ">
                        Try something really different right now.
                    </h2>
                    <div className="mt-2 w-fit mx-auto">
                        <span className="inline-block w-40 h-1 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-red-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-red-500 rounded-full"></span>
                    </div>

                    <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto recusandae tenetur iste quaerat voluptatibus quibusdam nam repudiandae </p>

                    <div className="mt-6">
                        <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3">
                            <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">

                                <span className="mx-2 capitalize ">
                                    <FaCodeBranch className='inline text-xl heading-shadow mr-2 ' />
                                    contribute to this project
                                </span>
                            </a>
                        </div>

                        <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-3 sm:mt-0">
                            <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-600">

                                <span className="mx-2 capitalize">
                                    <AiOutlineStar className='inline text-xl heading-shadow mr-2 ' />
                                    Give us a star on github
                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default CTA