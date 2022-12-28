import React, { useEffect } from "react";
import ProfileImg from "../components/ProfileImg";
import work_experience from "./../data/work_experience.json";
import json_skills from "./../data/skills.json";
import AOS from "aos";
import "aos/dist/aos.css";

// icon
import { FaReact, FaLaravel, FaPhp } from "react-icons/fa";
import { SiJavascript, SiAngular } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const About = ({ darkMode }) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="py-10">
            <Description darkMode={darkMode} />
            <div className="mx-10">
                <div className="md:flex" data-aos="fade-up">
                    <div className="w-full md:w-5/12 md:mb-0 p-5 mb-10 rounded-lg bg-white dark:bg-elFancy  dark:text-textFancy  ">
                        <p className="text-4xl mb-3">Experience</p>
                        <WorkExperience />
                    </div>
                    <div className="w-full md:w-7/12  ">
                        <div className="md:flex">
                            <div className="w-full md:w-1/2  mb-10 md:mb-0 md:mx-5 p-5 rounded bg-white dark:bg-elFancy dark:text-textFancy   ">
                                <p className="text-4xl mb-3">Skill</p>
                                <Skills darkMode={darkMode} />
                            </div>
                            <div className="w-full md:w-1/2 p-5  md:mx-5 rounded bg-white  dark:bg-elFancy dark:text-textFancy ">
                                <p className="text-4xl mb-3">Education</p>
                                <Education />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

const Description = ({ darkMode }) => {
    return (
        <div className="w-full px-10 mt-5 pb-10">
            <p className="text-4xl md:hidden">Yo, hello there!</p>
            <div className="flex flex-wrap-reverse  mb-5">
                <div className="w-full md:w-8/12 text-black dark:text-textFancy z-10">
                    <section className="md:pr-20 mt-5 md:mt-0">
                        <p
                            className="text-4xl mb-5 hidden md:block "
                            data-aos="fade-right"
                            data-aos-delay="100"
                        >
                            Yo, hello there!
                        </p>
                        <p
                            className="text-justify "
                            data-aos="fade-right"
                            data-aos-delay="300"
                        >
                            I'm Fahmi Ichwanurrohman, you can call me Fahmi.
                            graduated from Information System at Universitas
                            Teknologi Yogyakarta. Focusing an technologies for
                            web development with PHP and Javascript, such
                            Laravel and React. I love to learn all of new
                            things. Recently, I'm learning React and Laravel
                            development.
                        </p>
                    </section>
                    <section className="pt-3 mt-5 flex">
                        <FaGithub className="text-4xl mr-3 stroke-2 " />
                        <FaLinkedin className="text-4xl mr-3" />
                        <AiOutlineMail className="text-4xl mr-3" />
                        <FaWhatsapp className="text-4xl" />
                    </section>
                </div>
                <div className="w-full md:w-3/12  flex justify-center z-10">
                    <ProfileImg darkMode={darkMode} data-aos="flip-up" />
                </div>
            </div>
            {/* <SvgDescription /> */}
            {/* <hr className="border-purple-800" /> */}
        </div>
    );
};

const WorkExperience = () => {
    return (
        <div className="relative ">
            {work_experience.data.map((d, i) => {
                return (
                    <div key={`${i}div`}>
                        <span className="bg-lightBlue dark:bg-purple-700  w-5 h-5 rounded-full absolute flex items-center justify-center">
                            <span className="bg-white dark:bg-orange-200 w-2 h-2 block rounded-full"></span>
                        </span>
                        <div className="border-l-4 ml-2 pl-5 md:pl-8 border-lightBlue dark:border-purple-600 pb-5">
                            <div className="mb-1">
                                <p className="font-semibold ">
                                    {d.title} .{" "}
                                    <span className="font-light text-sm">
                                        {d.category}
                                    </span>
                                </p>
                                <p>
                                    {d.company} ·{" "}
                                    <span className="font-light text-sm md:text-base">
                                        {d.duration}
                                    </span>
                                </p>
                            </div>
                            <ul className="list-disc pl-3 text-xs ">
                                {d.description.map((list, i) => {
                                    return <li key={i}>{list}</li>;
                                })}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const Skills = ({ darkMode }) => {
    return (
        <>
            <ul>
                {json_skills.data.map((d, i) => {
                    return (
                        <li className="flex mb-3" key={i}>
                            <div className="">
                                <div className="mr-3 bg-lightBlue dark:bg-purple-700  opacity-95 text-white w-10 h-10  flex items-center justify-center rounded-full ">
                                    <FilterIcon icon={d.title} />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex justify-between ">
                                    <p>{d.title}</p>
                                    <p className="text-xs">{d.value} %</p>
                                </div>
                                <progress
                                    // className="progressbar-skill-light"
                                    className={`${
                                        darkMode === "dark"
                                            ? "progressbar-skill-dark"
                                            : "progressbar-skill-light"
                                    }`}
                                    value={d.value}
                                    max={100}
                                ></progress>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

const Education = () => {
    return (
        <>
            <span className="bg-lightBlue dark:bg-purple-700  w-5 h-5 rounded-full absolute flex items-center justify-center">
                <span className="bg-white dark:bg-orange-200 w-2 h-2 block rounded-full"></span>
            </span>
            <div className="border-l-4 ml-2 pl-4 border-lightBlue dark:border-purple-600 pb-5">
                <div className="mb-1">
                    <p className="font-semibold text-sm">
                        Universitas Teknologi Yogyakarta
                    </p>
                    <p className="text-sm font-semibold mb-2">
                        S1 Sistem Informasi
                    </p>
                    <p className="text-xs ">
                        Lulus dari S1 Sistem Informasi Universitas Teknologi
                        Yogyakarta pada tahun 2022 dengan IPK 3.26.
                    </p>
                </div>
            </div>

            <span className="bg-lightBlue dark:bg-purple-700 w-5 h-5 rounded-full absolute flex items-center justify-center">
                <span className="bg-white dark:bg-orange-200 w-2 h-2 block rounded-full"></span>
            </span>
            <div className="border-l-4 ml-2 pl-4 border-lightBlue dark:border-purple-600 pb-5">
                <div className="mb-1">
                    <p className="font-semibold text-sm">SMAN 1 MAOSPATI</p>
                    <p className="text-sm font-semibold mb-2">IPA</p>
                    <p className="text-xs">
                        Lulus dari S1 Sistem Informasi Universitas Teknologi
                        Yogyakarta pada tahun 2022 dengan IPK 3.26.
                    </p>
                </div>
            </div>

            <span className="bg-lightBlue dark:bg-purple-700 w-5 h-5 rounded-full absolute flex items-center justify-center">
                <span className="bg-white dark:bg-orange-200 w-2 h-2 block rounded-full"></span>
            </span>
            <div className="border-l-4 ml-2 pl-4 border-lightBlue dark:border-purple-600 pb-5">
                <div className="mb-1">
                    <p className="font-semibold text-sm">SMPN 1 MAOSPATI</p>
                    <p className="text-xs">
                        Lulus dari S1 Sistem Informasi Universitas Teknologi
                        Yogyakarta pada tahun 2022 dengan IPK 3.26.
                    </p>
                </div>
            </div>
        </>
    );
};

const FilterIcon = ({ icon }) => {
    switch (icon) {
        case "Laravel":
            return <FaLaravel className="text-2xl" />;
        case "ReactJs":
            return <FaReact className="text-2xl" />;
        case "Javascript":
            return <SiJavascript className="text-2xl" />;
        case "PHP":
            return <FaPhp className="text-2xl" />;
        case "AngularTs":
            return <SiAngular className="text-2xl" />;
        case "MYSQL":
            return <GrMysql className="text-2xl" />;
        default:
            break;
    }
};

const SvgDescription = ({ responsive }) => {
    return (
        <div className={`relative block`}>
            <svg
                className="absolute left-0 bottom-0  right-0 stroke-2 stroke-purple-900 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#2f1459"
                    fill-opacity="1"
                    d="M0,288L0,192L160,192L160,32L320,32L320,96L480,96L480,160L640,160L640,128L800,128L800,96L960,96L960,224L1120,224L1120,64L1280,64L1280,128L1440,128L1440,320L1280,320L1280,320L1120,320L1120,320L960,320L960,320L800,320L800,320L640,320L640,320L480,320L480,320L320,320L320,320L160,320L160,320L0,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
};
