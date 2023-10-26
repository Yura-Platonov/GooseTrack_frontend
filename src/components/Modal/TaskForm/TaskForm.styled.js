import styled from 'styled-components';

export const Form = styled.form`
  min-width: 246px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  color: var(--primary-text-color);

  @media (min-width: 375px) {
    width: 267px;
  }

  @media (min-width: 768px) {
    width: 396px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: var(--label-text-color);
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const Span = styled.span`
  margin-bottom: 8px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  color: var(--label-text-color);
`;

export const Input = styled.input`
  height: 42px;
  padding: 14px;

  outline: none;
  background-color: var(--form-textarea);
  border: var(--border-dark-theme);
  border-radius: 8px;
  font-family: var(--main-font);
  color: --user-panel-text;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;

  @media (min-width: 768px) {
    height: 46px;
  }

  &::placeholder {
    color: var(--user-panel-text);
  }
`;

export const Errors = styled.span`
  min-height: 14px;
  margin-top: 4px;
  margin-bottom: 2px;
  color: red;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;

  @media (min-width: 768px) {
    margin-bottom: 4px;
  }
`;

export const Btn = styled.button`
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  padding: 14px;
  background-color: var(--blue);
  box-shadow: var(--shadow-btn);
  border-radius: 8px;
  border: none;
  color: var(--white);
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  transition: var(--transition);

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color: var(--hover);
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`;

export const ButtonCancel = styled.button`
  width: 100%;
  height: 42px;
  padding: 12px;
  column-gap: 12px;
  background: var(--task-btn-cancel-bg-color);
  border-radius: 8px;
  border: none;
  text-align: center;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  transition: var(--transition);

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
  }

  @media (min-width: 768px) {
    height: 48px;
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  fill: none;
  stroke: #ffffff;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 14px;
  justify-content: space-between;
`;

export const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  padding-bottom: 20px;
`;

export const RadioButtonLabel = styled.label`
  padding-left: 20px;
  font-family: var(--main-font);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.17;
  color: var(--user-panel-text);
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.29;
  }
`;

export const RadioButtonInput = styled.input`
  appearance: none;
  position: absolute;
  height: 0;
  width: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: -17px;
    border-radius: 50%;
    height: 12px;
    width: 12px;

    @media (min-width: 768px) {
      height: 14px;
      width: 14px;
      top: 2px;
      left: -20px;
    }

    /* color: ; */
    ${({ priority }) => {
      switch (priority) {
        case 'low':
          return 'background-color: var(--day-status-low); color: var(--task-priority-low-checked-color); border-color: var(--day-status-low)';
        case 'medium':
          return 'background-color: var(--day-status-medium); color: var(--task-priority-medium-checked-color)';
        case 'high':
          return 'background-color: var(--day-status-high); color: var(--task-priority-high-checked-color)';
        default:
          return 'background-color: var(--day-status-low); color: var(--task-priority-low-checked-color); color: var(--day-status-low)';
      }
    }}
  }

  &:checked::before {
    content: '';
    position: absolute;
    height: 12px;
    width: 12px;
    color: red;
    outline: 2px solid;

    @media (min-width: 768px) {
      height: 14px;
      width: 14px;
    }
  }
`;
