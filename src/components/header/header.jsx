import { Section } from './header.styled';
import nad from '../../images/side-head/Elli.png';
import { useEffect, useState } from 'react';
import Sidebar from '../sidebar/sidebar';
import AddFeedbackBtn from '../Modal/AddFeedbackBtn/AddFeedbackBtn.jsx';
import AddFeedbackModal from '../Modal/AddFeedbackModal/AddFeedbackModal.jsx';
import { useLocation } from 'react-router-dom/dist';

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
          <button className="btn" type="button">
            {windowWidth >= 768 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M27.6558 17.3933C26.7523 17.6333 25.8214 17.7547 24.8865 17.7546C22.0398 17.7546 19.3665 16.648 17.3585 14.64C16.0399 13.3138 15.0919 11.6651 14.6091 9.85837C14.1262 8.05161 14.1253 6.14985 14.6065 4.34264C14.6666 4.11669 14.6662 3.8789 14.6054 3.65314C14.5446 3.42738 14.4255 3.22157 14.26 3.05638C14.0945 2.89119 13.8885 2.77241 13.6627 2.71196C13.4368 2.65151 13.199 2.65152 12.9732 2.71198C10.7107 3.31489 8.64659 4.50214 6.98784 6.15464C1.79051 11.352 1.79051 19.812 6.98784 25.012C8.22321 26.2542 9.69269 27.2391 11.3112 27.9097C12.9298 28.5803 14.6652 28.9232 16.4172 28.9186C18.1687 28.9236 19.9037 28.5809 21.5218 27.9105C23.14 27.2402 24.609 26.2554 25.8438 25.0133C27.4976 23.3542 28.6854 21.289 29.2878 19.0253C29.3477 18.7994 29.3472 18.5618 29.2864 18.3362C29.2256 18.1106 29.1067 17.9049 28.9415 17.7397C28.7762 17.5745 28.5705 17.4555 28.3449 17.3947C28.1193 17.334 27.8817 17.3335 27.6558 17.3933ZM23.9598 23.128C22.9718 24.1214 21.7965 24.9091 20.5021 25.4453C19.2076 25.9815 17.8196 26.2557 16.4185 26.252C15.0169 26.2555 13.6285 25.981 12.3336 25.4446C11.0387 24.9081 9.86302 24.1203 8.87451 23.1266C4.71718 18.968 4.71718 12.2 8.87451 8.04131C9.67785 7.23887 10.6053 6.57119 11.6212 6.06398C11.4725 7.98272 11.7398 9.91095 12.4048 11.7169C13.0698 13.5228 14.1169 15.1639 15.4745 16.528C16.8356 17.8898 18.4762 18.9398 20.2829 19.6053C22.0896 20.2709 24.0193 20.5361 25.9385 20.3826C25.4285 21.3968 24.7607 22.3235 23.9598 23.128Z"
                  fill="#3E85F3"
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
                  d="M20.7419 13.045C20.0642 13.225 19.366 13.3161 18.6649 13.316C16.5299 13.316 14.5249 12.486 13.0189 10.98C12.0299 9.98536 11.3189 8.74887 10.9568 7.39381C10.5947 6.03874 10.594 4.61242 10.9549 3.25701C11 3.08755 10.9997 2.90921 10.9541 2.73988C10.9084 2.57056 10.8191 2.41621 10.695 2.29232C10.5709 2.16842 10.4164 2.07934 10.247 2.034C10.0776 1.98866 9.89928 1.98867 9.72988 2.03401C8.03304 2.4862 6.48494 3.37664 5.24088 4.61601C1.34288 8.51401 1.34288 14.859 5.24088 18.759C6.16741 19.6907 7.26952 20.4294 8.48342 20.9323C9.69733 21.4353 10.9989 21.6924 12.3129 21.689C13.6265 21.6927 14.9278 21.4357 16.1414 20.9329C17.355 20.4302 18.4567 19.6916 19.3829 18.76C20.6232 17.5157 21.514 15.9668 21.9659 14.269C22.0108 14.0996 22.0104 13.9214 21.9648 13.7522C21.9192 13.583 21.83 13.4287 21.7061 13.3048C21.5822 13.1809 21.4279 13.0917 21.2587 13.0461C21.0895 13.0005 20.9113 13.0001 20.7419 13.045ZM17.9699 17.346C17.2289 18.0911 16.3474 18.6818 15.3766 19.084C14.4057 19.4862 13.3647 19.6918 12.3139 19.689C11.2627 19.6916 10.2214 19.4858 9.25021 19.0835C8.27904 18.6811 7.39727 18.0903 6.65588 17.345C3.53788 14.226 3.53788 9.15001 6.65588 6.03101C7.25839 5.42918 7.95398 4.92843 8.71588 4.54801C8.60436 5.98707 8.80483 7.43324 9.30361 8.7877C9.80238 10.1422 10.5877 11.373 11.6059 12.396C12.6267 13.4174 13.8571 14.2049 15.2122 14.704C16.5672 15.2032 18.0144 15.4021 19.4539 15.287C19.0714 16.0476 18.5705 16.7426 17.9699 17.346Z"
                  fill="#3E85F3"
                />
              </svg>
            )}
          </button>
          <h2 className="user-name">Nadiia</h2>
          <img className="avi" src={nad} alt="user-AVi" />
        </div>
      </div>

      <AddFeedbackModal open={isModalOpen} onCloseModal={onCloseModal} />
    </Section>
  );
};

export default Header;
