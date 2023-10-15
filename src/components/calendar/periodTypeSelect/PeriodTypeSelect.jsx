import { TypeContainer, MonthBtn, DayBtn } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ typeDateDay, setType }) => {
  return (
    <TypeContainer>
      <MonthBtn active = {!typeDateDay}
        onClick={() => {
          setType(false);
        }}
      >
        Month
      </MonthBtn>
      <DayBtn active = {typeDateDay}
        onClick={() => {
          setType(true);
        }}
      >
        Day
      </DayBtn>
    </TypeContainer>
  );
};

export default PeriodTypeSelect;
