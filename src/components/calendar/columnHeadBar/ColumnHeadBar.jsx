import {
  TitleContainer,
  Title,
  AddTaskBtn,
  IconAdd,
} from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ title, handleShowModal }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <AddTaskBtn>
        <IconAdd onClick={handleShowModal} />
      </AddTaskBtn>
    </TitleContainer>
  );
};

export default ColumnHeadBar;
