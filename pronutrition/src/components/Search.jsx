import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const { value } = event.target; // Destructure event.target.value directly
    setQuery(value);
    onSearch(value); // Call the onSearch prop with the updated query value
  };

  return (
    <div className="field">
      <div className="control">
        <h2>Search</h2>
        <input
          className="input"
          type="text"
          placeholder="Search for a meal..."
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
