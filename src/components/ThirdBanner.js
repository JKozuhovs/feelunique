import './ThirdBanner.css';
import React from 'react';

const banners = [1,2,3,4,5,6];

function ThirdBanner(){
    return(
        <>
            <div id="thirdBannerWrapper">
                {banners.map((number)=>(
                    <div style={{backgroundImage: `url(../assets/ThirdBanner${number}.png)`}} className={`thirdBannerSection thirdBanner${number}`}></div>
                ))}
               
            </div>
        </>
    );
}

export default ThirdBanner;
