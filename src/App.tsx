
import {Main} from "./components/Main";

import { MovieInfo } from "./interface/MovieInfo";

import MoviesJSON from "./movies.json";
import { FavoriteMovies } from "./components/FavoriteMovies";
import { MovieDetail } from "./components/MovieDetail";
import { NavBar } from "./components/NavBar";
import Search from "./components/Search";
import ListMovie from "./components/ListMovie";
import OpenDetail from "./components/OpenDetail";
import useStorage from "./hooks/useStorage";
import { useCallback, useState } from "react";
import Window from "./components/Window";

const App = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [favorites, setFavorites] = useStorage();
    const movies = MoviesJSON;

    const [searchValue, setSearchValue] = useState("");

    const handleSearch = useCallback((value: string) => {
        console.log(value);
        setSearchValue(value);
    }, []);

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

    const selectedMovie = movies.find((movie) => movie.id === selectedId) || null;

    return (
        <div>
            <NavBar>
                <>
                    {/* <Menu favorites={favorites} onToggle={handleAddToFavorites}/> */}
                    <Search/>
                    {/* {movies.map((film) => (
                        <><p>{film.title}</p><p>{film.genre}</p></>
                    ))} */}
                </>
            </NavBar> 

            <Main>
            {/* {searchValue ? } */}
                <Window text="Popular movies">
                    <ListMovie movies={movies} onSelect={handleToggleSelectMovie}/>
                </Window>

                <Window text="Favorite movies">
                    <FavoriteMovies favorites={favorites} onToggle={handleDeleteFromFavorites} onSelect={handleToggleSelectMovie}>Favorite movies</FavoriteMovies>  
                </Window>

                <OpenDetail onClose={handleCloseMovie} selectedId={selectedId}>
                    <MovieDetail movie={selectedMovie} favorites={favorites} selectedId={selectedId} onAddToFavorites={handleAddToFavorites}/>
                </OpenDetail>
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