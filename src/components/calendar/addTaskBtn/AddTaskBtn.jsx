import { AddBtnContainer, IconAdd, NameBtn } from './AddTaskBtn.styled';

const AddTaskBtn = ({ idGroup }) => {
  return (
    <AddBtnContainer>
      <IconAdd />
      <NameBtn>Add task</NameBtn>
    </AddBtnContainer>
  );
};

export default AddTaskBtn;
