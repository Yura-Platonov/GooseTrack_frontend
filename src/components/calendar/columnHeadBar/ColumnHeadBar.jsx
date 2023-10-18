import {
  TitleContainer,
  Title,
  AddTaskBtn,
  IconAdd,
} from './ColumnHeadBar.styled';

const ColumnHeadBar = ({ title, idGroup }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <AddTaskBtn>
        <IconAdd />
      </AddTaskBtn>
    </TitleContainer>
  );
};

export default ColumnHeadBar;
