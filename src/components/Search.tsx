import React, { useEffect, useState } from "react";
import { MovieInfo } from "../interface/MovieInfo";

// type SearchProps = {
//     movies: MovieInfo[];
//     onSearch: (value: string) => void;
// }

const Search = () => {
    const [data, setData] = useState<MovieInfo[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredData, setFilteredData] = useState<MovieInfo[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('../movies.json');
          if(!response.ok) throw new Error(`HTTP error`);
          const jsonData: MovieInfo[] = await response.json();
          setData(jsonData);
        } catch (error: any) {
          setError(error.message);
        }
    };
    fetchData();
  }, []);

    useEffect(() => {
      setFilteredData(
        data.filter(film =>
          film.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, [searchTerm, data]);

    // const inputElement = React.useRef<HTMLInputElement>(null);

    // console.log(movies);

    // type KeyHandler = (event: KeyboardEvent) => void;
  
    // const useKey = (key: string, action: () => void) : void => {
    //     useEffect(() => {
    //         const callback: KeyHandler = (e) => {
    //             if(e.code.toLowerCase() === key.toLowerCase()) {
    //                 action();
    //             }
    //         };
    //         document.addEventListener("keyup", callback);
    //     }, [key, action]);
    // }

    // useKey("Enter", () => {
    //   if (document.activeElement === inputElement.current) return;
    //   inputElement.current?.focus();
    //   onSearch(value);
    // });

    // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     if(!value) return;
    //     setValue("");
    // }
  
    return (
      <>
        <input
          className="search"
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
          // ref={inputElement}
          />
        <ul>
          {filteredData.map(film => (
            <li key={film.id}>
              {film.title} 
              {film.genre}
            </li>
          ))}
        </ul>
      </>
    );
  }
export default Search;

