import PropTypes from 'prop-types';
import { useId } from 'react';
import {
  TitleContainer,
  Title,
  AddTaskBtn,
  IconAdd,
} from './ColumnHeadBar.styled';
import useGetOwnReview from '../../../hooks/useGetOwnReview.js';

const ColumnHeadBar = ({ title, handleShowModal }) => {
  const { onOpenModal } = useGetOwnReview();
  const openModalId = useId();

  return (
    <TitleContainer>
      <Title>{title}</Title>
      <AddTaskBtn
        type="button"
        onClick={() => {
          onOpenModal(openModalId);
        }}
      >
        <IconAdd onClick={handleShowModal} />
      </AddTaskBtn>
    </TitleContainer>
  );
};

export default ColumnHeadBar;

ColumnHeadBar.propTypes = {
  title: PropTypes.string.isRequired,
  //handleShowModal: PropTypes.func.isRequired,
};
