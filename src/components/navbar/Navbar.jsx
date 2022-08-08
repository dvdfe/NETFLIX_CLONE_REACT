import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import React, { useEffect, useState } from "react";
import Logo from "../navbar/logo.png"



const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => window.onscroll = null;
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src={Logo}
            alt="logo"
          />
          <span>Accueil</span>
          <span>Séries</span>
          <span>Films</span>
          <span>Nouveautés les plus regardées</span>
          <span>Ma liste</span>
          <span>Explorer par langue</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <span>DIRECT</span>
          <span>Jeunesse</span>
          <NotificationsIcon className="icon" />
          <div className="profile">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt=""
            />
            <div className="options">
              <span>Compte</span>
              <span>Centre d'aide</span>
              <span>Se déconnecter</span>
            </div>
            <ArrowDropDownIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
