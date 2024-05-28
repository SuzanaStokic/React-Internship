import { MovieInfo } from '../interface/MovieInfo';
import Movie from "./Movie";

type ListProps = {
    movies: MovieInfo[];
    onSelect: any;
}


const ListMovie = (props: ListProps) => {
    return (
        <ul className="list list-movies">
            {props.movies?.map((movie) => (
                <>
                {/* <div>{movie.id}</div> */}
                <Movie movie={movie} key={movie.id} onSelect={props.onSelect}/>
                {/* {movie.actors.map((actor, index) => <li key={index}>{actor}</li>)} */}
                </>
            ))}
        </ul>
    )
}
export default ListMovie;