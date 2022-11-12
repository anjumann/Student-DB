import React, { useEffect, useState } from 'react'
import { json, Link } from 'react-router-dom'
import axios from 'axios'
import { sessionAuth } from '../atom/authAtom'
import { useRecoilState } from 'recoil'



const Navbar = () => {
    const apiUrl = process.env.REACT_APP_API_URL
    const [authsesstion, setAuthSession] = useRecoilState(sessionAuth);


    const uid = JSON.parse(localStorage.getItem('uid'))
    // const [session, setSession] = useState(false)

    const logout = () => {
        localStorage.removeItem('uid')
        setAuthSession("User not found")
    }

    const fetchUser = async () => {

        await axios.request({
            url: `${apiUrl}/user/uid/${uid}`,
            method: "GET",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
            },
        }).then((res) => {
            const { data } = res
            setAuthSession(data)
            console.log("Auth" + authsesstion);
        }).catch((error) => {
            console.log(error);
        });

    }

    useEffect(() => {
        if (!authsesstion) {
            fetchUser()
        }
    }, [authsesstion])


    return (
        <>
            <div className="navbar bg-base-100 w-11/12 md:w-7/12 mx-auto navbarbg sticky top-2 text-white z-50 heading-shadow ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" z-50  dropdown-content mt-3 p-2 shadow  rounded-box w-52 gap-y-5 backdrop-blur-3xl backdrop-brightness-50">
                            <Link to='/members'><li>Members</li></Link>
                            {authsesstion !== "User not found" ? (
                                <>
                                    <Link to={`/members/${authsesstion.usn}`} ><li>Profile</li></Link>

                                </>
                            ) : (
                                <>
                                    <Link to='/register'><li>Register</li></Link>
                                    <Link to='/login'><li>Login</li></Link>
                                </>
                            )
                            }
                            <Link to='/explore'><li>Explore</li></Link>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">StudentDB</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex gap-8 cursor-pointer p-0">
                        <Link to='/members'><li>Members</li></Link>
                        {authsesstion !== "User not found" ? (
                            <>
                                <Link to={`/members/${authsesstion.usn}`}><li>Profile</li></Link>
                            </>
                        ) : (
                            <>
                                <Link to='/register'><li>Register</li></Link>
                                <Link to='/login'><li>Login</li></Link>
                            </>
                        )
                        }
                        <Link to='/explore'><li>Explore</li></Link>


                    </ul >
                </div >
                <div className="navbar-end">
                    {authsesstion !== "User not found" ? (
                        <button onClick={logout} className="btn glass">Logout</button>
                    ) : (
                        <Link to='/login' >
                            <div className="btn glass">
                                Login
                            </div>
                        </Link>
                    )}
                </div>
            </div >
        </>
    )
}

export default Navbar