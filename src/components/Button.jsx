import '../css/Button.css';

const Button = ({ type, className, children, onClick }) => {
  const handleClick = (event) => {
    if (window.confirm('¿Estás seguro de que deseas continuar?')) {
      onClick(event);
    }
  };

  return (
    <button type={type} className={`button ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
