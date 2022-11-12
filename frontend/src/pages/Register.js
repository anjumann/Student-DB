import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { sessionAuth } from '../atom/authAtom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const [authsesstion, setAuthSession] = useRecoilState(sessionAuth);
    const [name, setName] = useState('')
    const [usn, setUsn] = useState('')
    const [email, setEmail] = useState('')
    const [branch, setBranch] = useState('')
    const [semester, setSemester] = useState('')
    const [section, setSection] = useState('')
    const [password, setPassword] = useState('')
    const [form, setForm] = useState(0)
    const [loading, setLoading] = useState(false)
    const [otp, setOtp] = useState('')
    const apiUrl = process.env.REACT_APP_API_URL




    const sendOtp = async () => {

        setLoading(true)
        await axios.request({
            url: apiUrl + '/verify/sendotp',
            method: 'POST',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            data: {
                email: email,
                usn: usn,
                name: name,
            }
        }).then((res) => {
            console.log(res.data)
            if (res.status === 200) {
                // alert('OTP sent to your email id')
                alert(res.data)
                if (res.data !== 'User already verified') {
                    setForm(1)
                }
            }
        }
        ).catch((error) => {
            console.log(error)
        })
        setLoading(false)
    }

    const verifyOtp = async () => {
        setLoading(true)
        await axios.request({
            url: apiUrl + '/verify/verifyotp',
            method: 'POST',
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            data: {
                email: email,
                otp: otp,
            }
        }).then((res) => {
            console.log(res.status)
            if (res.status === 200) {
                alert(res.data)
                if (res.data === 'OTP verified') {
                    setForm(2)
                }
            }
        }
        ).catch((error) => {
            console.log(error)
        })
        setLoading(false)
    }


    const handleSubmit = async () => {

        let bodyContent = await JSON.stringify({
            "name": name,
            "email": email,
            "branch": branch,
            "semester": semester,
            "section": section,
            "usn": usn,
            "password": password,

        });

        await axios.request({
            url: `${apiUrl}/auth/register`,
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            data: bodyContent,
        }).then((res) => {
            const { data } = res
            navigate("/login")
            console.log(data)
            if (data === "User already exists") {
                alert("User already exists")
            } else {
                alert(data)
            }
            setAuthSession(data)
            setName('')
            setUsn('')
            setEmail('')
            setPassword('')
        }).catch((e) => {
            console.log(e);

        });
        console.log(authsesstion);
    }


    return (
        <>
            <div className="flex h-[80vh] w-full max-w-sm mx-auto overflow-hidden  rounded-lg shadow-lg lg:max-w-4xl items-center ">
                <div className="hidden lg:w-1/2 lg:block  ">
                    <img src="/images/login1.jpg" alt="" className="object-cover w-full  mt-12  rounded-l-3xl h-[514px] border-t-4 border-b-4 transition-all ease-in-out duration-150 " />
                </div>



                <div className="w-full h-[514px] lg:w-1/2 px-6 py-8 md:px-8 md:mx-auto  backdrop-blur-sm mt-12  mx-5 rounded-r-3xl lg:border-t-4 lg:border-b-4 transition-all ease-in-out duration-150 bg-opacity-30 ">

                    <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white heading-shadow">
                        StudentDB
                    </h2>

                    <p className="text-xl text-center text-gray-600 dark:text-gray-200 heading-shadow">
                        Welcome!
                    </p>

                    {/* <a href="#" className="flex items-center justify-center mt-4  transition-colors duration-300 transform border rounded-lg dark:border-gray-700 text-gray-200 hover:bg-gray-50
                hover:text-gray-900 ">
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 font-bold text-center heading-shadow "> Sign in with Google</span>
                </a> */}

                    {/* <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline ">or Register
                        with email</a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div> */}
                    {/* <div className='flex flex-row justify-between'  >
                        <div className="mt-4 w-[45%]   ">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >Name</label>
                            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 " type="text"
                                onChange={(e) => { setName(e.target.value) }}
                                value={name}
                            />
                        </div>
                        <div className="mt-4 w-[45%]   ">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >USN</label>
                            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 " type="text"
                                onChange={(e) => { setUsn(e.target.value) }}
                                value={usn}
                            />
                        </div>
                    </div> */}

                    {form === 0 ?
                        (<> <div className="mt-4 w-full   ">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >Name</label>
                            <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 " type="text"
                                onChange={(e) => { setName(e.target.value) }}
                                value={name}
                            />
                        </div>
                            <div className="mt-4 w-full   ">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >USN</label>
                                <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 " type="text"
                                    onChange={(e) => { setUsn(e.target.value) }}
                                    value={usn}
                                />
                            </div>

                            <div className="mt-4">
                                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >Email Address</label>
                                <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 " type="email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    value={email}
                                />
                            </div>
                            {/* 
                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >Password</label>

                                    </div>

                                    <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 " type="password"
                                        onChange={(e) => { setPassword(e.target.value) }}
                                        value={password}
                                    />
                                </div> */}

                            <div className="mt-8">
                                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                    onClick={sendOtp}>{loading ? (<> <AiOutlineLoading3Quarters className='inline mx-2 animate-spin' /> Sending </>) : "Send OTP"}

                                </button>
                            </div></>) : (form === 1 ? (
                                <>
                                    <div className="mt-4 w-full   ">
                                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >Enter the OTP</label>
                                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 " type="text"
                                            onChange={(e) => { setOtp(e.target.value) }}
                                            value={otp}
                                        />
                                    </div>


                                    <div className="mt-8">
                                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                            onClick={verifyOtp}>
                                            Verify OTP
                                        </button>
                                    </div>
                                </>
                            ) : (form === 2 ? (
                                <>
                                    <div className="mt-4 w-full   ">
                                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >Branch </label>
                                        <select className="select select-ghost w-full text-white mx-auto backdrop-blur-sm"
                                            onChange={(e) => setBranch(e.target.value)}
                                            value={branch}
                                        >
                                            <option value={"ALL"} defaultValue>Branch</option>
                                            <option value={"ISE"} >ISE</option>
                                            <option value={"AIML"} >AIML</option>
                                            <option value={"CSE"} >CSE</option>
                                            <option value={"ECE"} >ECE</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-row justify-between">

                                        <div className="mt-4 w-[45%]   ">
                                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >Semester</label>
                                            <select className="select select-ghost w-full text-white mx-auto backdrop-blur-sm"
                                                onChange={(e) => setSemester(e.target.value)}
                                                value={semester}
                                            >
                                                <option defaultValue>Semster</option>
                                                <option value={"1st"} >1st</option>
                                                <option value={"3rd"} >3rd</option>
                                                <option value={"5th"} >5th</option>
                                                <option value={"7th"} >7th</option>
                                            </select>
                                        </div>
                                        <div className="mt-4 w-[45%]   ">
                                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >Section</label>
                                            <select className="select select-ghost w-full text-white mx-auto backdrop-blur-sm"
                                                onChange={(e) => setSection(e.target.value)}
                                                value={section}
                                            >
                                                <option defaultValue>Section</option>
                                                <option value={"A"} >A</option>
                                                <option value={"B"} >B</option>
                                                <option value={"C"} >C</option>
                                                <option value={"D"} >D</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-4 w-full   ">
                                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200 heading-shadow" >Password </label>
                                        <input className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 " type="password"
                                            onChange={(e) => { setPassword(e.target.value) }}
                                            value={password}
                                        />
                                    </div>

                                    <div className="mt-8">
                                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                            onClick={handleSubmit}>
                                            Register 🍾
                                        </button>
                                    </div>

                                </>
                            ) : (<> <p className='text-white heading-shadow text-center' > 🙃 Why and How you are here? 😥 </p> </>)))}

                    <div className="flex items-center justify-between mt-4 absolute bottom-6 left-0 right-0 mx-6">
                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4 "></span>

                        <Link to="/login" >
                            <span className="text-xs text-gray-100 uppercase hover:underline heading-shadow ">
                                or Login
                            </span>
                        </Link>


                        <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register