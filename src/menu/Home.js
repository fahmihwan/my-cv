import React from "react";
import { FaReact, FaLaravel, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import ProfileImg from "../components/ProfileImg";
const Home = () => {
    return (
        <>
            <div className="flex ">
                <div className="w-8/12 ">
                    <div className="py-20 px-10  h-full ">
                        <p className="mb-3">Hi, I'm Fahmi Ichwanurrohman</p>
                        <button className="border-dashed hover:border-solid border px-3 py-2 mr-2">
                            Learn About Me
                        </button>
                        <button className="border-dashed hover:border-solid border px-3 py-2">
                            resume
                        </button>
                    </div>
                </div>
                <div className="w-4/12 p-2 ">
                    <ProfileImg />
                </div>
            </div>
            <div className="boder p-3">
                Current Favorite Tech Stacks
                <div className="flex">
                    <FaLaravel className="text-6xl mr-3" />
                    <FaReact className="text-6xl mr-3" />
                    <FaPhp className="text-6xl mr-3" />
                    <IoLogoJavascript className="text-6xl mr-3" />
                </div>
            </div>
        </>
    );
};

export default Home;
