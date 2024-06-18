// styles
import './StyledInput.scss';

const StyledInput = ({ label, helperText, value, onChange, error }) => {
  return (
    <div className="input-wrapper">
      <div className="input-func">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={`input ${error ? 'error-inpt' : ''}`}
        />
        <label className={`label ${error ? 'error-label' : ''}`}>{label}</label>
      </div>
      {helperText && !error && <div className="helper-text">{helperText}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default StyledInput;
