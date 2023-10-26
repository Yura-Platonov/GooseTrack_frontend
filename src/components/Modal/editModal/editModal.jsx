import ReactDOM from 'react-dom';
import { EditForm } from '../editForm/editForm';
import PropTypes from 'prop-types';
import { Button, CloseSvg, ModalContent } from '../Modal.styled.js';
import useDeleteOwnReview from '../../../hooks/useDeleteOwnReview.js';
import Modal from '../Modal.jsx';

export const TaskModal = ({ task, status, ...props }) => {
  const { onCloseModal } = useDeleteOwnReview();
  return ReactDOM.createPortal(
    <Modal>
      <ModalContent>
        <Button
          type="button"
          onClick={() => {
            onCloseModal('modal2');
          }}
        >
          <CloseSvg />
        </Button>
        <EditForm task={task} status={status} {...props} />
      </ModalContent>
    </Modal>,
    document.getElementById('portal'),
  );
};

TaskModal.propTypes = {
  task: PropTypes.object,
  status: PropTypes.string,
};
