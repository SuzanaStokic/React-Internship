import React, { useEffect, useState } from "react";

type SearchProps = {
    onSearch: (value: string) => void;
}

const Search = ({onSearch}: SearchProps) => {
    const [value, setValue] = useState("");
    const inputElement = React.useRef<HTMLInputElement>(null);

    type KeyHandler = (event: KeyboardEvent) => void;
  
    const useKey = (key: string, action: () => void) : void => {
        useEffect(() => {
            const callback: KeyHandler = (e) => {
                if(e.code.toLowerCase() === key.toLowerCase()) {
                    action();
                }
            };
            document.addEventListener("keyup", callback);
        }, [key, action]);
    }

    useKey("Enter", () => {
      if (document.activeElement === inputElement.current) return;
      inputElement.current?.focus();
      onSearch(value);
    });

    // const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     if(!value) return;
    //     setValue("");
    // }
  
    return (
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        ref={inputElement}
      />
    );
  }
export default Search;

