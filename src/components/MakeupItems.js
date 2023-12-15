import './MakeupItems.css';
import React, {useState, useEffect } from 'react';
import empty_heart from '../assets/heart-images/empty_heart.png';
import black_red_heart from '../assets/heart-images/black_red_heart.png';
import fully_red from '../assets/heart-images/fully_red.png';
import item0 from '../assets/makeup_items/item0.PNG';
import item1 from '../assets/makeup_items/item1.PNG';
import item2 from '../assets/makeup_items/item2.PNG';
import item3 from '../assets/makeup_items/item3.PNG';
import item4 from '../assets/makeup_items/item4.PNG';
import item5 from '../assets/makeup_items/item5.PNG';
import item6 from '../assets/makeup_items/item6.PNG';
import item7 from '../assets/makeup_items/item7.PNG';
import item8 from '../assets/makeup_items/item8.PNG';
import item9 from '../assets/makeup_items/item9.PNG';
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

const items = [
    { id: '0', source: item0, price: "13.76", name: "INGLOT AMC Eyerliner Gel 5.5g", heartState: 'empty_heart' },
    { id: '1', source: item1, price: "15.20", name: "L'Oréal Paris Matte Lipstick", heartState: 'empty_heart' },
    { id: '2', source: item2, price: "9.99", name: "Revlon ColorStay Foundation", heartState: 'empty_heart' },
    { id: '3', source: item3, price: "12.50", name: "Maybelline Sky High Mascara", heartState: 'empty_heart' },
    { id: '4', source: item4, price: "7.30", name: "NYX Professional Eyeshadow Palette", heartState: 'empty_heart' },
    { id: '5', source: item5, price: "18.40", name: "Estée Lauder Double Wear Concealer", heartState: 'empty_heart' },
    { id: '6', source: item6, price: "20.00", name: "Fenty Beauty Pro Filt'r Primer", heartState: 'empty_heart' },
    { id: '7', source: item7, price: "10.99", name: "Urban Decay Setting Spray", heartState: 'empty_heart' },
    { id: '8', source: item8, price: "16.75", name: "Huda Beauty Liquid Matte Lipstick", heartState: 'empty_heart' },
    { id: '9', source: item9, price: "21.99", name: "NARS Radiant Creamy Concealer", heartState: 'empty_heart' }
];

const items1 = shuffleArray(items);
const items2 = shuffleArray(items);
const items3 = shuffleArray(items);

console.log("this is a first random array: " + items1[0].price);

const items = [
    { id: '0', source: item0, price: "13.76", name: "INGLOT AMC Eyerliner Gel 5.5g", heartState: 'empty_heart' },
    { id: '1', source: item1, price: "15.20", name: "L'Oréal Paris Matte Lipstick", heartState: 'empty_heart' },
    { id: '2', source: item2, price: "9.99", name: "Revlon ColorStay Foundation", heartState: 'empty_heart' },
    { id: '3', source: item3, price: "12.50", name: "Maybelline Sky High Mascara", heartState: 'empty_heart' },
    { id: '4', source: item4, price: "7.30", name: "NYX Professional Eyeshadow Palette", heartState: 'empty_heart' },
    { id: '5', source: item5, price: "18.40", name: "Estée Lauder Double Wear Concealer", heartState: 'empty_heart' },
    { id: '6', source: item6, price: "20.00", name: "Fenty Beauty Pro Filt'r Primer", heartState: 'empty_heart' },
    { id: '7', source: item7, price: "10.99", name: "Urban Decay Setting Spray", heartState: 'empty_heart' },
    { id: '8', source: item8, price: "16.75", name: "Huda Beauty Liquid Matte Lipstick", heartState: 'empty_heart' },
    { id: '9', source: item9, price: "21.99", name: "NARS Radiant Creamy Concealer", heartState: 'empty_heart' }
];

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
            {items.map((item, index) => 
                <div onMouseEnter={makeHeartRed} onMouseLeave={makeHeartTrans} className='eachItemContainer'>
                    <img className='itemImage' src={item.source} />
                    
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