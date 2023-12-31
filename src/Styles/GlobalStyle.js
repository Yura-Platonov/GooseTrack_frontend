import { createGlobalStyle } from 'styled-components';

export const theme = {
  dark: {
    
    

 
  },
  light: {
    
  },
};
export const variables = {
  colors: {
    primary: '#3E85F3',
    secondary: '#2B78EF',
    lightBlue: '#E3F3FF',
    darkBlue: '#CAE8FF',
    bgBlue: '#DCEBF7',
    background: '#FFFFFF',
    white: '#FFFFFF',
    blackTitle: '#171820',
    black: '#111111',
    text: 'rgba(52, 52, 52, 0.5)',
    mainYellow: '#F3B249',
    lightYellow: '#FCF0D4',
    redError: '#DA1414',
    redErrorLight: '#E74A3B',
    statusLow: '#72c2f8',
    mainRed: '#EA3D65',
    lightRed: '#FFD2DD',
    greenValid: '#3CBC81',
    muted: '#F7F6F9',
    closeButton: '#111111',
    lightBlueBackground: '#CEEEFD',
  },

  transitions: {
    standart: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  shadow: { shadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px' },

  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
};

export const GlobalStyle = createGlobalStyle`

body{
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  list-style: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#root {
  transition: color ${variables.transitions.standart}, background-color ${
  variables.transitions.standart
},
    box-shadow ${variables.transitions.standart}, transform ${
  variables.transitions.standart
};
  background: ${props => props.theme.main_bg};
}

p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 0px;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;