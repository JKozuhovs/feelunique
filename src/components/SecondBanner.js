import './SecondBanner.css';
import React, {useState} from 'react';


function SecondBanner(){
    const [state, setState] = useState(0);
    return(
        <div id='second-banner-wrapper'>
            <div id='banner2-1' className='secondBanners'></div>
            <div id='banner2-2' className='secondBanners'></div>
        </div>
    );
}

export default SecondBanner;