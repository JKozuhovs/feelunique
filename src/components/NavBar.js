import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import ukFlag from '../assets/ukflag.svg'
import FlagPopUp from './FlagPopUp'


class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            userIconPop: 'hidden'
        }
        this.handleInput = this.handleInput.bind(this);
        this.userIconEnter = this.userIconEnter.bind(this);
        this.userIconLeave = this.userIconLeave.bind(this);
    }
    handleInput(event){
        this.setState({
            search: event.target.value
        });
    }
    
    userIconEnter(){
        this.setState({
            userIconPop: 'visible'
        });
    }
    userIconLeave(){
        this.setState({
            userIconPop: 'hidden'
        });
    }

    render(){
    return(
        <div className='NavBar'>
            <div className='topAndBot'>
                <div className='topNavBar'>
                    <div className='firstSegment'>
                        <div id='flag-chevron'>
                            <img id="flag" alt='uk flag' src={ukFlag}></img>
                            <FontAwesomeIcon id='chevron' icon={faChevronRight} />
                        </div>                      
                        <div id="feelunique">FEEL<span style={{fontWeight: 'bold'}}>UNIQUE</span></div>
                    </div>
                    <div className='secondSegment'>
                        <div id='search-container'>
                            <FontAwesomeIcon id="search-icon" icon={faMagnifyingGlass} />
                            <input type="text" id="main-search-bar" placeholder='Search 50,000+ beauty products, 1500+ brands' value={this.state.search}  onChange={this.handleInput}></input>
                        </div>
                    </div>
                    <div className='thirdSegment'>
                        <div id="user-icon-container" onMouseEnter={this.userIconEnter} onMouseLeave={this.userIconLeave}>
                            <FontAwesomeIcon id="user-icon" className='icon' icon={faUser} />
                            {this.state.userIconPop == 'visible' && 
                                <div id="user-icon-popup">
                                <div>Account / Sign-in</div>
                                <hr id='user-icon-divider'></hr>
                                <div>Rewards</div>
                                <div>Refer a friend</div>
                                <div>Wish List</div>
                                <div>Contact Us</div>
                            </div>}
                        </div>
                        <FontAwesomeIcon className='icon' icon={faHeart} />
                        <FontAwesomeIcon className='icon' icon={faBasketShopping} />
                    </div>
                </div>
                <div className='bottomNavBar'>
                    <ul className='nav-buttons'>
                        <li>Black Friday</li>
                        <li>Christmas</li>
                        <li>Brands</li>
                        <li>Make up</li>
                        <li>Skincare</li>
                        <li>Hair</li>
                        <li>Fragnance</li>
                        <li>Body</li>
                        <li>Lifestyle</li>
                        <li>New</li>
                    </ul>
                </div>
            </div>
        </div>
    )
    }
}

export default NavBar;