import React from "react";
import "./SearchBar.scss"

const SearchBar = ({searchTerm, handleInput }) => {
    return (
        <input
       className="SearchBar">
        <input type="text"
        value={searchTerm}
        onInput={handleInput}
        placeholder= "Enter a location"/>
      </input>
    
    );
  };
  
  export default SearchBar;