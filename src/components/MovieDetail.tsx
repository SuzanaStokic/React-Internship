import { useState } from "react"
import { MovieInfo } from "../interface/MovieInfo";

import MoviesJSON from "../movies.json";

type DetailProps = {
    selectedId: number;
    onAddToFavorites: any;
    onClose: any;
    movies: MovieInfo[];
}

export const MovieDetail = ({selectedId, onAddToFavorites, onClose, movies}: DetailProps) => {
    const [movie, setMovie] = useState<MovieInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [movieList, setMovieList] = useState(MoviesJSON);
    
    const array = movieList.filter((movie) => movie.id === selectedId);

    const actorsArray: Array<string> = [];
    movie?.actors.forEach((actor) => actorsArray.push(actor));

    const handleAdd = () => {
        const newFavorite: MovieInfo = {
            id: selectedId, 
            title : movie?.title || "", 
            rating: movie?.rating || 0,
            genre: movie?.genre || "",
            actors: movie?.actors || [],
        };
        onAddToFavorites(newFavorite);
        onClose();
    };

    return (
        <>
            {array.map((movie) => {
                return (
                    <div className="box" key={movie.id}>
                        <strong>{movie.title}</strong>
                        <p>{movie?.genre}</p>
                        <p>{movie?.rating} IMDb rating</p>
                        {movie.actors?.map((data, index) => {
                            return (
                                <div key={index}>
                                    {data}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </>
    );
}