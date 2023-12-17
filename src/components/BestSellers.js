import './BestSellers.css';
import React, {useState, useEffect} from 'react';
import MakeupItems from './MakeupItems';
import SkinItems from './SkinItems';
import FragnanceItems from './FragnanceItems';
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

const itemsSecond = [
    { id: '0', source: item9, price: "13.76", name: "INGLOT AMC Eyerliner Gel 5.5g", heartState: 'empty_heart' },
    { id: '1', source: item2, price: "15.20", name: "L'Oréal Paris Matte Lipstick", heartState: 'empty_heart' },
    { id: '2', source: item1, price: "9.99", name: "Revlon ColorStay Foundation", heartState: 'empty_heart' },
    { id: '3', source: item3, price: "12.50", name: "Maybelline Sky High Mascara", heartState: 'empty_heart' },
    { id: '4', source: item6, price: "7.30", name: "NYX Professional Eyeshadow Palette", heartState: 'empty_heart' },
    { id: '5', source: item5, price: "18.40", name: "Estée Lauder Double Wear Concealer", heartState: 'empty_heart' },
    { id: '6', source: item4, price: "20.00", name: "Fenty Beauty Pro Filt'r Primer", heartState: 'empty_heart' },
    { id: '7', source: item7, price: "10.99", name: "Urban Decay Setting Spray", heartState: 'empty_heart' },
    { id: '8', source: item8, price: "16.75", name: "Huda Beauty Liquid Matte Lipstick", heartState: 'empty_heart' },
    { id: '9', source: item0, price: "21.99", name: "NARS Radiant Creamy Concealer", heartState: 'empty_heart' }
];

const itemsThird = [
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

function BestSellers(){
    const [tabPressed, setTabPressed] = useState('1');
    const [pressed1, setPressed1] = useState("rgb(40, 40, 40)");
    const [pressed2, setPressed2] = useState("rgb(220, 220, 220)");
    const [pressed3, setPressed3] = useState("rgb(220, 220, 220)");
    const [textColor1, setTextColor1] = useState("white");
    const [textColor2, setTextColor2] = useState("black");
    const [textColor3, setTextColor3] = useState("black");
    function buttonClicked(button){
        if(button===1){
            setTabPressed('1');
            setPressed1("rgb(40, 40, 40)");
            setPressed2("rgb(220, 220, 220)");
            setPressed3("rgb(220, 220, 220)");
            setTextColor1("white");
            setTextColor2("black");
            setTextColor3("black");
        }
        else if(button === 2){
            setTabPressed('2');
            setPressed1("rgb(220, 220, 220)");
            setPressed2("rgb(40, 40, 40)");
            setPressed3("rgb(220, 220, 220)");
            setTextColor1("black");
            setTextColor2("white");
            setTextColor3("black");      
        }
        else{
            setTabPressed('3');
            setPressed1("rgb(220, 220, 220)");
            setPressed2("rgb(220, 220, 220)");
            setPressed3("rgb(40, 40, 40)");
            setTextColor1("black");
            setTextColor2("black");  
            setTextColor3("white");
        }
    }
    return(
        <div id="best-seller-wrapper">
            <h2 style={{fontWeight: 'bold'}}>Best SELLERS</h2>
            <div id="buttons-wrapper">
                <button id="makeupButton" style={{backgroundColor: pressed1, color: textColor1}} onClick={() => buttonClicked(1)} className='button'>Makeup</button>
                <button id="skinButton" style={{backgroundColor: pressed2, color: textColor2}} onClick={() => buttonClicked(2)} className='button'>Skin</button>
                <button id="fragnanceButton" style={{backgroundColor: pressed3, color: textColor3}} onClick={() => buttonClicked(3)} className='button'>Fragnance</button>
            </div>
            {tabPressed == '1' ? <MakeupItems arrays={items} /> : tabPressed == '2' ? <MakeupItems arrays={itemsSecond} /> : <MakeupItems arrays={itemsThird} />}
        </div>
    )
}

export default BestSellers;