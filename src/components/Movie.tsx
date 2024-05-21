import { MovieInfo } from "../interface/MovieInfo";

type MovieProps = {
    movie: MovieInfo;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
    return (
        <li>
            <h3>{movie.title}</h3>
            <div>
                <p>{movie.rating}</p>
            </div>
        </li>
    );
}
export default Movie;