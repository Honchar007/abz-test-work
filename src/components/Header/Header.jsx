// components
import StyledButton from '../StyledButton';

// styles
import './Header.scss';

// assets
import logo from '../../assets/svgs/logo.svg';

function Header() {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="TESTTASK LOGO" />
      </div>
      <nav className="nav">
        <StyledButton>Users</StyledButton>
        <StyledButton>Sign up</StyledButton>
      </nav>
    </header>
  );
}

export default Header;
