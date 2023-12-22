import "./Window2.css";
import window2poster1 from  "../assets/navbar/window2poster1.PNG";
import window2poster2 from "../assets/navbar/window2poster2.PNG";

function Window2(){
    return(
        <div class="window2-container">
            <div className="window2-menu">
                <div className="window2-types-perfume window2-menu-column">
                    <ul>
                        <li>PERFUME & EAU DE PERFUM</li>
                        <li>EAU DE TOILETTE</li>
                        <li>AFTERSHAVE</li>
                        <li>COLOGNE</li>
                        <li>NICHE FRAGRANCE</li>
                        <li>PERFUME ATOMISERS</li>
                        <li>BODY & HAIR MIST</li>
                        <li>GIFTS & SETS</li>
                        <li>TRAVEL MINIS</li>
                    </ul>
                </div>
                <div className="window2-home-fragnance window2-menu-column">
                    <h3>HOME FRAGNANCE</h3>
                    <ul>
                        <li>Candles</li>
                        <li>Riid Diffusers</li>
                        <li>Room Sprays</li>
                    </ul>
                </div>
                <div className="window2-menu-column">
                    <h3>FRANRANCE FINDER</h3>
                    <img alt="advent calendars" src={window2poster1}></img>
                    <p>Discover your new signature scent with our Fragnance & Perfume Finder</p>
                    <button>Shop Now</button>
                </div>
                <div className="window2-menu-column">
                <h3>FRANRANCE FINDER</h3>
                    <img alt="advent calendars" src={window2poster2}></img>
                    <p>A contemporary award-winning British fragrance brand, powered by flowers</p>
                    <button>Shop Now</button>
                </div>
            </div>
        </div>

    )
}

export default Window2;