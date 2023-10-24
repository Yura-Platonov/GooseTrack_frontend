import { TaskForm } from '../TaskForm/TaskForm';
import PropTypes from 'prop-types';
import { Button, CloseSvg, ModalContent } from '../Modal.styled.js';
import useDeleteOwnReview from '../../../hooks/useDeleteOwnReview.js';
import { Modal } from '../Modal.jsx';

export const TaskModal = ({ task, status, ...props }) => {
  const { onCloseModal } = useDeleteOwnReview();

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
      <TaskForm task={task} status={status} {...props} />
    </ModalContent>
  );
};

TaskModal.propTypes = {
  task: PropTypes.object,
  status: PropTypes.string,
};
