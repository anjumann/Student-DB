import React, { useState, useRef } from 'react'
import axios from "axios";
// import { IKUpload } from 'imagekitio-react';
const apiUrl = process.env.REACT_APP_API_URL

const ModalPost = ({ Modal, setModal, usn }) => {

    const [uploadLoading, setUploadLoading] = useState(false)

    const [imageUrl, setImageUrl] = useState(null)
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState('')

    const [updateData, setUpdateData] = useState({
        "desc": description,
    })
    const handleSubmit = async () => {
        let bodyContent = await JSON.stringify({
        "desc": description,
        });

        await axios.request({
            url: `${apiUrl}/post/update/${usn}`,
            method: "PUT",
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json"
            },
            data: bodyContent,
        }).then((res) => {
            console.log(res);
            setModal(false)
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
            <label onClick={() => setModal(false)} htmlFor="my-modal-4" className="modal cursor-pointer">
                <label onClick={(e) => e.stopPropagation()} className="modal-box relative  bg-update-modal  border-red-900  border-t-4 border-b-4 p-6 text-base-100 bg-light " >

                    <div className='gap-y-2' >

                        
                        <div className='flex flex-nowrap justify-between items-center' >
                            <label className=' ' > Desc: </label>
                            <input type="text" placeholder="Desc" className="input input-ghost w-full max-w-xs my-1 "
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }} />
                        </div>
                        

                        <div onClick={handleSubmit} className="btn  ">Submit</div>
                    </div>

                </label>
            </label>
        </>
    )
}

export default ModalPost