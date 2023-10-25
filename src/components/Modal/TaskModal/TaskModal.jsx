import { TaskForm } from '../TaskForm/TaskForm';
import PropTypes from 'prop-types';
import { Button, CloseSvg, ModalContent } from '../Modal.styled.js';
import useDeleteOwnReview from '../../../hooks/useDeleteOwnReview.js';

export const TaskModal = ({ task, status, ...props }) => {
  const { onCloseModal } = useDeleteOwnReview();
// console.log(status);зни
  return (
    <ModalContent>
      <Button
        type="button"
        onClick={() => {
          onCloseModal('modal2');
        }}
      >
        <CloseSvg />
      </Button>
      <TaskForm  task={task} status={status} {...props} />
    </ModalContent>
  );
};

TaskModal.propTypes = {
  task: PropTypes.object,
  status: PropTypes.string,
};
