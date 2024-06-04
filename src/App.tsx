import Main from "./components/Main";
import FavoriteMovies from "./components/FavoriteMovies";
import MovieDetail from "./components/MovieDetail";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import ListMovie from "./components/ListMovie";
import OpenDetail from "./components/OpenDetail";
import Window from "./components/Window";
import Results from "./components/Results";
import MovieInfo from "./interface/MovieInfo";

import { ChangeEvent, useState } from "react";

import useStorage from "./hooks/useStorage";
import useFetchMovies from "./hooks/useFetchMovies";

import './index.css';

const App = () => {
    const [query, setQuery] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    const [favorites, setFavorites] = useStorage();
    const {movies} = useFetchMovies();

    const selectedMovie = movies.find((movie) => movie.id === selectedId) || null;

    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.actors.find((actor) => actor.toLowerCase().includes(query.toLowerCase())) ||
        movie.genre.toLowerCase().includes(query.toLowerCase()) ||
        movie.releaseDate.includes(query)
        );


    // const themeContext = useContext(ThemeContext);

    // if(!themeContext) return null;

    // const {themeMode, switchThemeMode} = themeContext;

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

    return (
        <div>
            {/* <ThemeContextProvider>
                <CssBaseline />
                <Paper> */}
                        <NavBar>
                            <> 
                                <Search value={query} onQueryChange={handleSearch}/>
                                {/* <button className="btn btn-dark" onClick={() => setDarkMode(!darkMode)}>
                                    {darkMode ? <LightMode style={{color: 'white'}} /> : <NightsStaySharp style={{color: 'rgb(86, 85, 85)'}}/> }
                                </button> */}
    
                                {/* <div>
                                    <h1>This app is using the {themeMode} mode</h1>
                                    <Button variant="contained" onClick={toggleTheme}>Toggle Theme</Button>
                                </div> */}

                            </>
                        </NavBar> 

                        <Main>
                            <>
                                {query && filteredMovies.length > 0 ? (
                                    <Results filtered={filteredMovies} />
                                ) : (
                                    <>
                                        <Window text="Popular movies">
                                            <ListMovie movies={movies} onSelect={handleToggleSelectMovie}/>
                                        </Window>

                                        <Window text="Favorite movies">
                                            <FavoriteMovies favorites={favorites} onToggle={handleDeleteFromFavorites} >Favorite movies</FavoriteMovies>  
                                        </Window>

                                        <OpenDetail onClose={handleCloseMovie} selectedId={selectedId}>
                                            <MovieDetail onClose={handleCloseMovie} movieList={movies} movie={selectedMovie} selectedId={selectedId} onAddToFavorites={handleAddToFavorites}/>
                                        </OpenDetail>
                                    </>
                                )}
                            </>
                        </Main>
                {/* </Paper>
            </ThemeContextProvider> */}
        </div>
    )
}

                
export default App;