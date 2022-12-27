import React from "react";
import styled from "styled-components";

const ProfileImg = () => {
    const ImageBackground = styled.div`
        border-radius: 75% 25% 75% 25% / 32% 82% 18% 68%;
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
            rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
            rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
            rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
            rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
            rgba(0, 0, 0, 0.09) 0px 32px 16px;
        height: 250px;
        width: 250px;
        position: relative;
        display: flex;
        align-items: center;
        background: rgb(255, 255, 255);
        background: linear-gradient(
            200deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(208, 7, 157, 1) 0%,
            rgba(213, 57, 241, 1) 38%,
            rgba(43, 0, 204, 1) 98%
        );
    `;
    return (
        <>
            <ImageBackground>
                <img
                    className="w-60"
                    alt="Lightning"
                    src="/foto-profile/fahmi.png"
                />
            </ImageBackground>
        </>
    );
};

export default ProfileImg;
