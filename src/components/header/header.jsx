import { Section } from './header.styled';
import nad from '../../images/side-head/Elli.png';
import { useEffect, useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import AddFeedbackBtn from '../Modal/AddFeedbackBtn/AddFeedbackBtn.jsx';
import AddFeedbackModal from '../Modal/AddFeedbackModal/AddFeedbackModal.jsx';
import { useLocation } from 'react-router-dom/dist';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentPage, setCurrentPage] = useState('Home');

  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const onCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

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
        <button className="btn burgerBtn" type="button" onClick={toggleMenu}>
          {windowWidth >= 1440 ? (
            <span className="currentTitle">{currentPage}</span>
          ) : windowWidth >= 768 ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M4.25 17H29.75"
                stroke="#343434"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.25 8.5H29.75"
                stroke="#343434"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.25 25.5H29.75"
                stroke="#343434"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 12H21"
                stroke="#343434"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="#343434"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="#343434"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <AddFeedbackBtn onOpenModal={onOpenModal} />
        <div className="user-box">
          <ThemeToggler />
          <h2 className="user-name">Nadiia</h2>
          <img className="avi" src={nad} alt="user-AVi" />
        </div>
      </div>

      <AddFeedbackModal open={isModalOpen} onCloseModal={onCloseModal} />
    </Section>
  );
};

export default Header;
