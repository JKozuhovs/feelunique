import './MakeupItems.css';
import React, {useState, useEffect } from 'react';
import empty_heart from '../assets/heart-images/empty_heart.png';
import black_red_heart from '../assets/heart-images/black_red_heart.png';
import fully_red from '../assets/heart-images/fully_red.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}



 //const items1 = shuffleArray([...items]);
// const items2 = shuffleArray(items);
// const items3 = shuffleArray(items);


const itemRatings = [];
for(let i=0; i < 10; i++){
    itemRatings.push({rating:Math.floor((Math.random() * (5 - 1 + 1))), amountVotes: Math.floor((Math.random()*(2000-1+1)))});
}

const OneStarRating = () => 
<div className='testDiv'>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={farStar} />
    <FontAwesomeIcon icon={farStar} />
    <FontAwesomeIcon icon={farStar} />
    <FontAwesomeIcon icon={farStar} />
</div>;

const TwoStarRating = () => 
<div className='testDiv'>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={farStar} />
    <FontAwesomeIcon icon={farStar} />
    <FontAwesomeIcon icon={farStar} />
</div>;

const ThreeStarRating = () => 
<div className='testDiv'>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={farStar} />
    <FontAwesomeIcon icon={farStar} />
</div>;

const FourStarRating = () => 
<div className='testDiv'>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={farStar} />
</div>;

const FiveStarRating = () => 
<div className='testDiv'>
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
    <FontAwesomeIcon icon={faStar} />
</div>;

function MakeupItems({arrays}){
    console.log("testing " + arrays);
    // const [currentArray, setCurrentArray] = useState(items1);
 
    // if(arrays == 1){
    //     setCurrentArray(items1);
    //     console.log("equal to 1");
    // }
    // else if(arrays == 2){
    //     setCurrentArray(items2);
    //     console.log("equal to 2");
    // }
    // else if(arrays == 3){
    //     setCurrentArray(items3);
    //     console.log("equal to 3");
    // }
    // let currentArray = items1;
    // if(arrays == 1){
    //     let currentArray = items1;
    // }
    // else if(arrays == 2){
    //     let currentArray = items2;
        
    // }

    // console.log("currentArray: " + currentArray);
    // console.log("items1: " + items1)
   
    
    const [heartType, setHeartType] = useState(empty_heart);
        console.log("testing an array transfer: " + {arrays});

    console.log("ratings: " + itemRatings[9].amountVotes);
    function makeHeartRed(e){
        console.log(e);
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
            {arrays.map((item, index) => 
                <div onMouseEnter={makeHeartRed} onMouseLeave={makeHeartTrans} className='eachItemContainer'>
                    <img className='itemImage' alt="item" src={item.source} />
                    {/* <img id={"heart"+item.id} onMouseEnter={makeHeartFullyRed} onMouseLeave={makeHeartRed} src={heartType} alt="a heart like button" className='heartContainer' /> */}
                    <div className='heartContainer'></div>
                    <div className='itemInfo'>
                        <div className='itemNames'>{item.name}</div>
                        <div className='starsVotesContainer'>
                            <div className='starsContainer'>                           
                                {itemRatings[index].rating == 1 ? <OneStarRating /> : itemRatings[index].rating == '2' ? <TwoStarRating /> : itemRatings[index].rating === 3 ? <ThreeStarRating /> : itemRatings[index].rating == 4 ? <FourStarRating /> : <FiveStarRating />}
                            </div>
                            <div className='votesContainer'>
                                {itemRatings[index].amountVotes}
                            </div>
                        </div>
                        <div className='priceDiv'>€{item.price}</div>
                       
                    </div>
                        <button className='buttons'>Add to Bag</button>
                </div>             
            )}
        </div>
    );
}

export default MakeupItems;