import { reset } from './reset';
import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`
  ${reset};
  
  body {
    background-color: ${colors.gray1};
  }
  .a11yHidden {
    clip: rect(0 0 0 0);
    clip-path: polygon(0 0, 0 0, 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default GlobalStyle;
