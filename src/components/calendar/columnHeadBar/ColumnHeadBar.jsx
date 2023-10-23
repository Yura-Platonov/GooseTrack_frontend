import PropTypes from 'prop-types';
import {
  TitleContainer,
  Title,
  AddTaskBtn,
  IconAdd,
} from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ title, handleShowModal }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <AddTaskBtn>
        <IconAdd onClick={handleShowModal} />
      </AddTaskBtn>
    </TitleContainer>
  );
};

export default ColumnHeadBar;

ColumnHeadBar.propTypes = {
  title: PropTypes.string.isRequired,
  //handleShowModal: PropTypes.func.isRequired,
};
