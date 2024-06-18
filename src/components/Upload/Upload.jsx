import { useRef, useState } from 'react';

// styles
import './Upload.scss';

const Upload = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setName(file.name);
      console.log(file);
      if (!file.type.startsWith('image/')) {
        setError('Error text');
      }
    }
  };

  return (
    <div className="wrapper-upload">
      <div className="upload-func">
        <button
          onClick={handleButtonClick}
          className={`upload-btn ${error ? 'error-btn' : ''}`}
        >
          Upload
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={handleFileChange}
          accept="image/*"
        />
        <input
          readOnly
          type="text"
          value={name}
          className={`upload-inpt ${error ? 'error-inpt' : ''}`}
          placeholder="Upload your photo"
        />
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Upload;
