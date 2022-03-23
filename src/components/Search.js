import React, { useState } from "react";

function Search({ setQuery }) {
  const [search, setSearch] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

// 4. I can search for listings by their name.

// collect input from form and store in state in Search component
// when user submits search, search term must be passed up to App
// in App use the search term to filter listings
