import ReactDOM from 'react-dom';
import { TaskForm } from '../TaskForm/TaskForm';
import PropTypes from 'prop-types';
import { Button, CloseSvg, ModalContent } from '../Modal.styled.js';
import useDeleteOwnReview from '../../../hooks/useDeleteOwnReview.js';
import Modal from '../Modal.jsx';
import { isOpenSelector } from '../../../redux/modal/selectors';


export const TaskModal = ({ openMoalId, task, status, ...props }) => {
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
        <TaskForm
          openMoalId={openMoalId}
          task={task}
          status={status}
          {...props}
        />
      </ModalContent>
    </Modal>,
    document.getElementById('portal'),
  );
};

TaskModal.propTypes = {
  task: PropTypes.object,
  status: PropTypes.string,
};
