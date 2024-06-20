import { useState } from 'react';

// store
import { useFetchUsersQuery } from './store/user.api';

// components
import Header from './components/Header';
import Welcome from './components/Welcome';
import GetContent from './components/GetContent';
import PostForm from './components/PostForm';

// styles
import './assets/styles/index.scss';

function App() {
  const [count, setCount] = useState(6);
  const { data, isFetching, refetch } = useFetchUsersQuery({ page: 1, count });

  return (
    <div className="container">
      <div className="main">
        <Header />
        <Welcome />
      </div>
      <GetContent
        count={count}
        changeCount={setCount}
        data={data}
        isFetching={isFetching}
      />
      <PostForm changeCount={setCount} handleRefetch={refetch} />
    </div>
  );
}

export default App;
