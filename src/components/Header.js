import React from "react";
import Search from "./Search";

function Header({ setQuery }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setQuery={setQuery} />
    </header>
  );
}

export default Header;
