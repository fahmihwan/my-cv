import React from "react";

const ProfileImg = ({ darkMode }) => {
    return (
        <>
            <div
                className={
                    darkMode === "dark"
                        ? "profilImgDark"
                        : "profilImgLight bg-lightBlue"
                }
            >
                <img
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    className="w-60"
                    alt="Lightning"
                    src="/foto-profile/fahmi.png"
                />
            </div>
        </>
    );
};

export default ProfileImg;
