import { MovieInfo } from "../interface/MovieInfo";

type MovieProps = {
    movie: MovieInfo;
    onSelect?: any;
}

const Movie = ({ movie, onSelect }: MovieProps) => {

    return (
        <li onClick={() => onSelect(movie.id)}>
            <h3>{movie.title}</h3>
            <div>
                <p>{movie.rating}</p>
                <p>{movie.genre}</p>
                {movie.actors?.map((data, index) => {
                    return (
                        <div key={index}>
                            {data}
                        </div>
                    )
                })}
            </div>
        </li>
    );
}
export default Movie;