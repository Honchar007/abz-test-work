// components
import Card from '../Card';
import StyledButton from '../StyledButton';

// styles
import './GetContent.scss';

export const data = [
  {
    name: 'Salvador Stewart Flynn Thomas',
    title: 'Leading specialist of the department of c...',
    email: 'JeromeKlaraklaremoklarka1923362362...',
    phone: '+38 (098) 278 76 24',
    imageUrl: 'path/to/image1.jpg',
  },
  {
    name: 'Takamura Ayako Jurrien',
    title: 'Lead Independent Director',
    email: 'Takamura@gmail.com',
    phone: '+38 (098) 278 90 24',
    imageUrl: 'path/to/image2.jpg',
  },
  {
    name: 'Salvador Stewart Flynn Thomas',
    title: 'Leading specialist of the department of c...',
    email: 'JeromeKlaraklaremoklarka1923362362...',
    phone: '+38 (098) 2784 76 24',
    imageUrl: 'path/to/image1.jpg',
  },
  {
    name: 'Takamura Ayako Jurrien',
    title: 'Lead Independent Director',
    email: 'Takamura@gmail.com',
    phone: '+38 (098) 2758 90 24',
    imageUrl: 'path/to/image2.jpg',
  },
  {
    name: 'Salvador Stewart Flynn Thomas',
    title: 'Leading specialist of the department of c...',
    email: 'JeromeKlaraklaremoklarka1923362362...',
    phone: '+38 (098) 2768 76 24',
    imageUrl: 'path/to/image1.jpg',
  },
  {
    name: 'Takamura Ayako Jurrien',
    title: 'Lead Independent Director',
    email: 'Takamura@gmail.com',
    phone: '+38 (098) 288 90 24',
    imageUrl: 'path/to/image2.jpg',
  },
  {
    name: 'Salvador Stewart Flynn Thomas',
    title: 'Leading specialist of the department of c...',
    email: 'JeromeKlaraklaremoklarka1923362362...',
    phone: '+38 (098) 298 76 24',
    imageUrl: 'path/to/image1.jpg',
  },
  {
    name: 'Takamura Ayako Jurrien',
    title: 'Lead Independent Director',
    email: 'Takamura@gmail.com',
    phone: '+38 (098) 208 90 24',
    imageUrl: 'path/to/image2.jpg',
  },
];

function GetContent() {
  return (
    <div className="get-content-wrapper">
      <h1>Working with GET request</h1>
      <div className="card-list">
        {data.map((profile) => (
          <Card
            key={profile.phone}
            name={profile.name}
            title={profile.title}
            email={profile.email}
            imageUrl={profile.imageUrl}
            phone={profile.phone}
          />
        ))}
      </div>
      <StyledButton className="show-btn">Show more</StyledButton>
    </div>
  );
}

export default GetContent;
