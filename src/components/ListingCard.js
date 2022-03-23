import React, { useState } from "react";

function ListingCard({ listing, deleteListing, setRefetch }) {
  const { id, image, description, location } = listing;
  const [favorite, setFavorite] = useState(false);
  function handleClick() {
    setFavorite(!favorite);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => setRefetch(id));
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {favorite ? (
          <button
            onClick={handleClick}
            className="emoji-button favorite active"
          >
            ★
          </button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">
            ☆
          </button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;

// 2. I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.

// create state variable to hold boolean value for toggle
// use state variable to determine which button displays
// add click event to buttons
// callback function to flip state from true to false & vice versa

// 3. I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.

// add eventlistener to our delete button
// call back function:
// send delete request to our json-server(persist to backend)
// update state in App to reflect deleted listing
