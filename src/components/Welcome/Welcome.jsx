//components
import StyledButton from '../StyledButton';

// styles
import './Welcome.scss';

function Welcome() {
  return (
    <div className="welcome-bg">
      <div className="welcome-wrapper">
        <h1>Test assignment for front-end developer</h1>
        <div className="welcome-description">
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </div>
        <StyledButton>Sign up</StyledButton>
      </div>
    </div>
  );
}

export default Welcome;
