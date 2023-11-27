import './ThirdBanner.css';
import React from 'react';
import banner1 from '../assets/ThirdBanner1.png';
import banner2 from '../assets/ThirdBanner2.png';
import banner3 from '../assets/ThirdBanner3.png';
import banner4 from '../assets/ThirdBanner4.png';
import banner5 from '../assets/ThirdBanner5.png';
import banner6 from '../assets/ThirdBanner6.png';

const banners = {
    1: banner1,
    2: banner2,
    3: banner3,
    4: banner4,
    5: banner5,
    6: banner6
}

function ThirdBanner(){
    return(
        <>
            <div id="thirdBannerWrapper">
                {banners.map((number)=>(
                    <div style={{backgroundImage: `url(${banners[number]})`}} className={`thirdBannerSection thirdBanner${number}`}></div>
                ))}
               
            </div>
        </>
    );
}

export default ThirdBanner;
