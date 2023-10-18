import ColumnHeadBar from '../columnHeadBar/ColumnHeadBar';
import AddTaskBtn from '../addTaskBtn/AddTaskBtn';
import { ColumnContainer } from './TasksColumn.styled';

const TasksColumn = ({ title, collection }) => {
  return (
    <ColumnContainer>
      <ColumnHeadBar title={title} idGroup={''} />
      <AddTaskBtn idGroup={''} />
    </ColumnContainer>
  );
};

export default TasksColumn;
