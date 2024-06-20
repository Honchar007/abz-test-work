// styles
import './StyledRadio.scss';

function StyledRadio({
  children,
  handleChange,
  value,
  watchValue,
  name,
  register,
  validationSchema,
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
          checked={parseInt(watchValue) === value}
          {...register(name, validationSchema)}
        />
        <span className="radio-text">{children}</span>
      </label>
    </div>
  );
}

export default StyledRadio;
