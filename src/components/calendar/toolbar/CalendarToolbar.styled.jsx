import styled from '@emotion/styled';

export const Toolbar = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 24px;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    display: flex;
    margin-bottom: 32px;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
