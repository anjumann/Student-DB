import React from 'react'

const ModalDefault = ({ head, message, openModalOTP, setOpenModalOTP }) => {
    return (
        <>
            <input type="checkbox" defaultChecked className="modal-toggle" />
            <div onClick={() => setOpenModalOTP(false)} className="modal modal-bottom sm:modal-middle  ">
                <div
                    onClick={(e) => e.stopPropagation()}
                    className="modal-box bg-default-modal  border-red-900  border-t-4 border-b-4 p-6 text-base-100 bg-light ">
                    <h3 className="font-bold text-lg text-center">{head}</h3>
                    <p className="py-4 text-center">
                        {message}
                    </p>

                </div>
            </div>
        </>
    )
}

export default ModalDefault