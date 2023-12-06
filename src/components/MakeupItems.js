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



function MakeupItems(){
    const [heartType, setHeartType] = useState(empty_heart);


    const items = [
        {id: '1',
         source: item0,
         price: "13.76",
         name: "INGLOT AMC Eyerliner Gel 5.5g"
        },
        {id: '2',
         source: item1,
         price: "77.52",
         name: "Tom Ford Eye Color Quad 6g"
        }
    ]

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
            {items.map((item) => 
                <div onMouseEnter={makeHeartRed} onMouseLeave={makeHeartTrans} className='eachItemContainer'>
                    
                    <img src={item.source} />
                    <img onMouseEnter={makeHeartFullyRed} onMouseLeave={makeHeartRed} src={heartType} alt="a heart like button" className='heartContainer' />
                    <button className='buttons'>Add to Bag</button>
                </div>             
            )}
        </div>
    );
}

export default MakeupItems;