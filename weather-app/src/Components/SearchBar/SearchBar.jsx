import React from "react";
import "./SearchBar.scss"

const SearchBar = ({searchTerm, handleInput, handleSubmit }) => {
    return (
      <form onSubmit={handleSubmit}>
        <button> Click me! </button>
        <input
       className="SearchBar"
        type="text"
        value={searchTerm}
        onInput={handleInput}
        placeholder= "Enter a location">
      </input>
      </form>
    
    );
  };
  
  export default SearchBar;