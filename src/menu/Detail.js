import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import { MdArrowBackIos } from "react-icons/md";
const Detail = () => {
    const navigate = useNavigate();
    let { detail, primaryImg, title } = useLocation().state;

    let dataImg = []; // get totalImg and convert to directory folder (string)
    for (let i = 1; i <= detail.totalImg; i++) {
        let dir = `${detail.dir + i}.png`;
        dataImg.push(dir);
    }
    return (
        <div className="px-4 md:px-10 pt-5 pb-52">
            <div className="mb-5 flex justify-between dark:bg-elFancy dark:text-textFancy ">
                <p className="text-xl">Detail Portfolio</p>
                <button
                    onClick={() => navigate("/portfolio")}
                    className=" bg-purple-800 animate-bounce hover:animate-none  px-2 rounded-full text-white flex items-center"
                >
                    <MdArrowBackIos /> Back
                </button>
            </div>

            <SliderEl primaryImg={primaryImg} dataImg={dataImg} />
            <NoteEl detail={detail} title={title} />
        </div>
    );
};

export default Detail;

const SliderEl = ({ primaryImg, dataImg }) => {
    const [showImg, setShowImg] = useState(primaryImg.slice(1)); // primary Image Show
    const handleMouseEnter = (src) => {
        setShowImg(src);
    };
    return (
        <div className=" mb-5  bg-elFancy md:flex ">
            <div className="w-full md:w-3/4  mt-5 md:mt-0 md:mr-5 bg-badgeFancy rouded overflow-hidden">
                <div className="py-3 px-3 bg-gray-600 flex ">
                    <div className="bg-red-400 w-1 h-1 rounded-full mr-1"></div>
                    <div className="bg-yellow-400 w-1 h-1 rounded-full mr-1"></div>
                    <div className="bg-green-400 w-1 h-1 rounded-full mr-1"></div>
                </div>
                <div className="md:py-2 ">
                    <img
                        src={showImg}
                        alt=""
                        className="w-[900px]  h-[200px] md:h-[460px] object-top  object-contain"
                    />
                </div>
            </div>
            <div className="flex md:flex-col border-purple-600  overflow-x-scroll md:overflow-x-visible md:overflow-y-scroll md:h-[500px] py-5   items-end w-full md:w-1/4">
                {dataImg.map((d, i) => {
                    return (
                        <img
                            key={i + 1}
                            src={d}
                            alt=""
                            onMouseEnter={(e) => handleMouseEnter(d)}
                            className={`w-28 md:w-56 h-28 md:h-28 object-contain md:mb-5 mr-2  md:mx-auto bg-badgeFancy cursor-grab border-red-600 ${
                                showImg === d ? "border-2 " : "border-0"
                            }`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const NoteEl = ({ detail, title }) => {
    console.log(detail);
    return (
        <div className="w-full ">
            <div className="mb-5 dark:bg-elFancy dark:text-textFancy ">
                <p className=" text-2xl text-purple-400">{title}</p>
            </div>
            <div className="mb-2">
                <p className="text-white">Description</p>
                <p className="text-xs md:text-base">{detail.description}</p>
            </div>
            <div className="md:flex">
                {detail.fitur.length !== 0 && (
                    <div className="mb-2 w-full md:w-1/2">
                        <p className="text-white">Fitur</p>
                        <ul className="text-xs md:text-base list-disc ml-3">
                            {detail.fitur.map((d) => {
                                return <li>{d}</li>;
                            })}
                        </ul>
                    </div>
                )}
                <div className="w-full md:w-1/2">
                    <div className="mb-2">
                        <p className="mb-1 text-white">Technology</p>
                        <ul className="text-xs  flex flex-wrap">
                            {detail.technology.map((d) => {
                                return (
                                    <li className="mr-2 mb-2 bg-badgeFancy p-1 rounded text-purple-400 ">
                                        {d}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {detail.integration.length !== 0 && (
                        <div className="mb-2">
                            <p className="mb-1 text-white">Integration</p>
                            <ul className="text-sm  flex">
                                {detail.integration.map((d) => {
                                    return (
                                        <li className="mr-3 bg-badgeFancy p-1 rounded text-purple-400">
                                            {d}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                    <div className="mb-2">
                        <p className="mb-1 text-white">Link</p>
                        <a
                            target={"_blank"}
                            rel="noreferrer noopener"
                            href={detail.link}
                        >
                            {detail.link}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
