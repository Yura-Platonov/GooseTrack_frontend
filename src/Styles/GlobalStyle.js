import { createGlobalStyle } from 'styled-components';

export const theme = {
  dark: {
    title: '#FFF',//text 1, text 3, title, date_btn_active_text,activeLink_text,nfp_message,
    text_2: 'rgba(250, 250, 250, 0.3)', //  text_4, text_6, text_7, text_8
    text_5: 'rgba(250, 250, 250, 0.9)',
    title_2: '#111',
    main_bg: 'rgba(23, 24, 32, 1)', // task_bg , task_modal_bg, task_modal_border, input_bg,disabled_btn
    page_bg: '#21222C',//feedback_light_btn
 
    date_btn_active: 'rgba(62, 133, 243, 1)', //addtask_btn
 
    bg_1: 'rgba(19, 21, 26, 1)',//main_border
    activeLink_bg: '#3E85F3',
    scroll_bar: 'rgba(45, 48, 55, 1)',
    
    date_btn: 'rgba(33, 34, 44, 1)', //statistics_bg ,scroll_bar_track
    tabl_border: 'rgba(255, 255, 255, 0.15)',//input_border,input_border_2
    
    close_btn: 'rgba(255, 255, 255, 0.6)',
    

 
  },
  light: {
    text_1: 'rgba(52, 52, 52, 0.5)', //text_2, text_4
    text_3: 'rgba(52, 52, 52, 1)',//text_5, text_6, 
    
    title: '#111', //text_7 
    text_8: 'rgba(52, 52, 52, 0.8)',
    
    main_bg: 'rgba(247, 246, 249, 1)',//task_bg, 
    page_bg: '#FFF',//task_modal_bg, title_2б bg_1,statistics_bg

    task_modal_border: 'rgba(220, 227, 229, 0.8)',
    date_btn: 'rgba(227, 243, 255, 1)',
    date_btn_active: 'rgba(202, 232, 255, 1)',
    date_btn_active_text: 'rgba(62, 133, 243, 1)',
    addtask_btn: 'rgba(227, 243, 255, 1)',
    activeLink_text: 'rgba(62, 133, 243, 1)',
    activeLink_bg: '#e3f3ff',
    scroll_bar: 'rgba(231, 229, 229, 1)',
    scroll_bar_track: 'rgba(242, 242, 242, 1)',
    main_border: 'rgba(220, 227, 229, 0.5)',
    tabl_border: '#dce3e580',
    input_border: 'rgba(246, 246, 246, 1)',//input_bg
    input_border_2: 'rgba(17, 17, 17, 0.15)',
    close_btn: 'rgba(62, 133, 243, 1)',
    feedback_light_btn: '#E5EDFA',//disabled_btn
    
    nfp_message: 'rgba(17, 17, 17, 0.7)',
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