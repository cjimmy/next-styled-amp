/**
 * An example of how to use global styles with styled-components
 * */

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = () => <Styles />;

export default GlobalStyles;

const Styles = createGlobalStyle`
  a {
    color: red;
    :hover {
      color: blue;
    }
  }
`;
