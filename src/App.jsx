// styles
// import { useState } from 'react';
import './assets/styles/index.scss';
// import StyledButton from './components/StyledButton';
// import StyledInput from './components/StyledInput';
// import Upload from './components/Upload';
import Card from './components/Card';
import Preloader from './components/Preloader';
// import StyledRadio from './components/StyledRadio';
import Tooltip from './components/Tooltip';
import PostForm from './components/PostForm';

function App() {
  // const [value, setValue] = useState('');

  return (
    <>
      <Card />
      <Preloader />
      {/* <StyledRadio />
      <StyledRadio /> */}
      <div className="container-tooltip">
        <Tooltip
          text="MaximilianMaxi@gmail.com"
          tooltipText="MaximilianMaximilian@gmail.com"
        />
      </div>
      <PostForm />
    </>
  );
}

export default App;
