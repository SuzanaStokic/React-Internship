import { MovieInfo } from '../interface/MovieInfo';
import Movie from "./Movie";
import React from 'react';
type ListProps = {
    movies: MovieInfo[];
    onSelect: any;
}


const ListMovie = (props: ListProps) => {
    return (
        <ul className="list list-movies">
            {props.movies?.map((movie) => (
                <Movie movie={movie} key={movie.id} onSelect={props.onSelect}></Movie>
            ))}
        </ul>
    )
}
export default ListMovie;