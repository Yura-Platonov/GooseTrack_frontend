import { NavLink } from "react-router-dom";
import { Div, Section } from "./header.styled";

const Header = () => {
    return (
      <header>
        <Section>
          <Div>
            <nav>
              <NavLink className={'button-8'} to="/">
                Home
              </NavLink>
              <NavLink className={'button-8'} to="/calendar">
                Home
              </NavLink>
              <NavLink className={'button-8'} to="/statistics">
                Home
              </NavLink>
            </nav>
          </Div>
        </Section>
      </header>
    );  
};
export default Header;