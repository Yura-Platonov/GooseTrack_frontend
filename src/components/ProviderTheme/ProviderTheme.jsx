import { theme } from '../../Styles/GlobalStyle.js';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
export const ProviderTheme = ({ children }) => {
  const { dark, light } = theme;
  const [themeState, setThemeState] = useState(light);
  const themeInterface = useSelector(state => state.auth.user.themeInterface);

  useEffect(() => {
    setThemeState(themeInterface === 'light' ? light : dark);
  }, [themeInterface, dark, light]);

  return <ThemeProvider theme={themeState}>{children}</ThemeProvider>;
};