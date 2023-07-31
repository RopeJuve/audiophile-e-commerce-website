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
        <a key={`${link}${i}`} href={link === "home" ? `/` : `/${link}`} onClick={() => navigate(`/${link}`)}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
