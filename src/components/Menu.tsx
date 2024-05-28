import { FavoriteMovies } from "./FavoriteMovies";
import { NavLink } from "react-router-dom";

type MenuProps = {
    favorites: any;
    onToggle: any;
}

const Menu = (props: MenuProps) => {

    return (
        <>
            <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
                {/* <li><NavLink to="favorites">Favorites</NavLink></li> */}
                {/* <FavoriteMovies favorites={props.favorites} onToggle={props.onToggle}>Favorite movies</FavoriteMovies>   */}
            </div>
        </div>
        </>
    );
}
export default Menu;