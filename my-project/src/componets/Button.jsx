import PropTypes from "prop-types";

const Button = ({ bola, className }) => {
  return <button className={`${className}`}>{bola}</button>;
};

Button.propTypes = {
  bola: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;