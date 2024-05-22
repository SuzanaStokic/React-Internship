import { MovieInfo } from "../interface/MovieInfo";

type FavoriteProps = {
    movie: MovieInfo;
    onToggle: any;
    children?: string |JSX.Element|JSX.Element[];
} 

export const FavoriteMovie = ({movie, onToggle, children}: FavoriteProps) => {

    const actorsArray: Array<string> = [];
    movie?.actors.forEach((actor) => actorsArray.push(actor));

    return (
        <li onClick = {() => onToggle(movie.id)}>
            <h3>{movie.title}</h3>
            <div>
                <p>{movie.rating}</p>
                <p>{movie.genre}</p>
                <select name="actors" id="actors">
                    {actorsArray.map((actor) => (
                        <option value={actor}>{actor}</option>
                    ))}
                    
                </select>
            </div>
        </li>
    )
} 