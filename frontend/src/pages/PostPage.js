import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import CardPost from '../Components/CardPost'

const PostPage = () => {

    const apiUrl = process.env.REACT_APP_API_URL


    const [posts, setPosts] = useState([])

    const fetchPost = () => {
        axios.request({
            url: `${apiUrl}/post/all`,
            method: "GET",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
            },
        }).then((res) => {
            const { data } = res
            setPosts(data)
            console.log(posts);
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchPost()
    }, [])
    console.log(posts);



    return (
        <>
            <div className="text-3xl lg:text-7xl mt-16 mb-10 mx-auto text-white heading-shadow drop-shadow-lg w-fit " >
                Explore Post
            </div>
            <div className='mt-10 mx-auto w-11/12  ' >
                <div className=' flex flex-wrap gap-9 ' >

                    {posts.map((post, key) => {
                        return (
                            <>
                                <CardPost name={post.name} usn={post.userusn} likes={post.likes} description={post.desc} image={post.image} />
                            </>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default PostPage