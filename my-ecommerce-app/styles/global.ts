import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;

    /* colors */
    --primary: #012058;
    --primary50: #1D4386;
    --primary100: #69BBFF;
    --secondary: #D5FEF2;
    --shape: #FFFFFF;
    --activeButton: #F9FAFB;
    --background: #fafafa;
    --grey0: #F5F5F5;
    --grey20: #E0E0E0;
    --grey30: #cccccc;
    --grey50: #828282;
    --grey70: #6C6C6C;
    --grey100: #333333;
    --transparent: rgba(51,51,51,0.1);
    --negative: #F72C2C;
    --warning: #FFCD07;
    --sucess: #168821;
    --information: #155BCB;

    /* fonts */
    --fSize1: 1.625rem;
    --fSize2: 1.375rem;
    --fSize3: 1.125rem;
    --fSize4: 1rem;
    --fSize5: 0.875rem;
    --fSize6: 0.75rem;
    --fSize7: 0.7rem;

    /* typs-fonts */
    --small: 300;
    --regular: 400;
    --semi: 500;
    --semiBold: 600;
    --bold: 700;
  }

  body {
    width: 100%;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
