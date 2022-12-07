import React, { useState, useRef } from 'react'
import axios from "axios";
// import { IKUpload } from 'imagekitio-react';
const apiUrl = process.env.REACT_APP_API_URL

const Modal = ({ openModal, setOpenModal, usn }) => {

    const [uploadLoading, setUploadLoading] = useState(false)

    const [imageUrl, setImageUrl] = useState(null)
    const [image, setImage] = useState(null)

    const [updateData, setUpdateData] = useState({
        instgram: '',
        linkedin: '',
        github: ''
    })
    const handleSubmit = async () => {
        let bodyContent = await JSON.stringify({
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

    const handleImageUpload = async (e) => {
        setUploadLoading(true)
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'studentDB');

        await axios.request({
            url: "https://api.cloudinary.com/v1_1/diimlpff5/image/upload",
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            data: data,
        }).then((res) => {
            console.log(res);
            setImageUrl(res.data.secure_url)
            handleSubmit()
        }).catch((e) => {
            console.log(e);
        })
        setUploadLoading(false)
    }

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setUpdateData({ ...updateData, [name]: value })
    }
    console.log(updateData);



    return (
        <>

            <input type="checkbox" defaultChecked id="my-modal-4" className="modal-toggle" />
            <label onClick={() => setOpenModal(false)} htmlFor="my-modal-4" className="modal cursor-pointer">
                <label onClick={(e) => e.stopPropagation()} className="modal-box relative  bg-update-modal  border-red-900  border-t-4 border-b-4 p-6 text-base-100 bg-light " >

                    <div className='gap-y-2' >

                        <div className='flex flex-nowrap justify-between items-center' >
                            <label className=' ' > Profile Picture: </label>

                            <div className='flex ' >

                                <input className='w-36' type="file" onChange={(e) => { setImage(e.target.files[0]) }} />

                                {/* <progress className="progress progress-primary w-56" value="40" max="100"></progress> */}
                                <div onClick={handleImageUpload} className="btn glass ml-2 w-32">
                                    {uploadLoading ? <span>Uploading...</span> : <span>Upload</span>}
                                </div>
                            </div>
                        </div>
                        {/* <div className='flex flex-nowrap justify-between items-center' >
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
                        </div> */}

                        {/* <div onClick={handleSubmit} className="btn  ">Submit</div> */}
                    </div>

                </label>
            </label>
        </>
    )
}

export default Modal