import './BestSellers.css';
import React, {useState, useEffect} from 'react';
import MakeupItems from './MakeupItems';
import SkinItems from './SkinItems';
import FragnanceItems from './FragnanceItems';


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
            {tabPressed == '1' ? <MakeupItems pressed={tabPressed} /> : tabPressed == '2' ? <MakeupItems pressed={tabPressed} /> : <MakeupItems pressed={tabPressed} />}
        </div>
    )
}

export default BestSellers;