import React from "react";
import { FaReact, FaLaravel, FaPhp } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import ProfileImg from "../components/ProfileImg";
import porto from "./../data/porto.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row ">
                <div className="w-full  md:w-8/12 ">
                    <div className="pt-20 px-10  h-full ">
                        <p className="mb-3">Hi, I'm Fahmi Ichwanurrohman</p>
                        <p className="mb-3">
                            lorem lorem lorem loremlorem loremlorem loremlorem
                            lorem lorem lorem lorem lorem lorem lorem lorem
                            lorem lorem lorem lorem lorem lorem lorem lorem
                            lorem lorem lorem lorem
                        </p>
                        <button className="border-dashed hover:border-solid border px-3 py-2 mr-2">
                            Learn About Me
                        </button>
                        <button className="border-dashed hover:border-solid border px-3 py-2">
                            resume
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-4/12 p-2 flex md:flex-none justify-center  ">
                    <ProfileImg />
                </div>
            </div>
            <div className="boder px-10 p-3 md:mb-5">
                Current Favorite Tech Stacks
                <div className="flex">
                    <FaLaravel className="text-6xl mr-3" />
                    <FaReact className="text-6xl mr-3" />
                    <FaPhp className="text-6xl mr-3" />
                    <IoLogoJavascript className="text-6xl mr-3" />
                </div>
            </div>
            <div className="boder px-10">
                Portfolio
                <div className="flex justify-center">
                    <div className="pb-10 w-2/3">
                        <Slider {...settings}>
                            {porto.data.map((d, i) => {
                                return (
                                    <SlickCard
                                        title={d.title}
                                        primaryImg={d.primaryImg}
                                        key={i}
                                    />
                                );
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    );
};

const SlickCard = ({ title, primaryImg }) => {
    return (
        <div className="border mx-3 ">
            <div className=" ">
                <img src={primaryImg} alt="" />
            </div>
            <div className="py-5 px-2 flex justify-between ">
                <p>{title}</p>
                <button className="border p-2 text-white">See Detail</button>
            </div>
        </div>
    );
};

export default Home;
