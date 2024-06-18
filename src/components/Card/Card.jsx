import Avatar from '../Avatar/Avatar';
import './Card.scss';

const Card = () => {
  return (
    <div className="card">
      <Avatar
        urlImage="https://via.placeholder.com/150"
        alt="Takamuru Ayako Jurrien"
      />
      <h2 className="card-name">Salvador Stewart Flynn Thomas sacascsacsac</h2>
      <div className="card-info">
        <p className="card-title">Lead Independent Director</p>
        <p className="card-email">Takamuru@gmail.com</p>
        <p className="card-phone">+38 (098) 278 90 24</p>
      </div>
    </div>
  );
};

export default Card;
