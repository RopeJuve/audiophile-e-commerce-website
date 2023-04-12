import "./_Layout.scss";
import NavBar from "../../components/NavBar/NavBar";
import Footer1 from "../../components/Footer/Footer1";
import Footer2 from "../../components/Footer/Footer2";

const Layout = ({ children }) => {
  return (
    <div className="layout-home__container">
      <NavBar />
      {children}
      <Footer1 />
      <Footer2 />
    </div>
  );
};

export default Layout;
