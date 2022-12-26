import { useLocation } from "react-router-dom";

import React, { useEffect, useRef, useState } from "react";

const Detail = () => {
    let { detail, primaryImg } = useLocation().state;

    const [showImg, setShowImg] = useState(primaryImg.slice(1));

    let dataImg = [];
    for (let i = 1; i <= detail.totalImg; i++) {
        let dir = `${detail.dir + i}.png`;
        dataImg.push(dir);
    }

    const lengthImgIsExist = dataImg.length <= 4 ? true : false;
    const [hiddenPrev, setHiddenPrev] = useState(true);
    const [hiddenNext, setHiddenNext] = useState(lengthImgIsExist);

    const valState = {
        start: 0,
        end: !lengthImgIsExist ? 3 : dataImg.length,
    };

    const [stateIndex, setStateIndex] = useState(valState);

    const filterImg = dataImg.filter((e) => {
        return (
            stateIndex.start <= dataImg.indexOf(e) &&
            stateIndex.end >= dataImg.indexOf(e)
        );
    });

    const btnPrev = useRef(false);

    const prev = () => {
        if (stateIndex.start + 4 <= 4) {
            setHiddenPrev(true);
        } else {
            setStateIndex({
                start: stateIndex.start - 1,
                end: stateIndex.end - 1,
            });
            setHiddenNext(false);
        }
    };

    const btnNext = useRef(false);

    const next = () => {
        if (stateIndex.start === dataImg.length - 4) {
            setHiddenNext(true);
        } else {
            setStateIndex({
                start: stateIndex.start + 1,
                end: stateIndex.end + 1,
            });
            setHiddenPrev(false);
        }
    };

    useEffect(() => {
        if (hiddenNext) {
            btnNext.current.classList.add("hidden");
        } else {
            btnNext.current.classList.remove("hidden");
        }
        if (hiddenPrev) {
            btnPrev.current.classList.add("hidden");
        } else {
            btnPrev.current.classList.remove("hidden");
        }
    }, [hiddenNext, hiddenPrev]);

    const handleHover = (src) => {
        setShowImg(src);
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
                <div className="flex">
                    <button onClick={prev} ref={btnPrev}>
                        prev
                    </button>
                    {filterImg.map((d, i) => {
                        return (
                            <div
                                key={i}
                                onMouseOver={() => handleHover(d)}
                                className="w-20 mr-2 flex items-center cursor-pointer"
                            >
                                <img src={d} alt="" />
                            </div>
                        );
                    })}
                    <button onClick={next} ref={btnNext}>
                        next
                    </button>
                </div>
                <div className="w-full mt-5">
                    <img src={showImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Detail;
