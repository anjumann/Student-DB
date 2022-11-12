import React, { useState, useRef } from 'react'
import axios from "axios";
import { IKUpload } from 'imagekitio-react';
const apiUrl = process.env.REACT_APP_API_URL

const Modal = ({ openModal, setOpenModal, usn }) => {

    const inputRefTest = useRef(null);

    const [imageUrl, setImageUrl] = useState('')

    const [updateData, setUpdateData] = useState({
        instgram: '',
        linkedin: '',
        github: ''
    })


    const onError = err => {
        console.log("Error", err);
    };

    const onSuccess = res => {
        console.log("Success", res);
        setImageUrl(res.url)
    };

    const onUploadProgress = (progress) => {
        console.log("Progress", progress);
    };

    const onUploadStart = (evt) => {
        console.log("Start", evt);
    };
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUpdateData({ ...updateData, [name]: value })
    }
    console.log(updateData);

    const handleSubmit = async () => {
        let bodyContent = await JSON.stringify({

            "instgram": updateData.instgram,
            "linkedin": updateData.linkedin,
            "github": updateData.github,
            "image": imageUrl
        });


        await axios.request({
            url: `${apiUrl}/user/update/${usn}`,
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            data: bodyContent,
        }).then((res) => {
            console.log(res);
            setOpenModal(false)
        }).catch((e) => {
            console.log(e);
        })



    }


    return (
        <>

            <input type="checkbox" defaultChecked id="my-modal-4" className="modal-toggle" />
            <label onClick={() => setOpenModal(false)} htmlFor="my-modal-4" className="modal cursor-pointer">
                <label onClick={(e) => e.stopPropagation()} className="modal-box relative  bg-update-modal  border-red-900  border-t-4 border-b-4 p-6 text-base-100 bg-light " >

                    <div className='gap-y-2' >

                        <div className='flex flex-nowrap justify-between items-center' >
                            <label className=' ' > Profile Picture: </label>

                            <div className='flex ' >
                                <IKUpload
                                    fileName={`${usn}.png`}
                                    authenticationEndpoint={`${apiUrl}/imageauth`}
                                    className="file-input file-input-ghost w-full max-w-xs"
                                    onSuccess={onSuccess}
                                    onError={onError}
                                    folder='/StudentDB/users'
                                    inputRef={inputRefTest}
                                    onUploadProgress={onUploadProgress}
                                    onUploadStart={onUploadStart}
                                    style={{ display: 'none' }}
                                />
                                <progress className="progress progress-primary w-56" value="40" max="100"></progress>
                                <div onClick={() => { inputRefTest.current.click() }} className="btn glass ml-2 w-full"> upload </div>
                            </div>
                        </div>
                        <div className='flex flex-nowrap justify-between items-center' >
                            <label className=' ' > Instagram: </label>
                            <input type="text" placeholder="Insta userName" className="input input-ghost w-full max-w-xs my-1 "
                                name='instagram'
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <div className='flex flex-nowrap justify-between items-center' >
                            <label className=' ' > Linkedin: </label>
                            <input type="text" placeholder="Linkedin link" className="input input-ghost w-full max-w-xs my-1 "
                                name='linkedin'
                                onChange={(e) => { handleChange(e) }} />
                        </div>
                        <div className='flex flex-nowrap justify-between items-center' >
                            <label className=' ' > Github: </label>
                            <input type="text" placeholder="Github userName" className="input input-ghost w-full max-w-xs my-1 "
                                name='github'
                                onChange={(e) => { handleChange(e) }} />
                        </div>

                        <div onClick={handleSubmit} className="btn  ">Submit</div>
                    </div>

                </label>
            </label>
        </>
    )
}

export default Modal