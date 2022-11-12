import React, { useState, useRef } from 'react'
import axios from "axios";
import { IKUpload } from 'imagekitio-react';
const apiUrl = process.env.REACT_APP_API_URL

const PostCreateModal = ({ openPostModal, setOpenPostModal, name, usn }) => {
    const inputRefTest = useRef(null);
    const [imageUrl, setImageUrl] = useState('')
    const [value, setValue] = useState(0)
    const [max, setMax] = useState(0)
    const [description, setDescription] = useState(null)

    const onError = err => {
        console.log("Error", err);
    };

    const onSuccess = res => {
        console.log("Success", res);
        setImageUrl(res.url)
    };

    const onUploadProgress = (progress) => {
        console.log("Progress", progress);
        setMax(progress.loaded)
        setValue(progress.total)
    };

    const onUploadStart = (evt) => {
        console.log("Start", evt);
    };

    const handleSubmit = async () => {
        let bodyContent = JSON.stringify({

            "name": name,
            "userusn": usn,
            "desc": description,
            "image": imageUrl
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
            console.log(res);
            setOpenPostModal(false)
        }).catch((e) => {
            console.log(e);
        })


    }


    return (
        <>

            <input type="checkbox" defaultChecked id="my-modal-4" className="modal-toggle" />
            <label onClick={() => setOpenPostModal(false)} htmlFor="my-modal-4" className="modal cursor-pointer">
                <label onClick={(e) => e.stopPropagation()} className="modal-box relative  bg-update-modal  border-red-900  border-t-4 border-b-4 p-6 text-base-100 bg-light " >

                    <div className='gap-y-2' >

                        <div className='flex flex-nowrap justify-between items-center' >
                            <label className=' ' > Image: </label>


                            <IKUpload
                                fileName={`${usn}.png`}
                                authenticationEndpoint={`${apiUrl}/imageauth`}
                                className="file-input file-input-ghost w-full max-w-xs hidden "
                                onSuccess={onSuccess}
                                onError={onError}
                                folder='/StudentDB/post'
                                inputRef={inputRefTest}
                                onUploadProgress={onUploadProgress}
                                onUploadStart={onUploadStart}
                                
                            />
                            <div className='flex w-full ' >
                                <progress className="progress progress-secondary w-full" value={value} max={max}></progress>
                                <div onClick={() => { inputRefTest.current.click() }} className="btn glass ml-2 w-fir"> upload </div>
                            </div>


                        </div>
                        <div className='flex flex-nowrap justify-between items-center' >
                            <label className=' ' > Description: </label>
                            <input type="text" placeholder="Description" className="textarea textarea-ghost w-full max-w-xs my-1 "
                                name='description'
                                onChange={(e) => { setDescription(e.target.value) }} />
                        </div>


                        <div onClick={handleSubmit} className="btn  ">Submit</div>
                    </div>

                </label>
            </label>
        </>
    )
}

export default PostCreateModal