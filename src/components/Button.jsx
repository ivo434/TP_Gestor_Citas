import '../css/Button.css';

const Button = ({ type, className, children, onClick }) => (
  <button type={type} className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;
