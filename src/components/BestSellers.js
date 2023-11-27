import './BestSellers.css';
import React from 'react';

function BestSellers(){
    return(
        <div id="best-seller-wrapper">
            <h2>Best SELLERS</h2>
            <div id="buttons-wrapper">
                <button id="makeupButton" className='button'>Makeup</button>
                <button id="skinButton" className='button'>Skin</button>
                <button id="fragnanceButton" className='button'>Fragnance</button>
            </div>
        </div>
    )
}

export default BestSellers;