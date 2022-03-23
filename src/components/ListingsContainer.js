import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, deleteListing, setRefetch, query }) {
  const renderListings = listings
    .filter((listing) =>
      listing.description.toLowerCase().includes(query.toLowerCase())
    )
    .map((listing) => (
      <ListingCard
        setRefetch={setRefetch}
        deleteListing={deleteListing}
        listing={listing}
      />
    ));
  return (
    <main>
      <ul className="cards">{renderListings}</ul>
    </main>
  );
}

export default ListingsContainer;
