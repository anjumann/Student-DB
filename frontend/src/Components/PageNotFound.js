import React from 'react'
import Error from '../not-found.png'

const PageNotFound = () => {
    return (
        <>
            <div className='min-h-[70vh] flex items-center justify-center w-full mx-auto flex-wrap ' >
                <div>
                    <h1 className=' text-5xl lg:text-9xl font-bold text-center text-white w-1/2'>404</h1>
                    <p className=' text-xl lg:text-5xl font-semibold text-center text-white' > Page Not Found </p>
                </div>
                <div>
                    <img src={Error} alt="" className='mx-auto w-3/4 ' />
                </div>
            </div>
        </>
    )
}

export default PageNotFound