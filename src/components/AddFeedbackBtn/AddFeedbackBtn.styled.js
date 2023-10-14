import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 32px;
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
  transition: var(--transition);

  &:hover {
    color: var(--black);
    box-shadow: var(--box-shadow-hover);
  }
`;
