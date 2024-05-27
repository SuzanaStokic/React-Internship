import { MovieInfo } from "../interface/MovieInfo";
import TextCollapse from "./TextCollapse";

type MovieProps = {
    movie: MovieInfo;
    onSelect?: any;
}

const Movie = ({ movie, onSelect }: MovieProps) => {

    return ( 
        <div className="container" onClick={() => onSelect(movie.id)}>
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
                    {/* <h3 className="about-movie">About the movie</h3> */}
                    <p className="movie-text">
                        <TextCollapse 
                            collapsedNumOfWords={15}
                        >{movie.overview}</TextCollapse>
                    </p>
                    {/* <div className="credits">
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
                        </div> */}
                </div>        
            </div>
        </div>
                

    );
}
export default Movie;