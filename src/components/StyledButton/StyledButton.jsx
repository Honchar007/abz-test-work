// styles
import './StyledButton.scss';

function StyledButton({ children, onClick, disabled, className, type }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default StyledButton;
