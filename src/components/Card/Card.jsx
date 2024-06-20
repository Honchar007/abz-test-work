// components
import Avatar from '../Avatar/Avatar';

// styles
import './Card.scss';

const Card = ({ name, title, email, phone, imageUrl }) => {
  return (
    <div className="card">
      <Avatar urlImage={imageUrl} alt={name} />
      <h2 className="card-name">{name}</h2>
      <div className="card-info">
        <p className="card-title">{title}</p>
        <p className="card-email">{email}</p>
        <p className="card-phone">{phone}</p>
      </div>
    </div>
  );
};

export default Card;