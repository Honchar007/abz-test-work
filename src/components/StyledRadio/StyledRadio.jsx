// styles
import './StyledRadio.scss';

function StyledRadio({ children, handleChange, value, checked }) {
  return (
    <div>
      <label className="radio-wrapper">
        <input
          type="radio"
          name="pure"
          className="radio"
          onChange={handleChange}
          value={value}
          checked={checked}
        />
        <span className="radio-text">{children}</span>
      </label>
    </div>
  );
}

export default StyledRadio;
