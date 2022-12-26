import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useEffect, useRef, useState } from "react";

// import porto from "./../data/porto.json";

const Detail = () => {
    let { detail, primaryImg } = useLocation().state;

    const [showImg, setShowImg] = useState(primaryImg.slice(1));

    let dataImg = [];
    for (let i = 1; i <= detail.totalImg; i++) {
        let dir = `${detail.dir + i}.png`;
        dataImg.push(dir);
    }

    let filterImg = [];
    for (let i = 0; i <= 3; i++) {
        filterImg.push(dataImg[i]);
    }

    const prev = (data) => {};
    const next = (data) => {
        // const endIndex = filterImg.findIndex((element) => element === data) + 1;
        // const startIndex = endIndex - 3;
        // for (let i = startIndex; i <= endIndex; i++) {
        //     let filterImg = [];
        //     for (let i = 0; i <= 3; i++) {
        //         filterImg.push(dataImg[i]);
        //     }
        // }
    };

    return (
        <div className="px-10 pt-5 pb-52">
            <div className="mb-5 dark:bg-elFancy dark:text-textFancy">
                <p className="text-4xl">Detail Portfolio</p>
                <p className=" text-2xl">Outlaws Studio</p>
            </div>
            <div className="flex">
                <div className="bg-gray-600 rounded border">
                    <div className="py-3 px-2 flex">
                        <div className="bg-red-400 w-2 h-2 rounded-full mr-1"></div>
                        <div className="bg-yellow-400 w-2 h-2 rounded-full mr-1"></div>
                        <div className="bg-green-400 w-2 h-2 rounded-full mr-1"></div>
                    </div>
                    <img src="" alt="" />
                </div>
            </div>

            <div className="mt-5   py-10">
                <div className="w-full mb-5">
                    <img src={showImg} alt="" />
                </div>
                <div className="flex">
                    <button onClick={() => prev(filterImg[0])}>prev</button>
                    {filterImg.map((d, i) => {
                        return (
                            <div key={i} className="w-20 mr-2">
                                <img src={d} alt="" />
                            </div>
                        );
                    })}
                    <button onClick={() => next(filterImg[3])}>next</button>
                </div>
            </div>
        </div>
    );
};

export default Detail;

// const SliderEl = ({ dataImg }) => {
//     const slider1 = useRef(null);
//     const slider2 = useRef(null);
//     const [nav, setNav] = useState({
//         nav1: null,
//         nav2: null,
//     });
//     useEffect(() => {
//         setNav({
//             nav1: slider1.current,
//             nav2: slider2.current,
//         });
//     }, []);
//     const settings1 = {
//         asNavFor: nav.nav2,
//         ref: slider1,
//         fade: true,
//     };

//     const settings2 = {
//         asNavFor: nav.nav1,
//         ref: slider2,
//         slidesToShow: 3,
//         swipeToSlide: true,
//         focusOnSelect: true,
//         infinite: true,
//         slidesToScroll: 1,
//         dots: true,
//     };
//     return (
//         <>
//             <h2> Single Item</h2>
//             <div className="mb-5">
//                 <Slider {...settings1}>
//                     {dataImg.map((data, i) => {
//                         return (
//                             <img
//                                 key={i}
//                                 className="mr-4 w-44 border border-white cursor-pointer"
//                                 src={data}
//                                 alt=""
//                             />
//                         );
//                     })}
//                 </Slider>
//             </div>

//             <Slider {...settings2}>
//                 {dataImg.map((data, i) => {
//                     return (
//                         <div key={i}>
//                             <img
//                                 className=" w-28  border border-white cursor-pointer"
//                                 src={data}
//                                 alt=""
//                             />
//                         </div>
//                     );
//                 })}
//             </Slider>
//         </>
//     );
// };
