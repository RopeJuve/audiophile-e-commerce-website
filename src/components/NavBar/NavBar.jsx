import "./_NavBar.scss";
import classNames from "classnames";
import { useState } from "react";
import Carts from "../Carts/Carts";
import { useMediaQuery } from "react-responsive";
import NavLinks from "./NavLinks";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isDesktop = useMediaQuery({
    query: "(min-width: 62.5em)",
  });
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const cartClasses = classNames("cart-bg", {
    "cart-bg open-cart": openCart,
  });

  const menuClasses = classNames("nav-bar__container-menu", {
    "nav-bar__container-menu open": openMenu,
  });
  return (
    <div className="nav-bar__container">
      <div className="nav-bar__container-navLinks-wrapper">
        {!isDesktop && (
          <img
            src="./assets/icon-menu.png"
            alt="menu"
            onClick={() => setOpenMenu(!openMenu)}
          />
        )}
        <h6>audiophile</h6>
        {isDesktop && <NavLinks variant="nav" />}
        <img
          src="./assets/icon-cart.png"
          alt="cart"
          onClick={() => setOpenCart(!openCart)}
        />
      </div>
      {!isDesktop && (
        <div className={menuClasses} data-close-menu={!openMenu}>
          <Carts />
        </div>
      )}
      <div className={cartClasses}>
        <ShoppingCart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default NavBar;
