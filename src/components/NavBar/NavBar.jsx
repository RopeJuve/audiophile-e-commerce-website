import "./_NavBar.scss";
import menu from "../../assets/icon-menu.png";
import cart from "../../assets/icon-cart.png";
import { useState } from "react";
import Carts from "../Carts/Carts";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="nav-bar__container">
      <div className="nav-bar__container-navLinks-wrapper">
        <img src={menu} alt="menu" onClick={() => setOpenMenu(!openMenu)} />
        <h6>audiophile</h6>
        <img src={cart} alt="cart" />
      </div>
      <div
        className={
          openMenu ? "nav-bar__container-menu open" : "nav-bar__container-menu"
        }
      >
        <Carts />
      </div>
    </div>
  );
};

export default NavBar;
