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
            userIconPop: 'hidden',
            windowShow: 0
        }
        this.handleInput = this.handleInput.bind(this);
        this.userIconEnter = this.userIconEnter.bind(this);
        this.userIconLeave = this.userIconLeave.bind(this);
        this.hideWindow = this.hideWindow.bind(this);
        this.showWindow1 = this.showWindow1.bind(this);
        this.showWindow2 = this.showWindow2.bind(this);
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
    hideWindow(){
        this.setState({
            windowShow: 0
        })
    }
    showWindow1(){
        this.setState({
            windowShow: 1
        });
    }
    showWindow2(){
        this.setState({
            windowShow: 2
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
                <div onMouseLeave={this.hideWindow} className='bottomNavBar'>
                    <ul className='nav-buttons'>
                        <li onMouseEnter={this.showWindow1}>Black Friday</li>
                        <li onMouseEnter={this.showWindow2}>Christmas</li>
                        <li onMouseEnter={this.showWindow1}>Brands</li>
                        <li onMouseEnter={this.showWindow2}>Make up</li>
                        <li onMouseEnter={this.showWindow1}>Skincare</li>
                        <li onMouseEnter={this.showWindow2}>Hair</li>
                        <li onMouseEnter={this.showWindow1}>Fragnance</li>
                        <li onMouseEnter={this.showWindow2}>Body</li>
                        <li onMouseEnter={this.showWindow1}>Lifestyle</li>
                        <li onMouseEnter={this.showWindow2}>New</li>
                    </ul>
                    {this.state.windowShow == 1 ? <div>Will show window 1</div> : this.state.windowShow == 2 ? <div>Will show window 2</div> : <div>This would hide a window</div>}
                </div>
            </div>
        </div>
    )
    }
}

export default NavBar;