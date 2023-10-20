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

export const TaskColumnCard = (data, title) => {
  const { description, avatarUrl, priority } = data;
  return (
    <Container>
      <TaskTitle line={1} element="h4" truncateText="..." text={task.title} />
      <Wrapper>
        <Wrapper>
          <TaskAvatarWrapper>
            {avatarUrl ? (
              <AvatarImg src={avatarUrl} alt="User Avatar" />
            ) : (
              <SvgAvatar />
            )}
          </TaskAvatarWrapper>
          <TaskPriority style={{ backgroundColor: getPriorityColor(priority) }}>
            {priority}
          </TaskPriority>
        </Wrapper>
        <Toolbar task={data} title={title} />
      </Wrapper>
    </Container>
  );
};

const getPriorityColor = (priority) => {
  if (priority === 'high') return '#EA3D65';
  if (priority === 'medium') return '#F3B249';
  if (priority === 'low') return '#72C2F8';
};
