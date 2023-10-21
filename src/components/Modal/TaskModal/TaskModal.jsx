import { TaskForm } from '../TaskForm/TaskForm';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../../redux/modal/modalSlice.js';
import PropTypes from 'prop-types';
import { Button, CloseSvg, ModalContent } from '../Modal.styled.js';

export const TaskModal = ({ task, status, ...props }) => {
  const dispatch = useDispatch();

  return (
    <ModalContent>
      <Button
        type="button"
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <CloseSvg />
      </Button>
      <TaskForm task={task} status={status} {...props} />
    </ModalContent>
  );
};

TaskModal.propTypes = {
  task: PropTypes.object,
  status: PropTypes.string,
};
