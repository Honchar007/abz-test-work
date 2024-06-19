// styles
import './assets/styles/index.scss';

// components
import Header from './components/Header';
import Welcome from './components/Welcome';

function App() {
  // const [value, setValue] = useState('');

  return (
    <div className="container">
      <Header />
      <Welcome />
    </div>
  );
}

export default App;
