import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice.js';
import { AddBtnContainer, IconAdd, NameBtn } from './AddTaskBtn.styled';
import PropTypes from 'prop-types';

const AddTaskBtn = () => {
  const dispatch = useDispatch();
  return (
    <AddBtnContainer
      type="button"
      onClick={() => {
        dispatch(openModal());
      }}
    >
      <IconAdd />
      <NameBtn>Add task</NameBtn>
    </AddBtnContainer>
  );
};

// AddTaskBtn.propTypes = {
//   onClick: PropTypes.func.isRequired,
// };

export default AddTaskBtn;
