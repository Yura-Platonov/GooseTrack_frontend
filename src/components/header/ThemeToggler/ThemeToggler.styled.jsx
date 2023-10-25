import styled from 'styled-components';
import { ReactComponent as Moon } from '../../../images/toggleTheme/moon.svg';
import { ReactComponent as Sun } from '../../../images/toggleTheme/sun.svg';


export const MoonSVG = styled(Moon)``;
export const SunSVG = styled(Sun)``;
export const ButtonToggle = styled.button`
  outline: none;
  border: 0;
  margin: 0;
  padding: 0;
  background-color: inherit;
  cursor: pointer;

  

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;