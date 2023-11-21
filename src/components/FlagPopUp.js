import React from 'react';
import './FlagPopUp.css';
import ukFlag from '../assets/ukflag.svg'

class FlagPopUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visibility: 'hidden'
        }
    }
    render(){
        return(
            <div id="main-container">
                <div id="header">Change your <br /> delivery location</div>
                <div id="country-pick-container">
                    <label>Your delivery country is</label>
                    <select id="country-select">
                        <option value="country1">Latvia</option>
                        <option value="country2">Estonia</option>
                        <option value="country3">Lithuania</option>
                    </select>
                </div>

                <div id="currency-pick-container">
                    <label>Your currency is</label>
                    <select id="country-select">
                        <option value="currency1">Euro</option>
                        <option value="currency2">Dollars</option>
                        <option value="currency3">Yan</option>
                    </select>
                </div>
                <button id="update-button">Update</button>
                <div id="dedicated-div">Dedicated country site, just as you left it</div>
                <div id="flag-container">
                    <div className='flag-wrapper'>
                        <img className="flag" alt='uk flag' src={ukFlag}></img>
                        <div className='country-name'>Jersey</div>
                    </div>
                    <div className='flag-wrapper'>
                        <img className="flag" alt='uk flag' src={ukFlag}></img>
                        <div className='country-name'>Guernsey</div>
                    </div>
                    <div className='flag-wrapper'>
                        <img className="flag" alt='uk flag' src={ukFlag}></img>
                        <div className='country-name'>Chinese</div>
                    </div>
                    <div className='flag-wrapper'>
                        <img className="flag" alt='uk flag' src={ukFlag}></img>
                        <div className='country-name'>EU</div>
                    </div>
                    <div className='flag-wrapper'>
                        <img className="flag" alt='uk flag' src={ukFlag}></img>
                        <div className='country-name'>USA</div>
                    </div>
                    <div className='flag-wrapper'>
                        <img className="flag" alt='uk flag' src={ukFlag}></img>
                        <div className='country-name'>Intern</div>
                    </div>
                    <div className='flag-wrapper'>
                        <img className="flag" alt='uk flag' src={ukFlag}></img>
                        <div className='country-name'>GCC</div>
                    </div>
                    <div className='flag-wrapper'>
                        <img className="flag" alt='uk flag' src={ukFlag}></img>
                        <div className='country-name'>Ireland</div>
                    </div>
                    
                </div>
            </div>
        )};
}

export default FlagPopUp;