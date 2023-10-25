import { lightTheme, darkTheme } from '../theme';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
export const ProviderTheme = ({ children }) => {
  const [themeState, setThemeState] = useState(lightTheme);
  const theme = useSelector(state => state.auth.user.theme);

  useEffect(() => {
    setThemeState(theme === 'lightTheme' ? lightTheme : darkTheme);
  }, [theme, darkTheme, lightTheme]);

  return <ThemeProvider theme={themeState}>{children}</ThemeProvider>;
};