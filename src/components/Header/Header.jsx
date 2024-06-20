// components
import StyledButton from '../StyledButton';

// styles
import './Header.scss';

// assets
import logo from '../../assets/svgs/logo.svg';

function Header() {
  return (
    <div className="header-bg">
      <header className="header">
        <div>
          <img src={logo} alt="TESTTASK LOGO" />
        </div>
        <nav className="nav">
          <StyledButton>Users</StyledButton>
          <StyledButton>Sign up</StyledButton>
        </nav>
      </header>
    </div>
  );
}

export default Header;
