import { MovieInfo } from "../interface/MovieInfo";
import {FavoriteMovie} from "./FavoriteMovie";

type FavoritesProps = {
    favorite: MovieInfo[];
}

export const FavoriteMovies = (props: FavoritesProps) => {

    return (
        <ul className="list list-favorite">
            {props.favorite?.map((movie) => (
                <FavoriteMovie movie={movie} key={movie.Id}/>
            ))}
        </ul>
    )
    
}