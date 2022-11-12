import React, { useEffect, useState } from "react";
// import Tab from '../../Components/members/Tab';
import Tab from '../Components/members/Tab';
import axios from "axios";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { memberDetails } from "../atom/authAtom";


const Members = () => {
  
  const apiUrl = process.env.REACT_APP_API_URL;
  const [studentData, setMembers] = useRecoilState(memberDetails);

  const fetchInfo = async () => {
    await axios.request({
      url: `${apiUrl}/user/all`,
      method: "GET",
      headers: {
        "Accept": "*/*",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      const { data } = res
      setMembers(data);
      console.log(data);
    }).catch((error) => {
      console.log(error);
    });


  }

  useEffect(() => {
    fetchInfo()
  }, [])




  const [branch, setBranch] = useState('ALL')
  const [section, setSection] = useState('ALL')
  const [semester, setSemester] = useState('ALL')
  const [search, setSearch] = useState('')

  const student = studentData.filter((item) => (item.branch === branch || branch === 'ALL') && (item.section === section || section === 'ALL') && (item.sem === semester || semester === 'ALL') && item.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
      <section className="mt-12 w-11/12 lg:7/12 mx-auto">

        <div className="container px-6 py-8 mx-auto backdrop-blur-sm rounded-3xl border-y-4 min-h-[80vh]">
          <h2 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-6xl dark:text-white heading-shadow  ">Our Members</h2>
          <div className='w-fit mx-auto my-6'>
            <Tab {...{ branch, setBranch }} {...{ section, setSection }} {...{ semester, setSemester }} {...{ search, setSearch }} />
          </div>
          <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 transition-all duration-150">
            {student.map((student, key) => {
              return (

                <Link to={`/members/${student.usn}`} key={key}  >
                  <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto group transition-all duration-150 cursor-pointer ">
                    <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: "url(/images/sky.jpg)" }}></div>

                    <div className="w-56 -mt-10 overflow-hidden rounded-2xl shadow-lg md:w-64 bg-none backdrop-blur-sm  ">
                      <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white heading-shadow">{student.name}</h3>

                      <div className="flex items-center justify-center px-3 py-2 border-t-2 border-gray-400 bg-slate-300/30 ">
                        <span className="font-bold text-gray-200 heading-shadow">{student.branch} {student.section} </span>

                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}

            {
              student.length === 0 && <h1 className="text-base font-semibold text-center text-gray-800 capitalize lg:text-6xl dark:text-white w-[70vw] break-words mx-auto ">No Student Found  try changing Filter</h1>
            }
          </div>
        </div>
      </section>

    </>
  )
}

export default Members