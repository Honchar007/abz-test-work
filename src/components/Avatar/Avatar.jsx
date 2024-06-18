// styles
import './Avatar.scss';

import avatar from '../../assets/svgs/avatar.svg';

const Avatar = ({ urlImage, alt }) => {
  return (
    <img src={urlImage ? urlImage : avatar} alt={alt} className="card-image" />
  );
};

export default Avatar;
