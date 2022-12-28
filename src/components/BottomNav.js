import React from "react";

import { Link } from "react-router-dom";
import { IoBagCheckSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const BottomNav = () => {
    return (
        <div className="p-2 sticky bottom-0 z-50 md:hidden ">
            <div className="bg-lightBlue dark:bg-[#281f53] border border-violet-900 dark:border-[#6b5dd3]  flex p-2 text-xs dark:rounded ">
                <div className="w-10/12 flex">
                    <div className="w-1/3 px-1 ">
                        <Link
                            to="/"
                            className="flex items-center  bg-white dark:bg-[#504585] dark:text-white  py-1 rounded"
                        >
                            <div className="w-fit mx-auto ">
                                <AiFillHome className="mx-auto" />
                                <span>Home</span>
                            </div>
                        </Link>
                    </div>
                    <div className="w-1/3 px-1 ">
                        <Link
                            to="/portfolio"
                            className="flex items-center  bg-white dark:bg-[#504585] dark:text-white  py-1 rounded"
                        >
                            <div className="w-fit mx-auto ">
                                <IoBagCheckSharp className="mx-auto" />
                                <span>Portfolio</span>
                            </div>
                        </Link>
                    </div>
                    <div className="w-1/3 px-1 ">
                        <Link
                            to="/about"
                            className="flex items-center  bg-white dark:bg-[#504585] dark:text-white  py-1 rounded"
                        >
                            <div className="w-fit mx-auto ">
                                <FaUser className="mx-auto" />
                                <span>About</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-2/12">
                    <div className="border border-violet-900 bg-white  dark:bg-elFancy rounded-full h-14 w-14  flex items-center justify-center absolute right-5 top-[-10px]">
                        <div className="flex items-center h-11 w-11 rounded-full bg-black  dark:bg-purple-700 text-white">
                            <FaUser className="mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
