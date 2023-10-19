import { AddBtnContainer, IconAdd, NameBtn } from './AddTaskBtn.styled';
import PropTypes from 'prop-types';

const AddTaskBtn = ({ onClick }) => {
  return (
    <AddBtnContainer type="button" onClick={onClick}>
      <IconAdd />
      <NameBtn>Add task</NameBtn>
    </AddBtnContainer>
  );
};

AddTaskBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddTaskBtn;
