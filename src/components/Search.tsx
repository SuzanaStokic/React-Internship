import { useRef } from "react";

interface SearchProps {
    query: string;
    setQuery: (query: string) => void;
}

const Search = ({ query, setQuery }: SearchProps)=> {
    const inputQuery = useRef(null);

    return (
        <input className="search" 
            type="text" placeholder="Search" 
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
            ref={inputQuery}
        />
    );
}
export default Search;

