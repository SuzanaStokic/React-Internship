import {Main} from "./components/Main";
import { MovieInfo } from "./interface/MovieInfo";

import { FavoriteMovies } from "./components/FavoriteMovies";
import { MovieDetail } from "./components/MovieDetail";
import { NavBar } from "./components/NavBar";
import Search from "./components/Search";
import ListMovie from "./components/ListMovie";
import OpenDetail from "./components/OpenDetail";
import useStorage from "./hooks/useStorage";
import { ChangeEvent, useState } from "react";
import Window from "./components/Window";
import Results from "./components/Results";
import useFetchMovies from "./hooks/useFetchMovies";

const App = () => {
    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [favorites, setFavorites] = useStorage();
    const {movies, loading, error} = useFetchMovies();

    const selectedMovie = movies.find((movie) => movie.id === selectedId) || null;
    
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    }

    const handleAddToFavorites = (movie: MovieInfo) => {
        setFavorites((favorites) => [...favorites, movie]);
    }

    const handleDeleteFromFavorites = (id: any) => {
        setFavorites((favorites) => favorites.filter((movie) => movie.id !== id));
    }

    const handleToggleSelectMovie = (id: any) => {
        setSelectedId((selectedId) => (id === selectedId ? null : id));
    }

    const handleCloseMovie = () => {
        setSelectedId(null);
    }

    // const handleToggle = (movie: MovieInfo) => {
    //     if (favorites.some(fav => fav.id === movie.id)) {
    //         setFavorites((favorites) => favorites.filter((movie) => movie.id !== id));
    //     } else {
    //       setFavorites([...favorites, movie]);
    //     }
    //   };
    //   const handleAdd = (movie: MovieInfo) => {
    //     if (!favorites.some(fav => fav.id === movie.id)) {
    //       setFavorites([...favorites, movie]);
    //     }
    //   };


    return (
        <div>
            <NavBar>
                <> 
                    <Search value={query} onQueryChange={handleSearch}/>
                </>
            </NavBar> 

            <Main>
                <>
                    {query && filteredMovies.length > 0 ? (
                        <Results filtered={filteredMovies}/>
                    ) : (
                        <>
                            <Window text="Popular movies">
                                <ListMovie movies={movies} onSelect={handleToggleSelectMovie}/>
                            </Window>

                            <Window text="Favorite movies">
                                <FavoriteMovies favorites={favorites} onToggle={handleDeleteFromFavorites} onSelect={handleToggleSelectMovie}>Favorite movies</FavoriteMovies>  
                            </Window>

                            <OpenDetail onClose={handleCloseMovie} selectedId={selectedId}>
                                <MovieDetail onClose={handleCloseMovie} movieList={movies} movie={selectedMovie} selectedId={selectedId} onAddToFavorites={handleAddToFavorites}/>
                            </OpenDetail>
                        </>
                    )}
                </>
            {/* {searchValue ? } */}
                {/* <Window text="Popular movies">
                    <ListMovie movies={movies} onSelect={handleToggleSelectMovie}/>
                </Window>

                <Window text="Favorite movies">
                    <FavoriteMovies favorites={favorites} onToggle={handleDeleteFromFavorites} onSelect={handleToggleSelectMovie}>Favorite movies</FavoriteMovies>  
                </Window>

                <OpenDetail onClose={handleCloseMovie} selectedId={selectedId}>
                    <MovieDetail movieList={movies} movie={selectedMovie} selectedId={selectedId} onAddToFavorites={handleAddToFavorites}/>
                </OpenDetail> */}
            </Main>
            {/* <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="product" element={<FavoriteMovies favorites={favorites} onToggle={handleAddToFavorites}/>} />
                </Routes>
            </BrowserRouter> */}
        </div>
    )
}

                
export default App;