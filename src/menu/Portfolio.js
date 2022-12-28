import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import porto from "./../data/porto.json";

const Portfolio = ({ darkMode }) => {
    return (
        <div className="px-10 pt-5 pb-52">
            <div className="mb-5 dark:bg-elFancy dark:text-textFancy">
                <p className="text-4xl">Portfolio</p>
                <p className="animate__bounce text-sm md:text-base">
                    This is my previous works, personal (experiments), and
                    freelance (if it's public) project list.
                </p>
            </div>
            <div className="grid grid:col-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {porto.data.map((d, i) => {
                    return <Card darkMode={darkMode} data={d} key={i} />;
                })}
            </div>
        </div>
    );
};

export default Portfolio;

const Card = ({ darkMode, data }) => {
    const [detail, setDetail] = useState(null);
    const navigate = useNavigate();

    const handleDetail = (dataDetail, title) => {
        setDetail(dataDetail);
    };

    if (detail !== null) {
        navigate(`/portfolio/${data.slug}`, {
            replace: true,
            state: detail,
            title: data.title,
        });
    }

    return (
        <div className="relative group md:h-72  ">
            {/* <div className="listPortoDark"> */}
            <div
                className={
                    darkMode === "dark"
                        ? "listPortoDark"
                        : "listPortoLight overflow-hidden rounded-lg"
                }
            >
                <div>
                    <LazyLoadImage
                        className=" bg-purple-600 img-lazy"
                        src={data.primaryImg}
                        alt="Image Alt"
                    />
                </div>
                <div className="h-16 px-2 items-center flex justify-between ">
                    <span className="text-xs dark:bg-badgeFancy px-2  rounded-full text-white">
                        {data.title}
                    </span>

                    <button
                        onClick={() => handleDetail(data, data.title)}
                        className="p-2  animate-none group-hover:animate-bounce dark:bg-purple-900 dark:text-white  text-xs"
                    >
                        See Detail
                    </button>
                </div>
            </div>
        </div>
    );
};

// animation
