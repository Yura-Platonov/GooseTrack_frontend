import { Button, List, Item } from './TaskToolbar.styled';
import { BsArrowRightCircle } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import { CiTrash } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../../../redux/task/operations';
import { Menu } from './Menu';
import PropTypes from 'prop-types';
import { Popup } from 'reactjs-popup';
import { editTask } from '../../../redux/task/operations';
import { setIsOpen } from '../../../redux/modal/modalSlice';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';
import Modal from '../../Modal/Modal';
import { EditModal } from '../../Modal/editModal/editModal';

export const TaskToolbar = ({ title, task }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteTask(task._id));
  const { onOpenModal } = useGetOwnReview();
  const { checkIsOpen } = useGetOwnReview();
  const isOpen = checkIsOpen('modal2');
  return (
    <List>
      <Item>
        <Popup
          arrow={false}
          trigger={
            <Button type="button">
              <BsArrowRightCircle />
            </Button>
          }
          position="bottom center"
          on="click"
          closeOnDocumentClick
          closeOnEscape
          lockScroll
        >
          {(close) => <Menu task={task} toggleMenu={close} />}
        </Popup>
      </Item>
      <li>
        <Button
          type="button"
          onClick={() => {
            onOpenModal('modal2');
          }}
        >
          <BiPencil />
        </Button>
        {isOpen && (
          <Modal>
            <EditModal />
          </Modal>
        )}
      </li>
      <li>
        <Button type="button" onClick={onDelete}>
          <CiTrash />
        </Button>
      </li>
    </List>
  );
};

TaskToolbar.propTypes = {
  // toggleModal: PropTypes.func.isRequired,
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }).isRequired,
};
