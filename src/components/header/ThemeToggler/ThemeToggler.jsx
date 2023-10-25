import { useDispatch, useSelector } from 'react-redux';
import { MoonSVG, SunSVG, ButtonToggle } from './ThemeToggler.styled';
import { toggleTheme } from '../../../redux/auth/operations';

export const ThemeToggler = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.auth.user.theme);

  function handlerClick() {
    dispatch(toggleTheme());
  }


  return (
    <ButtonToggle onClick={handlerClick}>
      {theme === 'lightTheme' && <SunSVG />}
      {theme === 'darkTheme' && <MoonSVG />}
    </ButtonToggle>
  );
};