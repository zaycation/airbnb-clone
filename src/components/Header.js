import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

import "./css/Header.css";

function Header() {
  return (
    <div className="header">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
        alt="airbnb-logo"
        className="header__icon"
      />

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
