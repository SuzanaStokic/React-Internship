import { MovieInfo } from "../interface/MovieInfo";
import TextCollapse from "./TextCollapse";

type FavoriteProps = {
    movie: MovieInfo;
    onToggle: any;
} 

export const FavoriteMovie = ({movie, onToggle}: FavoriteProps) => {

    return (
        <div className="container">
            <div>{movie.id}</div>
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
                    <p className="movie-text">
                        <TextCollapse 
                            collapsedNumOfWords={15}
                        >{movie.overview}</TextCollapse>
                    </p>
                </div>        
            </div>
            <button className="btn btn-movie" onClick={() => onToggle(movie.id)}>Delete from favorites</button>
        </div>
    )
} 