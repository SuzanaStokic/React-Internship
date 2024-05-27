import React, { useRef } from "react";

type SearchProps = {
    allData: string;
    // setQuery: (query: string) => void;
    setFunction: (query: string) => void;
}

const Search = ({ allData, setFunction }: SearchProps)=> {
    const inputQuery = useRef(null);

    return (
        <input className="search" 
            type="text" placeholder="Search" 
            value={allData} 
            onChange={(e) => setFunction(e.target.value)} 
            ref={inputQuery}
        />
    );
}
export default Search;

