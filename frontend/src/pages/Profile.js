import React, { useState, useEffect } from 'react'
import Modal from '../Components/members/Modal'
import { AiOutlineBranches } from 'react-icons/ai'
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi'
import { sessionAuth } from '../atom/authAtom'
import { useRecoilState } from 'recoil';
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { IKImage, IKContext } from 'imagekitio-react';
import { redirect } from 'react-router-dom'
import PostCreateModal from '../Components/members/PostCreateModal'
import ProfilePic from '../profilepic.png'

const Profile = () => {
  const { id } = useParams();
  const apiUrl = process.env.REACT_APP_API_URL
  const [openModal, setOpenModal] = useState(false)
  const [openPostModal, setOpenPostModal] = useState(false)
  const [authsesstion, setAuthSession] = useRecoilState(sessionAuth);


  const [studentData, setStudentData] = useState({})

  const fetchInfo = async () => {

    await axios.request({
      url: `${apiUrl}/user/usn/${id}`,
      method: "GET",
      headers: {
        "Accept": "*/*",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const { data } = res
      setStudentData(data);
    })
  }
  
  
  useEffect(() => {
    fetchInfo()
  }, [])
  
  
  
  useEffect(() => {
    const handleEscapePress = (e) => {
      if (e.key === "Escape") {
        setOpenModal(false);
      }
    };
    window.addEventListener("keydown", handleEscapePress);
    
    return () => window.removeEventListener("keydown", handleEscapePress);
  }, []);

  
  const profilePic = studentData.image || "https://images.unsplash.com/photo-1608889175123-8ee362201f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"


  return (
    <>
      <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover ">
        <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
          <div id="profile" className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl backdrop-blur-sm mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-3xl shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center " >
                <img
                  className='rounded-full'
                  src={profilePic} />
              </div>

              <h1 className="text-3xl heading-shadow text-white font-bold pt-8 lg:pt-0 inline capitalize ">{studentData.name}</h1>

              <span onClick={() => setOpenModal(true)} className='cursor-pointer' >
                {
                  (id.toLowerCase() === authsesstion.usn) ? <span className="border-red-600 border px-2 py-1 text-red-600 rounded-sm ml-3 ">Edit </span> : ''
                }
              </span>

              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-red-500 text-white uppercase ">
                {studentData.usn}
              </div>
              <p className="pt-4 text-base font-bold flex items-center justify-center  text-white lg:justify-start">
                <AiOutlineBranches className='text-red-600 inline mr-2 text-xl' />
                {studentData.branch}{" "}{studentData.semester}{" "} {studentData.section} </p>
              <p className="pt-2  text-xs lg:text-sm flex items-center justify-center lg:justify-start text-white ">
                <span>
                  {
                    studentData.linkedin ? (<a target='blank' href={studentData.linkedin}> <FiLinkedin className='inline text-red-500 mr-2 text-xl ' /> </a>) : ''
                  }
                  {
                    studentData.instagram ? (<a target='blank' href={studentData.instagram}> <FiInstagram className='inline text-red-500 mx-2 text-xl ' /></a>) : ''
                  }
                  {
                    studentData.github ? (<a href={studentData.github}> <FiGithub className='inline text-red-500 mx-2 text-xl ' /></a>) : ''
                  }
                  {
                    studentData.email ? (<a href={`mailto:${studentData.email}`}> <MdOutlineAlternateEmail className='inline text-red-500 mx-2 text-xl ' /> Mail </a>) : ''
                  }

                </span></p>
              <p className="pt-8 text-sm text-white "></p>

              <div className="pt-12 pb-8">
                <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-3xl mr-2">
                  Old Posts
                </button>
                {(id.toLowerCase() === authsesstion.usn) ? (<>

                  <button onClick={() => { setOpenPostModal(true) }} className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-3xl ml-2 ">
                    Create New Post
                  </button>
                </>) : ''}
              </div>


              <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              </div>
            </div>
          </div>
          <div className="w-full lg:w-2/5  ">
            <img
              className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block object-cover h-[500px]"
              src={profilePic} />


          </div>

          {openModal ? <Modal {...{ openModal, setOpenModal }} usn={studentData.usn} /> : null}
          {openPostModal ? <PostCreateModal {...{ openPostModal, setOpenPostModal }} usn={studentData.usn} name={studentData.name} /> : null}
        </div>
      </div>
    </>

  )
}

export default Profile