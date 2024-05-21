import { MovieInfo } from "../interface/MovieInfo";

type FavoriteProps = {
    movie: MovieInfo;
} 

export const FavoriteMovie = (props: FavoriteProps) => {

    return (
        <li>
            <h3>{props.movie.Title}</h3>
        </li>
    )
} 