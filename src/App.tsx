
import {Main} from "./components/Main";

import { MovieInfo } from "./interface/MovieInfo";

import MoviesJSON from "./movies.json";
import { FavoriteMovies } from "./components/FavoriteMovies";
import { MovieDetail } from "./components/MovieDetail";
import { NavBar } from "./components/NavBar";
import Search from "./components/Search";
import Menu from "./components/Menu";
import ListMovie from "./components/ListMovie";
import OpenDetail from "./components/OpenDetail";
import useStorage from "./hooks/useStorage";
import { useState } from "react";
import Window from "./components/Window";

const App = () => {
    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [favorites, setFavorites] = useStorage();
    const [movies, setMovies] = useState(MoviesJSON);

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

    return (
        <>
            <NavBar>
                {/* <Menu favorites={favorites} onToggle={handleAddToFavorites}/> */}
                <Search allData={query} setFunction={setQuery} />
            </NavBar> 

            <Main>
                <Window text="Popular movies">
                    <ListMovie movies={movies} onSelect={handleToggleSelectMovie}/>
                </Window>

                <Window text="Favorite movies">
                    <FavoriteMovies favorites={favorites} onToggle={handleDeleteFromFavorites}>Favorite movies</FavoriteMovies>  
                </Window>

                <OpenDetail onClose={handleCloseMovie}>
                    {selectedId ? (
                        <MovieDetail selectedId={selectedId} onAddToFavorites={handleAddToFavorites} favorites={favorites}/>
                    ) : (
                        <></>  
                    )}
                </OpenDetail>
            </Main>
            {/* <BrowserRouter>
                <Routes>
                    <Route index element={<Homepage />} />
                    <Route path="product" element={<FavoriteMovies favorites={favorites} onToggle={handleAddToFavorites}/>} />
                </Routes>
            </BrowserRouter> */}
        </>
    )
}

                
export default App;