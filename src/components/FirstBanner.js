import './FirstBanner.css';
import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';

let clickAllowed = true;

function FirstBanner(){
    const [banner, setBanner] = useState(true);
    
    function changeBanner(){
        if(clickAllowed){
            setBanner(!banner);
        }

        clickAllowed = false;
        setTimeout(()=>{
            clickAllowed = true;
        }, 700);
    }

   const backgroundImage = banner ? `url(${banner1})` : `url(${banner2})`;

    return(
        <div id='main-container' style={{backgroundImage: backgroundImage}}>
            <button id='left-button' onClick={changeBanner}><FontAwesomeIcon id='left-icon' icon={faChevronLeft} /></button>
            <button id='right-button' onClick={changeBanner}><FontAwesomeIcon id='right-icon' icon={faChevronRight} /></button>
        </div>
    );
}

export default FirstBanner;