// components
import Header from './components/Header';
import Welcome from './components/Welcome';
import GetContent from './components/GetContent';
import PostForm from './components/PostForm';

// styles
import './assets/styles/index.scss';

function App() {
  // const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className="main">
        <Header />
        <Welcome />
      </div>
      <GetContent />
      <PostForm />
    </div>
  );
}

export default App;
