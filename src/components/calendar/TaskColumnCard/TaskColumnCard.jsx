import {
  Container,
  TaskPriority,
  TaskTitle,
  Wrapper,
  TaskAvatarWrapper,
  Toolbar,
  SvgAvatar,
  AvatarImg,
} from './TaskColumnCard.styled';

import { useSelector } from 'react-redux';
import { selectIsLoading, selectUser } from '../../../redux/auth/selectors';

export const TaskColumnCard = ({ task, getTask }) => {
  const { title, priority } = task;

  const isLoading = useSelector(selectIsLoading);
  const userSelector = useSelector(selectUser);
  const name = userSelector?.name || 'Name';
  const avatar = userSelector?.avatarURL;

  return (
    <Container>
      <TaskTitle line={1} element="h4" truncateText="..." text={task.title} />
      <Wrapper>
        <Wrapper>
          <TaskAvatarWrapper>
            {avatar ? (
              <AvatarImg src={avatar} alt="User Avatar" />
            ) : (
              <SvgAvatar />
            )}
          </TaskAvatarWrapper>
          <TaskPriority style={{ backgroundColor: getPriorityColor(priority) }}>
            {priority}
          </TaskPriority>
        </Wrapper>
        <Toolbar getTask={getTask} task={task} />
      </Wrapper>
    </Container>
  );
};

const getPriorityColor = (priority) => {
  if (priority === 'high') return '#EA3D65';
  if (priority === 'medium') return '#F3B249';
  if (priority === 'low') return '#72C2F8';
};
