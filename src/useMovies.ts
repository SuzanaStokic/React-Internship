import { useEffect, useState } from "react";
import { MovieInfo } from "./interface/MovieInfo";
import { MovieData } from "./interface/MovieData";

export function useMovies(query: string) {
  const [movies, setMovies] = useState<MovieInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // const APIKey = "5ba8de1f2182100ce656243dab6464ae";

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
      const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=5ba8de1f2182100ce656243dab6464ae`
      );

      if (!res.ok) throw new Error("Something went wrong with fetching data");

      const data : MovieData = await res.json();

      setMovies(data.Search);
      setError("");

      } catch(err: any) {
        if(err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovies();

  }, [query]);

  return {movies, isLoading, error};
}
