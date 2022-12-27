import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import porto from "./../data/porto.json";
const Portfolio = () => {
    return (
        <div className="px-10 pt-5 pb-52">
            <div className="mb-5 dark:bg-elFancy dark:text-textFancy">
                <p className="text-4xl">Portfolio</p>
                <p className="text-xs">
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

    const rotate = keyframes`
  0%   {border-image: linear-gradient(to right, #a50daf, #35d2c2) 1}
  25%  {border-image: linear-gradient(to top, #a50daf, #35d2c2) 1}
  50%  {border-image: linear-gradient(to left, #a50daf, #35d2c2) 1}
  /* 100% {border-image: linear-gradient(to left, #a50daf, #35d2c2) 1} */

`;
    const CardEl = styled.div`
        border-width: 2px;
        border-style: solid;
        border-image: linear-gradient(to bottom, #a50daf, #35d2c2) 1;
        :hover {
            animation: ${rotate} 0.6s linear infinite;
            border-width: 10px;
        }
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
        <div className="relative md:h-72">
            <CardEl>
                <div className="border ">
                    <img src={data.primaryImg} alt="" />
                </div>
                <div className="py-5 px-2 flex justify-between ">
                    <p>{data.title}</p>
                    <button
                        onClick={() => handleDetail(data, data.title)}
                        className="border p-2 text-white"
                    >
                        See Detail
                    </button>
                </div>
            </CardEl>
        </div>
    );
};
