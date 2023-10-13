import { NavLink } from 'react-router-dom';
import { Div, Section } from './header.styled';
import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn.jsx';

const Header = () => {
  return (
    <header>
      <Section>
        <Div>
          <nav>
            <NavLink className={'button-8'} to="/">
              My account
            </NavLink>
            <NavLink className={'button-8'} to="/calendar">
              Calendar
            </NavLink>
            <NavLink className={'button-8'} to="/statistics">
              Statistics
            </NavLink>
          </nav>
          <AddFeedbackBtn />
        </Div>
      </Section>
    </header>
  );
};
export default Header;
