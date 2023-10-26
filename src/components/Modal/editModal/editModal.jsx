import ReactDOM from 'react-dom';
import { EditForm } from '../editForm/editForm';
import PropTypes from 'prop-types';
import { Button, CloseSvg, ModalContent } from '../Modal.styled.js';
import useDeleteOwnReview from '../../../hooks/useDeleteOwnReview.js';
import Modal from '../Modal.jsx';

export const EditModal = ({ openMoalId, taskId, task, status, ...props }) => {
  console.log(taskId);
  const { onCloseModal } = useDeleteOwnReview();

  return ReactDOM.createPortal(
    <Modal>
      <ModalContent>
        <Button
          type="button"
          onClick={() => {
            onCloseModal(openMoalId);
          }}
        >
          <CloseSvg />
        </Button>
        <EditForm
          task={task}
          taskId={taskId}
          openMoalId={openMoalId}
          status={status}
          {...props}
        />
      </ModalContent>
    </Modal>,
    document.getElementById('portal'),
  );
};

EditModal.propTypes = {
  task: PropTypes.object,
  status: PropTypes.string,
};
