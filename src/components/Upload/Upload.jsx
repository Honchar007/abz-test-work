import { useRef } from 'react';

// styles
import './Upload.scss';

const Upload = ({
  className,
  register,
  name,
  validationSchema,
  errors,
  value = '',
}) => {
  const fileInputRef = useRef(null);

  const { ref: registerRef, ...rest } = register(name, validationSchema);

  const handleButtonClick = (event) => {
    event.preventDefault();
    fileInputRef.current.click();
  };

  return (
    <div className={`wrapper-upload ${className}`}>
      <div className="upload-func">
        <button
          onClick={handleButtonClick}
          className={`upload-btn ${errors && errors[name] ? 'error-btn' : ''}`}
        >
          Upload
        </button>
        <input
          type="file"
          style={{ display: 'none' }}
          accept="image/*"
          {...rest}
          ref={(e) => {
            registerRef(e);
            fileInputRef.current = e;
          }}
        />
        <input
          readOnly
          type="text"
          value={value && value[0] ? value[0].name : ''}
          className={`upload-inpt ${errors && errors[name] ? 'error-inpt' : ''}`}
          placeholder="Upload your photo"
        />
      </div>
      {errors && errors[name] && (
        <div className="error">{errors[name].message}</div>
      )}
    </div>
  );
};

export default Upload;
