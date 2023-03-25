import "./_NavBar.scss";
import menu from "../../assets/icon-menu.png";
import cart from "../../assets/icon-cart.png";

const NavBar = () => {
  return (
    <div className="nav-bar__container">
      <div className="nav-bar__container-navLinks-wrapper">
        <img src={menu} alt="menu" />
        <h6>audiophile</h6>
        <img src={cart} alt="cart" />
      </div>
    </div>
  );
};

export default NavBar;
