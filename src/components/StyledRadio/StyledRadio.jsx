// styles
import './StyledRadio.scss';

function StyledRadio({
  children,
  handleChange,
  value,
  watchValue,
  name,
  register,
}) {
  return (
    <div>
      <label className="radio-wrapper">
        <input
          type="radio"
          name="pure"
          className="radio"
          onChange={handleChange}
          value={value}
          checked={watchValue === value}
          {...register(name)}
        />
        <span className="radio-text">{children}</span>
      </label>
    </div>
  );
}

export default StyledRadio;
