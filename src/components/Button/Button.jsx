import "./_Button.scss";
import classNames from "classnames";

const Button = ({ variant, children, ...props }) => {
  const btnClasses = classNames("btn", {
    primary: variant === "primary",
    secondary: variant === "secondary",
    transparent: variant === "transparent",
    outline: variant === "outline",
    "primary add-to-cart": variant === "addToCart",
    'primary checkout': variant === 'checkout',
    'outline remove-all': variant === 'delete',
    'outline minus-plus': variant === 'minusPlus'
  });
  return (
    <div className={btnClasses} {...props}>
      {children}
    </div>
  );
};

export default Button;
