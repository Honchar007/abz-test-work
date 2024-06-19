// styles
import './StyledInput.scss';

const StyledInput = ({
  id,
  label,
  helperText,
  value = '',
  onChange,
  errors,
  className,
  register,
  name,
  validationSchema,
}) => {
  return (
    <div className={`input-wrapper ${className ? className : ''}`}>
      <div className="input-func">
        <input
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          {...register(name, validationSchema)}
          className={`input ${errors && errors[name] ? 'error-inpt' : ''}`}
        />
        <label
          htmlFor={id}
          className={`label ${errors && errors[name] ? 'error-label' : ''} ${value ? 'active' : ''}`}
        >
          {label}
        </label>
      </div>
      {helperText && errors && !errors[name] && (
        <div className="helper-text">{helperText}</div>
      )}
      {errors && errors[name] && (
        <div className="error">{errors[name]?.message}</div>
      )}
    </div>
  );
};

export default StyledInput;
