import './MakeupItems.css';
import React, {useState, useEffect } from 'react';
import empty_heart from '../assets/heart-images/empty_heart.png';
import black_red_heart from '../assets/heart-images/black_red_heart.png';
import fully_red from '../assets/heart-images/fully_red.png';

function MakeupItems(){
    const [heartType, setHeartType] = useState(empty_heart);

    function makeHeartRed(){
        setHeartType(black_red_heart);
    }
    function makeHeartTrans(){
        setHeartType(empty_heart);
    }
    function makeHeartFullyRed(){
        setHeartType(fully_red);
    }
    
    return(
        <div id="makeup-container">
            <div onMouseEnter={makeHeartRed} onMouseLeave={makeHeartTrans} className='eachItemContainer'>
                <img onMouseEnter={makeHeartFullyRed} onMouseLeave={makeHeartRed} src={heartType} alt="a heart like button" className='heartContainer' />
                <button className='buttons'>Add to Bag</button>
            </div>
        </div>
    );
}

export default MakeupItems;