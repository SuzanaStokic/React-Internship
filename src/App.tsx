import { useState } from "react";

import {Main} from "./components/Main";

import { MovieInfo } from "./interface/MovieInfo";

import MoviesJSON from "./movies.json";
import { FavoriteMovies } from "./components/FavoriteMovies";
import { MovieDetail } from "./components/MovieDetail";
import { NavBar } from "./components/NavBar";
import Search from "./components/Search";
import Menu from "./components/Menu";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Modal from "./components/Modal";
import Homepage from './pages/Homepage';
import ListMovie from "./components/ListMovie";

const App = () => {
    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState<number>(1);
    const [favorites, setFavorites] = useState<MovieInfo[]>([]);
    //const {movies, isLoading, error} = useMovies(query);
    const [movies, setMovies] = useState(MoviesJSON);

    function handleAddToFavorites(movie: MovieInfo) {
        setFavorites((favorites) => [...favorites, movie]);
    }

    function handleToggleSelectMovie(id: any) {
        setSelectedId((selectedId) => (id === selectedId ? null : id));
    }

    function handleCloseMovie() {
        setSelectedId(1);
    }

    return (
        <>
            <NavBar>
                <Menu favorites={favorites} onToggle={handleAddToFavorites}/>
                <Search query={query} setQuery={setQuery} />
                
            </NavBar> 

            <Main>
                <ListMovie movies={movies} onSelect={handleToggleSelectMovie}/>

                    <Modal>
                        {selectedId ? (
                            <MovieDetail movies={movies} selectedId={selectedId} onAddToFavorites={handleAddToFavorites} onClose={handleCloseMovie}/>
                        ) : (
                            <Menu favorites={favorites} onToggle={handleAddToFavorites}/>
                        )}
                    </Modal>
                

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