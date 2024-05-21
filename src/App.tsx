import { useState } from "react";

import {Main} from "./components/Main";
import {ListMovie} from "./components/ListMovie";

import { MovieInfo } from "./interface/MovieInfo";

import MoviesJSON from "./movies.json";
import { FavoriteMovies } from "./components/FavoriteMovies";
import { MovieDetail } from "./components/MovieDetail";
import { NavBar } from "./components/NavBar";
import Search from "./components/Search";

const App: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [selectedId, setSelectedId] = useState<number>(1);
    const [favorite, setFavorite] = useState<MovieInfo[]>([]);
    //const {movies, isLoading, error} = useMovies(query);
    const [movies, setMovies] = useState(MoviesJSON);

    function handleAddToFavorites(movie: MovieInfo) {
        setFavorite((favorite) => [...favorite, movie]);
    }


    return (
        <>
        {MoviesJSON && MoviesJSON.map(movie => {
            return (
                <div className="box" key={movie.id}>
                    <strong>{movie.title}</strong>
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
            <NavBar>
                <Search query={query} setQuery={setQuery} /> 
            </NavBar> 

            <Main>
                <ListMovie movies={movies}></ListMovie>
                <FavoriteMovies favorite={favorite} /> 
                <MovieDetail selectedId={selectedId} onAddToFavorites={handleAddToFavorites}/>
            </Main>
        </>
    )
}

                
export default App;