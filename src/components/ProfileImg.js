import React from 'react'
import styled from 'styled-components';

const ProfileImg = () => {

    const ImageBackground = styled.div`
    border-radius:50% 50% 47% 53% / 74% 68% 32% 26%  ;
    background:red;
    height:250px;
    width:250px;
    position:relative;
    display: flex;
    align-items: center;
    background: rgb(255,255,255);
    background: linear-gradient(200deg, rgba(255,255,255,1) 0%, rgba(208,7,157,1) 0%, rgba(213,57,241,1) 38%, rgba(43,0,204,1) 98%);
  `;
    return (
        <>
            <ImageBackground>
                <img
                    className='w-60'
                    alt="Lightning"
                    src="/foto-profile/fahmi.png" />
            </ImageBackground>
        </>
    )
}

export default ProfileImg