// styles
import './StyledButton.scss';

function StyledButton({ children, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className="btn">
      {children}
    </button>
  );
}

export default StyledButton;