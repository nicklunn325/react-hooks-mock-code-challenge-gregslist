import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [refetch, setRefetch] = useState(false);
  const [query, setQuery] = useState("");

  function fetchListings() {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((listingsData) => setListings(listingsData));
  }

  function deleteListing(id) {
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  }

  useEffect(fetchListings, [refetch]);

  // const filteredListings = listings.filter((listing) =>
  //   listing.description.toLowerCase().includes(query.toLowerCase())
  // );
  return (
    <div className="app">
      <Header setQuery={setQuery} />
      <ListingsContainer
        setRefetch={setRefetch}
        deleteListing={deleteListing}
        listings={listings}
        query={query}
      />
    </div>
  );
}

export default App;

//1. When the app starts, I can see all listings.

// fetch listings from json-server as an effect(useEffect)
// store listings in state
// pass listings down to ListingsContainer as prop
