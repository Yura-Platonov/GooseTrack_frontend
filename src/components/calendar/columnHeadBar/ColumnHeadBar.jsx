import PropTypes from 'prop-types';
import {
  TitleContainer,
  Title,
  AddTaskBtn,
  IconAdd,
} from './ColumnHeadBar.styled';
import { openModal } from '../../../redux/modal/modalSlice.js';
import { useDispatch } from 'react-redux';

const ColumnHeadBar = ({ title, handleShowModal }) => {
  const dispatch = useDispatch();
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <AddTaskBtn
        type="button"
        onClick={() => {
          dispatch(openModal());
        }}
      >
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
