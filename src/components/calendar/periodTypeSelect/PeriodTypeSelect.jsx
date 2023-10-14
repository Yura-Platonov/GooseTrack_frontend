import { TypeContainer, MonthBtn, DayBtn } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ setType }) => {
  return (
    <TypeContainer>
      <MonthBtn
        onClick={() => {
          setType(false);
        }}
      >
        Month
      </MonthBtn>
      <DayBtn
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
