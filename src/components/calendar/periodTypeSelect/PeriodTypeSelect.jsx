import PropTypes from 'prop-types';
import { TypeContainer, MonthBtn, DayBtn } from './PeriodTypeSelect.styled';

const PeriodTypeSelect = ({ typeDay, setType }) => {
  return (
    <TypeContainer>
      <MonthBtn
        active={!typeDay}
        onClick={() => {
          setType(false);
        }}
      >
        Month
      </MonthBtn>
      <DayBtn
        active={typeDay}
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

PeriodTypeSelect.propTypes = {
  typeDay: PropTypes.bool.isRequired,
  setType: PropTypes.func.isRequired,
};
