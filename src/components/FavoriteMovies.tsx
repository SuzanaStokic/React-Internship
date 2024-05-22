import { MovieInfo } from "../interface/MovieInfo";
import {FavoriteMovie} from "./FavoriteMovie";

type FavoritesProps = {
    favorites: MovieInfo[];
    onToggle: any;
    children?: string | JSX.Element|JSX.Element[];
}

export const FavoriteMovies = (props: FavoritesProps) => {

    return (
        <ul className="list list-favorite">
            {props.favorites?.map((movie) => (
                <FavoriteMovie movie={movie} key={movie.id} onToggle={props.onToggle}>{props.children}</FavoriteMovie>
            ))}
        </ul>
    )
    
}