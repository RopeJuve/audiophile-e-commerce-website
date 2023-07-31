import "./_NavLinks.scss";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";


const NavLinks = ({ variant }) => {
  const links = ["home", "headphones", "speakers", "earphones"];
  const navigate = useNavigate();

  const linksClass = classNames({
    "nav-link__container": variant === "footer",
    "nav-link__container nav-bar": variant === "nav",
  });
  
  return (
    <div className={linksClass}>
      {links.map((link, i) => (
        <button key={`${link}${i}`} onClick={() => navigate(link === "home" ? `/` : `/${link}`)}>
          {link}
        </button>
      ))}
    </div>
  );
};

export default NavLinks;
