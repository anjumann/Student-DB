import React from 'react'
import axios from 'axios'
import MockData from './MOCK_DATA'
import MockPost from './MOCK_DATA_POST'


const Scripts = () => {

    const apiUrl = process.env.REACT_APP_API_URL

    const addUser = async (user) => {
        const branch = ["ISE", "CSE", "ECE", "EEE", "MECH", "CIVIL", "CHEM", "MBA", "MCA"]
        const section = ["A", "B", "C", "D"]
        const semester = ["1", "2", "3", "4", "5", "6", "7", "8"]

        let bodyContent = await JSON.stringify({
            "name": user.name,
            "email": user.email,
            "branch": branch[Math.floor(Math.random() * branch.length)],
            "section": section[Math.floor(Math.random() * section.length)],
            "semester": semester[Math.floor(Math.random() * semester.length)],
            "usn": user.usn,
            "profilepic": "https://source.unsplash.com/random/350x300/?random",
            "password": user.password,
            "isTeacher": false
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
            console.log(data)
        }).catch((e) => {
            console.log(e);
        });
    }


    const addPost = async (post) => {

        let bodyContent = await JSON.stringify({
            "name": post.name,
            "desc": post.desc,
            "userusn": post.usn,
            "image": "https://source.unsplash.com/random/350x300/?random",
        });

        await axios.request({
            url: `${apiUrl}/post/create`,
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            data: bodyContent,
        }).then((res) => {
            const { data } = res
            console.log(data)
        }).catch((e) => {
            console.log(e);
        });
    }

    const handlePost = () => {
        MockPost.map(async (post, key) => {
            await addPost(post)
            console.log(post)
        })
    }


    const handle = () => {
        MockData.map(async (user, key) => {
            await addUser(user)
            console.log(user)
        })
    }

    

    return (
        <>

            <button onClick={handle} className='btn glass'>
                add users
            </button>
            <button onClick={handlePost} className='btn glass'>
                add post
            </button>

        </>
    )
}

export default Scripts