import "./Window1.css";
import firstPicture from '../assets/navbar/firstPicture.png';
import secondPicture from '../assets/navbar/roxy.png';

function Window1(){
    return(
        <div className="window1-container">
            <div className="window1-menu">
                <div className="window1-gifts window1-menu-column">
                    <h3>CHRISTMAS GIFTS</h3>
                    <ul>
                        <li>Makeup Gifts</li>
                        <li>Fragrance Gifts</li>
                        <li>Bath and Body</li>
                        <li>Skincare Gifts</li>
                        <li>Haircare Gifts</li>
                        <li>Luxury Gifts</li>
                        <li>Mini Gifts</li>
                        <li>All Gifts</li>
                    </ul>
                    <h4>Advent calendars</h4>
                </div>
                <div className="window1-gifts-by-recipient window1-menu-column">
                    <h3>GIFTS BY RECIPIENT</h3>
                    <ul>
                        <li>Gifts For Her</li>
                        <li>Gifts For Him</li>
                    </ul>
                </div>
                <div className="window1-gifts-by-price window1-menu-column">
                <h3>GIFTS BY PRICE</h3>
                    <ul>
                        <li>$15 and Under</li>
                        <li>$25 and Under</li>
                        <li>$50 and Under</li>
                        <li>$100 and Under</li>                    
                    </ul>
                </div>
                <div className="window1-advent-calendars window1-menu-column">
                    <h3>ADVENT CALENDARS</h3>
                    <img alt="advent calendars" src={firstPicture}></img>
                    <p>Shop our 2023 Advent Calendars and start the season off with a beauty treat each day</p>
                </div>
                <div className="window1-gifts-skincare window1-menu-column">
                    <h3>SKINCARE GIFTS</h3>
                    <img alt="advent calendars" src={secondPicture}></img>
                    <p>Spark some *serious* joy this holiday with our best skincare gifts.</p>
                </div>
            </div>
        </div>

    )
}

export default Window1;