import styled from '@emotion/styled';

export const ColumnsContainer = styled.ul`
  display: flex;
  width: 100%;
  min-height: 100%;
  gap: 16px;
  overflow: auto hidden;
  scroll-snap-type: x mandatory;
  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;
