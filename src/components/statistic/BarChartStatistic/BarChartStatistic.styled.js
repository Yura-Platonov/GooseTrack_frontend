import styled from 'styled-components';

export const StyledBarChart = styled.div`
  font-family: var(--main-font);
  color: var(--user-panel-text);
  font-style: 'normal';
  font-weight: '500';

  @media (max-width: 767px) {
    font-size: 12px;
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;
