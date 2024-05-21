import { MovieInfo } from "../interface/MovieInfo";

type MovieProps = {
    movie: MovieInfo;
}

const Movie: React.FC<MovieProps> = ({ movie }) => {
    return (
        <li>
            <img src={movie.PosterPath} alt={`${movie.Title}}`} />
            <h3>{movie.Title}</h3>
            <div>
                <p>{movie.ReleaseDate}</p>
            </div>
        </li>
    );
}
export default Movie;