import React from "react";
// AiOutlineCompress
const Modal = ({ showImg, showModal, setShowModal }) => {
    return (
        <>
            {showModal ? (
                <>
                    <div
                        onClick={() => setShowModal(false)}
                        className="flex  backdrop-blur-xl justify-center items-center w-full h-screen bg-black bg-opacity-30 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 cursor-zoom-out"
                    >
                        <div className=" w-11/12 h-11/12 lg:max-m-28  rounded overflow-hidden">
                            <img
                                className="mx-auto border border-purple-700 object-contain h-[540px]  h-max-[580px] md:h-max-[0px] md:h-[580px] drop-shadow-md"
                                src={showImg}
                                alt=""
                            />
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default Modal;
