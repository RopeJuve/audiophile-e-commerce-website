import "./_NavBar.scss";

import { useState } from "react";
import Carts from "../Carts/Carts";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="nav-bar__container">
      <div className="nav-bar__container-navLinks-wrapper">
        <img src='./assets/icon-menu.png' alt="menu" onClick={() => setOpenMenu(!openMenu)} />
        <h6>audiophile</h6>
        <img src='./assets/icon-cart.png' alt="cart" />
      </div>
      <div
        className={
          openMenu
            ? "nav-bar__container-menu open"
            : "nav-bar__container-menu "
        }

        data-close-menu={!openMenu}
      >
        <Carts />
      </div>
    </div>
  );
};

export default NavBar;
