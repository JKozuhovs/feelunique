import './SearchTab.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SearchTab(props){
    const closeWindow = () => {
        props.sendToParent(false);
    }
    return(
        <div className='searchTab'>
            <div className='searchTab-menu'>
                <div className='searchTab-close'>{<FontAwesomeIcon onClick={closeWindow} id='searchTab-close-button' icon="fa-solid fa-xmark" />}</div>
                <h3>POPULAR SEARCHES</h3>
                <ul>
                    <li>Rare Beauty</li>
                    <li>Charlotte Tilbury</li>
                    <li>Glow Recipe</li>
                    <li>DRUNK ELEPHANT</li>
                    <li>Makeup by Mario</li>
                    <li>The Ordinary</li>
                    <li>Laneige</li>
                    <li>Milk Makeup</li>
                    <li>e.l.f. Cosmetics</li>
                    <li>Bulldog Skincare For Men</li>
                    <li>NARS Cosmetics</li>
                    <li>TOO FACED</li>
                    <li>Benett</li>
                </ul>
            </div>
        </div>
    )
}

export default SearchTab;