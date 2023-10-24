import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice.js';
import { AddBtnContainer, IconAdd, NameBtn } from './AddTaskBtn.styled';

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

export default AddTaskBtn;
