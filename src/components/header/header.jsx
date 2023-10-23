import { Section } from './header.styled';
import nad from '../../images/side-head/Elli.png';
import { useEffect, useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import AddFeedbackBtn from '../Modal/AddFeedbackBtn/AddFeedbackBtn.jsx';
import AddFeedbackModal from '../Modal/AddFeedbackModal/AddFeedbackModal.jsx';
import { useLocation } from 'react-router-dom/dist';

import { barSvg1, barSvg2, themeSvg1, themeSvg2 } from './headerSvg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState('Home');

  const location = useLocation();
  const user = useSelector(selectUser);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/calendar':
        setCurrentPage('Calendar');
        break;
      case '/statistics':
        setCurrentPage('Statistics');
        break;
      default:
        setCurrentPage('User Profile');
    }
  }, [location.pathname]);

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
    <Section>
      {isMenuOpen && windowWidth < 1440 ? (
        <Sidebar toggleMenu={toggleMenu} />
      ) : null}
      <div className="head-box">
        {windowWidth >= 1440 ? (
          <span className="currentTitle">{currentPage}</span>
        ) : (
          <button className="btn burgerBtn" type="button" onClick={toggleMenu}>
            {windowWidth >= 1440
              ? null
              : windowWidth >= 768
              ? barSvg1
              : barSvg2}
          </button>
        )}

        <div className="user-box">
          <AddFeedbackBtn />
          <button className="btn" type="button">
            {windowWidth >= 768 ? themeSvg1 : themeSvg2}
          </button>
          <h2 className="user-name">{user.username}</h2>
          <img
            className="avi"
            src={user.avatarUrl ? user.avatarUrl : nad}
            alt="user-AVi"
          />
        </div>
      </div>
      <AddFeedbackModal />
    </Section>
  );
};

export default Header;

// selectUser()
// const onOpenModal = () => {
//   setIsModalOpen(true);
//   document.body.style.overflow = 'hidden';
// };
// const onCloseModal = () => {
//   setIsModalOpen(false);
//   document.body.style.overflow = 'auto';
// };
