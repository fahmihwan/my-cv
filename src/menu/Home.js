import React from "react";
import { FaReact, FaLaravel, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import ProfileImg from "../components/ProfileImg";

const Home = () => {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row mt-10 z-50">
                <div className="w-full  md:w-8/12 px-10">
                    <div className="pt-10   h-full ">
                        <section className="mb-10">
                            <p className=" text-2xl">
                                Hi, I'm Fahmi Ichwanurrohman
                            </p>
                            <p className="mb-3">
                                I'm currently looking for a new opportunity.
                                Let's connect with me
                            </p>
                        </section>

                        <section className="mb-10">
                            <button className="border-dashed hover:border-solid border px-3 py-2 mr-2">
                                Learn About Me
                            </button>
                            <button className="border-dashed hover:border-solid border px-3 py-2">
                                resume
                            </button>
                        </section>

                        <section>
                            <div className="mb-3">
                                Current Favorite Tech Stack
                            </div>
                            <div className="flex ">
                                <FaLaravel className="text-6xl mr-3 " />
                                <FaReact className="text-6xl mr-3 " />
                                <FaPhp className="text-6xl mr-3 " />
                                <IoLogoJavascript className="text-6xl mr-3 " />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="w-full md:w-4/12 p-2 flex md:flex-none justify-center  ">
                    <ProfileImg />
                </div>
            </div>

            <svg
                className="absolute left-0 bottom-0   right-0 stroke-2 stroke-purple-900 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#2f1459"
                    fill-opacity="1"
                    d="M0,96L0,256L160,256L160,160L320,160L320,96L480,96L480,192L640,192L640,160L800,160L800,224L960,224L960,160L1120,160L1120,192L1280,192L1280,96L1440,96L1440,320L1280,320L1280,320L1120,320L1120,320L960,320L960,320L800,320L800,320L640,320L640,320L480,320L480,320L320,320L320,320L160,320L160,320L0,320L0,320Z"
                ></path>
            </svg>
        </>
    );
};

export default Home;
