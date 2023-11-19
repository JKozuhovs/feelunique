import React from 'react';
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
const NavBar = () => {
    return(
        <div className='NavBar'>
            <div className='topAndBot'>
                <div className='topNavBar'>
                    <div className='firstSegment'></div>
                    <div className='secondSegment'></div>
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

export default NavBar;