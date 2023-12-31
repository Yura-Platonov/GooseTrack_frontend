import { createGlobalStyle, styled } from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export const CalendarGlobalStyles = createGlobalStyle`
  .react-datepicker__wrapper {
    position: relative ;
  }
  .react-datepicker {
    position: absolute !important;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex !important;
    flex-direction: column;
    align-items: center;
    width: 327px;
    height: 354px;
    padding: 9px 18px;
    background-color: #3e85f3 !important;
    font-family: Inter !important;
    border-radius: 16px !important;
    @media screen and (min-width: 768px){
        width: 373px;
        height: 354px;
    }
  }
  .react-datepicker__month-container {
    float: inherit !important;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #3e85f3 !important;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none !important;
    border: none !important;
}
  .react-datepicker__current-month {
    font-family: Inter;
    font-size: 20px !important;
    font-style: normal;
    font-weight: 600 !important;
    line-height: 24px;
    text-align: center;
    color: #ffffff !important;
  }
  .react-datepicker__day-name {
    margin: 0 !important;
   padding: 8px 8px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px !important;
    text-align: center !important;
    color: #ffffff !important;
  }
  .react-datepicker__navigation {
    margin-top: 24px;
    color: #ffffff;
  }
  .react-datepicker__navigation--previous {
    left: 7px !important;
    width: 18px !important;
    height: 18px !important;
  }
  .react-datepicker__navigation--next {
    right: 7px !important;
    width: 18px !important;
    height: 18px !important;
  }
  .react-datepicker__navigation-icon::before:hover:focus {
    border-color: #ffffff;
  }
  .react-datepicker__week {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    color: #ffffff !important;
  }
  .react-datepicker__day {
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 8px !important;
    flex-shrink: 0 !important;
    margin: 0 !important;
    width: 32px !important;
    height: 32px !important;
    border-radius: 50% !important;
    color: #ffffff !important;
    font-family: Inter !important;
    font-size: 14px !important;
    font-style: normal !important;
    font-weight: 400 !important;
    line-height: 18px !important;
    text-align: center !important;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 16px;
    margin: 0 !important;
  }
  .react-datepicker__day--selected {
    background-color: #ffffff;
    color: #3e85f3;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50% !important;
  background-color: #ffffff !important;
  }
  .react-datepicker__day:hover {
    border-radius: 50% !important;
    background-color: #ffffff !important;
    color:var(--blue) !important;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50% !important;
    background-color: #ffffff !important;
    color:var(--blue) !important;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px !important;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
  .react-datepicker__aria-live {
  display: none;
}
`;

export const TitleWrapper = styled.button`
  display: flex;
  width: 160px;
  height: 30px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  border-color: transparent;
  font-family: Inter;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 6px 12px;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 34px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;

export const PeriodContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) {
    width: 400px;
    margin-bottom: 0;
  }
`;

export const PeriodBtnContainer = styled.div`
  margin-left: auto;
  @media screen and (min-width: 768px) {
    margin-left: 8px;
  }
`;

export const PrevBtn = styled.button`
  width: 36px;
  height: 30px;
  padding: 4px 4px;
  border: 1px solid var(--background-table);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: var(--white);
  transition: var(--transition);
  fill: var(--change-date-btn);
  &:hover {
    fill: var(--user-panel-text);
  }
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;
export const NextBtn = styled.button`
  width: 36px;
  height: 30px;
  padding: 4px 4px;
  border: 1px solid var(--background-table);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: var(--white);
  transition: var(--transition);
  fill: var(--change-date-btn);
  &:hover {
    fill: var(--user-panel-text);
  }
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 34px;
  }
`;

export const IconForward = styled(IoIosArrowForward)`
  fill: inherit;
  &:hover {
    fill: inherit;
  }
`;

export const IconBack = styled(IoIosArrowBack)`
  fill: inherit;
  &:hover {
    fill: inherit;
  }
`;
