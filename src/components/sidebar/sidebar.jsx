import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Div, Section } from './sidebar.styled';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/auth/operations.js';
import logo from '../../images/side-head/GOOSE1.png';
import logo2 from '../../images/side-head/GOOSE2.png';
import logo3 from '../../images/side-head/GOOSE3.png';
import { btnOut1, btnOut2, calendarIcon, myAccIcon, statisticsIcon, xBnt1, xBnt2 } from './sidebarSvg';

const Sidebar = ({ toggleMenu }) => {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const closeMenuByEsc = (e) => {
      if (e.code === 'Escape') {
        toggleMenu();
      }
    };

    document.addEventListener('keydown', closeMenuByEsc);

    return () => {
      document.removeEventListener('keydown', closeMenuByEsc);
    };
  }, [toggleMenu]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleMenu();
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

   useEffect(() => {
     const handleResize = () => {
       setWindowWidth(window.innerWidth);
     };
     window.addEventListener('resize', handleResize);
     return () => {
       window.removeEventListener('resize', handleResize);
     };
   }, []);

  return (
    <Section onClick={handleOverlayClick}>
      <div className="logo-box">
        <picture>
          {windowWidth ? (
            <img width="71" height="68" src={logo3} alt="goose3" />
          ) : windowWidth >= 768 ? (
            <img width="60" height="58" src={logo2} alt="goose" />
          ) : (
            <img width="36" height="35" src={logo} alt="goose" />
          )}
        </picture>
        <h1 className="goosetrack">GooseTrack</h1>
        <button className="x-button" type="button" onClick={() => toggleMenu()}>
          {windowWidth >=1440? null : windowWidth >= 768 ? xBnt1 : xBnt2}
        </button>
      </div>
      <Div>
        <h3 className="user-title">User Panel</h3>
        <nav className="nav-box">
          <ul>
            <li>
              <NavLink
                className={'button-8'}
                to="/account"
                onClick={() => toggleMenu()}
              >
                {myAccIcon}
                My account
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'button-8'}
                to="/calendar"
                onClick={() => toggleMenu()}
              >
                {calendarIcon} Calendar
              </NavLink>
            </li>
            <li>
              <NavLink
                className={'button-8'}
                to="/statistics"
                onClick={() => toggleMenu()}
              >
                {statisticsIcon} Statistics
              </NavLink>
            </li>
          </ul>
        </nav>
      </Div>

      <button className="button-out " type="button" onClick={handleLogout}>
        Log out
        {windowWidth >= 768 ? btnOut1 : btnOut2}
      </button>
    </Section>
  );
};
export default Sidebar;
