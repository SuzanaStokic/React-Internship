import MovieInfo from "../interface/MovieInfo";

// import MoviesJSON from "../public/movies.json";

type DetailProps = {
    movie: MovieInfo | null;
    // favorites: MovieInfo[];
    selectedId: any;
    onAddToFavorites: any;
    movieList: MovieInfo[];
    onClose: any;
    // favorites: any;
}

const MovieDetail = ({movie, selectedId, onAddToFavorites, movieList, onClose}: DetailProps) => {
    // const [movie, setMovie] = useState<MovieInfo | null>(null);
    // const movieList = MoviesJSON;
    
    const array = movieList.map((movie) => movie.id).includes(selectedId);
    const filtered = movieList.filter((movie) => movie.id === selectedId);


    const handleAdd = () => {
        const newFavorite: MovieInfo = {
            id: selectedId, 
            poster: movie?.poster || "",
            title : movie?.title || "", 
            releaseDate: movie?.releaseDate || "",
            rating: movie?.rating || 0,
            overview: movie?.overview || "",
            genre: movie?.genre || "",
            actors: movie?.actors || [],
            director: movie?.director || "",
            screenwriters: movie?.screenwriters || "",
        };
        onAddToFavorites(newFavorite);
        onClose();
    };

    return (
        <>
            {array ? ( filtered.map((movie) => {
                return (
                
                    <div className="container" key={movie.id}>
                        <div className="top">
                            <div className="title-rating">
                                <h1 className="title"><span>{movie.title} </span>({movie.releaseDate})<span></span></h1>
                                <p>⭐{movie.rating}</p>
                            </div>
                            <div className="genre">
                                <p>{movie.genre}</p>
                            </div>
                        </div>
                        <div className="movie">
                            <div className="movie-img">
                                <img src={movie.poster}  alt={`${movie.title} poster`} className="image"/>
                            </div>
                            <div className="movie-description">
                                <h3 className="about-movie">About the movie</h3>
                                <p className="movie-text">{movie.overview}</p>
                                <div className="credits">
                                    <div className="actors">
                                        <h3>Actors</h3>
                                        <div className="actor">
                                            {movie.actors?.map((data, index) => {
                                                return (
                                                    <div key={index}>
                                                        {data}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="directors">
                            <h3>Director</h3>
                            <div className="director">
                                {movie.director}
                            </div>
                        </div>
                        <div className="screenwriters">
                            <h3>Screenwriter</h3>
                            <div className="screenwriter">
                                {movie.screenwriters}
                            </div>
                        </div>
                                </div>
                            </div>        
                        </div>
                        {/* {favorites.some(fav => fav.id === movie.id) ? 
                            <button className="btn btn-movie" onClick={() => onTogg(movie.id)}>Delete from favorites</button> :
                            <button className="btn btn-movie" onClick={() => onAddToFavorites(movie.id)}>Add movie to favorites</button>
                        } */}
                        <button className="btn btn-movie" onClick={handleAdd}>Add movie to favorites</button>
                    </div>
            )})) : (
                ""
            )}
        </>
    );
}
export default MovieDetail;