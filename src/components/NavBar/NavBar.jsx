import "./_NavBar.scss";

import { useState } from "react";
import Carts from "../Carts/Carts";
import { useMediaQuery } from "react-responsive";
import NavLinks from "./NavLinks";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

const NavBar = () => {

  const isDesktop = useMediaQuery({
    query: "(min-width: 62.5em)",
  });
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="nav-bar__container">
      <div className="nav-bar__container-navLinks-wrapper">
        {!isDesktop && <img src='./assets/icon-menu.png' alt="menu" onClick={() => setOpenMenu(!openMenu)} />}
        <h6>audiophile</h6>
        {isDesktop && <NavLinks variant='nav' />}
        <img src='./assets/icon-cart.png' alt="cart" />

      </div>
      {!isDesktop && <div
        className={
          openMenu
            ? "nav-bar__container-menu open"
            : "nav-bar__container-menu "
        }

        data-close-menu={!openMenu}
      >
        <Carts />

      </div>}
      <div className="cart-bg">
        <ShoppingCart />
      </div>
    </div>
  );
};

export default NavBar;
