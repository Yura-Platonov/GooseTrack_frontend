import { NavLink } from 'react-router-dom';
import { Div, Section } from './sidebar.styled';
import iconSvg from "../../images/icon.svg";

const Sidebar = () => {
  return (
    <Section>
      <div className="logo-box">
        <picture></picture>
        <h1 className="goosetrack">GooseTrack</h1>
        <button className="x-button" type="button">
          <svg className="icon icon-x-close" width="24" height="24">
            <use xlinkHref={iconSvg + '#icon-x-close'}></use>
          </svg>
        </button>
      </div>
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
      </Div>
      <button type="button">Log out</button>
    </Section>
  );
};
export default Sidebar;
