import styled from 'styled-components';

export const Button = styled.button`
  /* padding: 12px 32px;
  color: var(--white);
  background-color: var(--blue);
  border-radius: 14px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.06em;
  font-weight: 600;
  border: none;
  text-shadow: var(--text-shadow);
  box-shadow: var(--box-shadow);
  transition: var(--transition); */
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border: 0px;
  background: var(--blue);
  color: var(--white);
  padding: 8px 20px;
  border-radius: 10px;
  margin-right: 18px;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33;
  text-shadow: var(--text-shadow);
  box-shadow: var(--box-shadow);
  transition: var(--transition);

  &:hover {
    color: var(--black);
    box-shadow: var(--box-shadow-hover);
  }
  @media (min-width: 768px) {
    padding: 12px 32px;
    border-radius: 14px;
    margin-right: 24px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.28;
  }
`;
