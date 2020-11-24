/**
 * An example of how to use global styles with styled-components
 * */

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = () => <Styles />;

export default GlobalStyles;

const Styles = createGlobalStyle`
  body {
    background-color: #efefef;
  }

  a {
    color: coral;
    :hover {
      color: cornflowerblue;
    }
  }
`;
