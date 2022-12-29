import React from "react";
import { FaReact, FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { Link } from "react-router-dom";
import ProfileImg from "../components/ProfileImg";
import { FaLinkedin } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
const Home = ({ darkMode }) => {
    // tes

    return (
        <>
            <div className="flex flex-col-reverse md:flex-row mt-10 mx-5 md:mx-20 lg:mx-40 z-50 ">
                <div className="w-full md:w-8/12 ">
                    <div className="pt-10 h-full ">
                        <section className="mb-5 md:mb-10 ">
                            <p
                                data-aos="fade-right"
                                className="text-xl md:text-4xl mb-2 dark:text-white"
                            >
                                Hi, I'm{" "}
                                <span className="text-purple-500">
                                    Fahmi Ichwanurrohman
                                </span>
                            </p>
                            <p
                                data-aos="fade-right"
                                data-aos-delay="300"
                                className="mb-3 text-xl md:text-2xl text-sky-500"
                            >
                                currently I'm looking for a new opportunity.
                                Let's connect with me
                            </p>
                        </section>

                        <section className="mb-10">
                            <div className="flex items-center  ">
                                <Link
                                    className="border-dashed bg-white dark:bg-transparent hover:border-solid border  border-gray-400 dark:border-white p-2  mr-2"
                                    to={"/about"}
                                >
                                    Learn About Me
                                </Link>

                                <button className="border-dashed bg-white dark:bg-transparent hover:border-solid border border-gray-400 dark:border-white p-2 mr-2 ">
                                    Resume
                                </button>
                                <a
                                    className="text-blue-600 dark:text-purple-500 "
                                    target={"_blank"}
                                    rel="noreferrer noopener"
                                    href="https://www.linkedin.com/in/fahmi-i-40a864111/"
                                >
                                    <FaLinkedin className="text-5xl mr-3" />
                                </a>
                            </div>
                        </section>

                        <section className="mb-10 md:mb-0">
                            <div className="mb-3">
                                Current Favorite Tech Stack
                            </div>
                            <div className="flex ">
                                <FaLaravel className="text-red-600 dark:text-purple-600 text-6xl mr-3 " />
                                <FaReact className="text-sky-600 dark:text-purple-600 text-6xl mr-3 " />
                                <SiPhp className="text-blue-800 dark:text-purple-600 text-6xl mr-3 " />
                                <IoLogoJavascript className="text-yellow-500 dark:text-purple-600 text-6xl mr-3 " />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="w-full md:w-4/12 flex md:flex-none justify-center  ">
                    <ProfileImg darkMode={darkMode} />
                </div>
            </div>
        </>
    );
};

export default Home;
