import { MovieInfo } from "../interface/MovieInfo";
import Movie from "./Movie";
type ListProps = {
    movies: MovieInfo[];
    
}

export const ListMovie = (props: ListProps) => {
    return (
        <ul className="list list-movies">
            {props.movies?.map((movie) => (
                <Movie movie={movie} key={movie.id}  />
            ))}
        </ul>
    )
}