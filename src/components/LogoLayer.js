import './LogoLayer.css';
import React from 'react';
import logo1 from '../assets/logo/aesop.png';
import logo2 from '../assets/logo/apparel.png';
import logo3 from '../assets/logo/aveeno.png';
import logo4 from '../assets/logo/jo-malone.png';
import logo5 from '../assets/logo/kerastase.png';
import logo6 from '../assets/logo/pascal.png';
import testImg from '../assets/banner1.png';

const logos = {
    1: logo1,
    2: logo2,
    3: logo3,
    4: logo4,
    5: logo5,
    6: logo6
};

function LogoLayer(){
    return(
        <div id="logo-wrapper">
                {Object.keys(logos).map((number) =>
                    <div style={{backgroundImage: `url(${logos[number]})`}} className="eachLogo"></div>
                )}
            
        </div>
    )
}

export default LogoLayer;