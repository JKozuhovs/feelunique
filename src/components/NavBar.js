import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(event){
        this.setState({
            search: event.target.value
        });
    }

    render(){
    return(
        <div className='NavBar'>
            <div className='topAndBot'>
                <div className='topNavBar'>
                    <div className='firstSegment'>
                        <div>
                            <img alt='uk flag' src='./src/assets/ukflag.svg'></img>
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
                        <FontAwesomeIcon className='icon' icon={faUser} />
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