import { MovieInfo } from "../interface/MovieInfo";
import TextCollapse from "./TextCollapse";

type MovieProps = {
    movie: MovieInfo;
    onSelect?: any;
}

const Movie = ({ movie, onSelect }: MovieProps) => {

    return ( 
        <div className="container-overview" onClick={() => onSelect(movie.id)}>
            <div className="top-overview">
                <div className="title-rating-overview">
                    <h1 className="title-overview"><span>{movie.title} </span><span>({movie.releaseDate})</span></h1>
                    <p>⭐{movie.rating}</p>
                </div>
                <div className="genre-overview">
                    <p>{movie.genre}</p>
                </div>
            </div>
            <div className="movie-overview">
                <div className="movie-img-overview">
                    <img src={movie.poster}  alt={`${movie.title} poster`} className="image"/>
                </div>

                <div className="movie-description-overview">
                    {/* <h3 className="about-movie">About the movie</h3> */}
                    <p className="movie-text-overview">
                        <TextCollapse 
                            collapsedNumOfWords={10}
                        >{movie.overview}</TextCollapse>
                    </p>
                </div>        
            </div>
            {/* <button className="btn btn-movie" onClick={handleAdd}>Add movie to favorites</button> */}
        </div>
                

    );
}
export default Movie;