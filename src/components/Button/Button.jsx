import "./_Button.scss";
import classNames from "classnames";

const Button = ({ variant, children, ...props }) => {
    const btnClasses = classNames('btn',{
        'primary': variant === 'primary',
        'secondary': variant === 'secondary',
        'transparent': variant === 'transparent',
        'outline': variant === 'outline'
    })
  return (
    <div className={btnClasses} {...props}>
      {children}
    </div>
  );
};

export default Button;
