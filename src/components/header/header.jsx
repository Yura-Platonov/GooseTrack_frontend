import { NavLink } from 'react-router-dom';
import { Div, Section } from './header.styled';
import { useState } from 'react';
import AddFeedbackBtn from '../AddFeedbackBtn/AddFeedbackBtn.jsx';
import AddFeedbackModal from '../AddFeedbackModal/AddFeedbackModal.jsx';

const Header = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true);
  };
  const onCloseModal = () => {
    setIsOpenModal(false);
  };

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
          <AddFeedbackBtn onOpenModal={onOpenModal} />
          <AddFeedbackModal open={isOpenModal} onCloseModal={onCloseModal} />
        </Div>
      </Section>
    </header>
  );
};
export default Header;
