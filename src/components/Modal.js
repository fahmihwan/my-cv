import React from "react";

const Modal = ({ showImg, showModal, setShowModal }) => {
    return (
        <div>
            {showModal ? (
                <>
                    <div
                        onClick={() => setShowModal(false)}
                        // className="flex  backdrop-blur-xl justify-center items-center  outline-none focus:outline-none"
                        className="flex  backdrop-blur-xl justify-center items-center w-full  overflow-x-hidden overflow-y-auto fixed inset-0 z-50"
                    >
                        <div className="  w-11/12 h-11/12 lg:max-m-28  rounded overflow-hidden">
                            <button className="bg-purple-700 w-full lg:w-40 float-right hidden md:block  text-white mb-5 mt-2 md:m-2 py-3 md:py-1 px-1 rounded focus:outline-white">
                                Close
                            </button>
                            <div className="clear-right"></div>
                            <img
                                className="mx-auto object-contain h-[540px]  h-max-[580px] md:h-max-[0px] md:h-[580px]"
                                src={showImg}
                                alt=""
                            />
                            <button className="bg-purple-700 w-full md:hidden text-white mb-5 mt-2 md:m-2 py-3 md:py-1 px-1 rounded">
                                Close
                            </button>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    );
};

export default Modal;
