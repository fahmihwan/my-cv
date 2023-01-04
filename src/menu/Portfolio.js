import React, { memo, useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import porto from "./../data/porto.json";
import { useSelector } from "react-redux";

const Portfolio = () => {
    return (
        <div className="px-10 pt-5 pb-52 ">
            <div className="mb-5  px-2 lg:flex justify-between items-center dark:bg-elFancy ">
                <div className="mb-3 lg:mb-0 dark:text-purple-500">
                    <p className="text-4xl mb-3">Portfolio</p>
                    <p className=" text-xs md:text-base ">
                        This is my previous works, personal (experiments), and
                        freelance (if it's public) project list.
                    </p>
                </div>
                <span className=" dark:text-white text-black rounded font-bold">
                    {porto.data.length} items
                </span>
            </div>
            <div className="grid grid:col-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {porto.data.map((d, i) => {
                    return <Card data={d} increment={i + 1} key={i} />;
                })}
            </div>
        </div>
    );
};

export default memo(Portfolio);

const Card = ({ data, increment }) => {
    const [detail, setDetail] = useState(null);
    const theme = useSelector((state) => state.theme.value);

    const navigate = useNavigate();

    const handleDetail = (dataDetail) => {
        setDetail(dataDetail);
    };

    const [size, setSize] = useState(0);

    useLayoutEffect(() => {
        function updateSize() {
            setSize(window.innerWidth);
        }
        window.addEventListener("resize", updateSize);
        updateSize();

        return () => window.removeEventListener("resize", updateSize);
    }, [size]);

    if (detail !== null) {
        navigate(`/portfolio/${data.slug}`, {
            replace: true,
            state: detail,
            title: data.title,
        });
    }

    return (
        <div
            data-aos="zoom-in"
            data-aos-offset="0"
            data-aos-delay={size > 650 ? 50 * increment : 200}
            className="relative group md:h-72"
        >
            <div
                className={
                    theme === "dark"
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
