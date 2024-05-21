import { useEffect, useState } from "react"
import { MovieInfo } from "../interface/MovieInfo";

type DetailProps = {
    selectedId: number;
    onAddToFavorites: (movie: MovieInfo) => void;
}

export const MovieDetail = (props: DetailProps) => {
    const [movie, setMovie] = useState<MovieInfo | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleAdd = () => {
        const newFavorite: MovieInfo = {
            Id: props.selectedId, 
            Title: movie?.Title || "", 
            Overview: movie?.Overview || "",
            ReleaseDate: movie?.ReleaseDate || "",
            PosterPath: movie?.PosterPath || "",
        };
        props.onAddToFavorites(newFavorite);
    };

    useEffect(() => {
        async function getMovieDetails() {
            setIsLoading(true);
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${props.selectedId}?api_key=5ba8de1f2182100ce656243dab6464ae`);
                const data: MovieInfo = await res.json();
                setMovie(data);
            } catch(error) {
                console.error('Failed to fetch movie detail', error);
            } finally {
                setIsLoading(false);
            }
        }
        if(props.selectedId) {
            getMovieDetails();
        }
    }, [props.selectedId]);

    return (
        <></>
    );
}