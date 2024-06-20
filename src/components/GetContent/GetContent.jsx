import { useState } from 'react';
import { useFetchUsersQuery } from '../../store/user.api';

// components
import Card from '../Card';
import StyledButton from '../StyledButton';
import Preloader from '../Preloader';

// styles
import './GetContent.scss';

function GetContent() {
  const [count, setCount] = useState(6);

  const { data, isFetching } = useFetchUsersQuery({ page: 1, count });

  const showMore = () => {
    if (count + 6 >= data.total_users) {
      setCount(data.total_users);
    } else {
      setCount((prev) => prev + 6);
    }
  };

  return (
    <div className="get-content-wrapper">
      <h1>Working with GET request</h1>
      <>
        <div className="card-list">
          {data &&
            data.users &&
            data.users.map((profile) => (
              <Card
                key={profile.email}
                name={profile.name}
                title={profile.position}
                email={profile.email}
                imageUrl={profile.photo}
                phone={profile.phone}
              />
            ))}
        </div>
        {isFetching ? (
          <Preloader />
        ) : (
          data &&
          count < data.total_users && (
            <StyledButton onClick={showMore} className="show-btn">
              Show more
            </StyledButton>
          )
        )}
      </>
    </div>
  );
}

export default GetContent;
