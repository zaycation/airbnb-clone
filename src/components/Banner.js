import React, { useState } from "react";
import "./css/Banner.css";
import { Button } from "@material-ui/core";

import Search from "./Search";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide Dates" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
