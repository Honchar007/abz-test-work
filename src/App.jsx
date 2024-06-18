// styles
import { useState } from 'react';
import './assets/styles/index.scss';
import StyledButton from './components/StyledButton';
import StyledInput from './components/StyledInput';
import Upload from './components/Upload';
import Card from './components/Card';

function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <div>Hi</div>
      <h1>Hi</h1>
      <StyledButton>Hi</StyledButton>
      <Upload />
      <StyledInput
        label="Label"
        helperText="Helper text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Card />
    </>
  );
}

export default App;
