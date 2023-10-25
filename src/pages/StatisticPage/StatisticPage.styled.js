import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 16px;
  background: var(--white);
  transition: var(--transition);
  &:hover {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 375px) {
    padding: 14px 14px 135px 14px;
  }
  @media screen and (min-width: 768px) {
    padding: 140px 32px 224px 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 134px 113px 104px 113px;
  }
`;

export const WrapperToolbar = styled.div`
  margin-bottom: 40px;
`;
