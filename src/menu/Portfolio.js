import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import porto from "./../data/porto.json";

const Portfolio = () => {
    return (
        <div className="px-10 pt-5 pb-52">
            <div className="mb-5 dark:bg-elFancy dark:text-textFancy">
                <p className="text-4xl">Portfolio</p>
                <p className="animate__bounce">
                    This is my previous works, personal (experiments), and
                    freelance (if it's public) project list.
                </p>
            </div>
            <div className="grid grid:col-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {porto.data.map((d, i) => {
                    return <Card data={d} key={i} />;
                })}
            </div>
        </div>
    );
};

export default Portfolio;

const Card = ({ data }) => {
    const [detail, setDetail] = useState(null);
    const navigate = useNavigate();

    const CardEl = styled.div`
        border-width: 2px;
        border-style: solid;
        border-image: linear-gradient(to bottom, #a50daf, #35d2c2) 1;

        :hover {
            animation: ${rotate} 0.6s linear infinite;
            border-width: 10px;
        }

        /* :hover button {
            animation: ${animateButton} 2s linear infinite;
        } */

        transition: 0.2s;
    `;

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
            <CardEl>
                <div className=" ">
                    <LazyLoadImage
                        className=" bg-purple-600 img-lazy"
                        src={data.primaryImg}
                        alt="Image Alt"
                    />
                </div>
                <div className="h-16 px-2 items-center flex justify-between ">
                    <span className="text-xs bg-badgeFancy px-2  rounded-full text-white">
                        {data.title}
                    </span>

                    <button
                        onClick={() => handleDetail(data, data.title)}
                        className="p-2  animate-none group-hover:animate-bounce bg-purple-900 text-white  text-xs"
                    >
                        See Detail
                    </button>
                </div>
            </CardEl>
        </div>
    );
};

// animation
const rotate = keyframes`
0%   {border-image: linear-gradient(to right, #a50daf, #35d2c2) 1}
25%  {border-image: linear-gradient(to top, #a50daf, #35d2c2) 1}
50%  {border-image: linear-gradient(to left, #a50daf, #35d2c2) 1}
`;

const animateButton = keyframes`
0%,
100% {
    transform: translateX(0%);
    transform-origin: 50% 50%;
}

15% {
    transform: translateX(-5px) rotate(-3deg);
}

30% {
    transform: translateX(5px) rotate(3deg);
}

45% {
    transform: translateX(-5px) rotate(-3.6deg);
}

60% {
    transform: translateX(5px) rotate(2.4deg);
}

75% {
    transform: translateX(-6px) rotate(-1.2deg);
}`;
