import { useState } from "react";
import { useMovies } from "./useMovies";
import {NavBar} from "./components/NavBar";
import {Main} from "./components/Main";
import {ListMovie} from "./components/ListMovie";
import { Search } from "./components/Search";
import { FavoriteMovies } from "./components/FavoriteMovies";
import { MovieDetail } from "./components/MovieDetail";
import { MovieInfo } from "./interface/MovieInfo";


const App: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [selectedId, setSelectedId] = useState<null>(null);
    const [favorite, setFavorite] = useState<MovieInfo[]>([]);
    const {movies, isLoading, error} = useMovies(query);

    function handleAddToFavorites(movie: MovieInfo) {
        setFavorite((favorite) => [...favorite, movie]);
    }


    return (
        <>
            <NavBar>
                <Search query={query} setQuery={setQuery} />
                Lala
               
            </NavBar>

            <Main>
                <MovieDetail selectedId={selectedId} onAddToFavorites={handleAddToFavorites}/>
                <ListMovie movies={movies}></ListMovie>
                <FavoriteMovies favorite={favorite} />
            </Main>
        </>
    )
}
export default App;