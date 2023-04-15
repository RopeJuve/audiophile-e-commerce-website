import "./_NavLinks.scss";
import classNames from "classnames";

const NavLinks = ({ variant }) => {
  const links = ["Home", "Headphones", "Speakers", "Earphones"];

  const linksClass = classNames({
    "nav-link__container": variant === "footer",
    "nav-link__container nav-bar": variant === "nav",
  });
  
  return (
    <div className={linksClass}>
      {links.map((link, i) => (
        <a key={`${link}${i}`} href={link === "Home" ? `/` : `/${link}`}>
          {link}
        </a>
      ))}
    </div>
  );
};

export default NavLinks;
