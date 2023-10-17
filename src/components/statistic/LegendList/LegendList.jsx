import {
  ByDateDot,
  ByMonthDot,
  ListItem,
  ListWrapper,
  Text,
} from './LegendList.styled';

const LegendList = () => {
  return (
    <ListWrapper>
      <ListItem>
        <ByDateDot />
        <Text>By Date</Text>
      </ListItem>
      <ListItem>
        <ByMonthDot />
        <Text>By Month</Text>
      </ListItem>
    </ListWrapper>
  );
};

export default LegendList;
