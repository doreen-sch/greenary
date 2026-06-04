import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --primary-off-white: #fdf9f5;
  --secondary-off-white: #fffbf8;
  --primary-green-50: #EFFED8;
  --primary-green-100: #d6eab7;
  --primary-green-200: #c4e391;
  --primary-green-300: #BDFB5C;
  --primary-green-400:  #98cc49;
  --primary-green-500: #82cf10;
  --primary-green-600: #75b811;
  --primary-green-700: #548803;
  --primary-green-800: #355602;
  --primary-green-900: #162401;
  --secondary-green-50: #FDFFF6;
  --secondary-green-100-rgb: 247, 254, 221;
  --secondary-green-200-rgb: 236, 253, 171;
  --secondary-green-300: #c9e077;
  --secondary-green-400: #bed85e;
  --secondary-green-500: #a2c231;
  --secondary-green-600: #97bd10;
  --secondary-green-700: #759309;
  --secondary-green-800: #516606;
  --secondary-green-900: #2e3a04;
  --primary-red-50: #f9f5f2;
  --primary-red-100: #FADDCC;
  --primary-red-200: #F6BD9D;
  --primary-red-300: #F29E6E;
  --primary-red-400: #ED7F40;
  --primary-red-500: #E56115;
  --primary-red-600: #B64D11;
  --primary-red-700: #87390D;
  --primary-red-800: #592608;
  --primary-red-900: #2A1204;
  --secondary-red-50: #FEFBFB;
  --secondary-red-100: #F7EBE8;
  --secondary-red-200: #EAC9C2;
  --secondary-red-300: #DCA89D;
  --secondary-red-400: #CF8777;
  --secondary-red-500: #C26651;
  --secondary-red-600: #A64E3A;
  --secondary-red-700: #803C2D;
  --secondary-red-800: #5A2A20;
  --secondary-red-900: #351912;
  --primary-grey-50: #EDEDED;
  --primary-grey-100: #E0E0E0;
  --primary-grey-200: #C6C7C6;
  --primary-grey-300: #ACAEAC;
  --primary-grey-400: #929592;
  --primary-grey-500: #797B79;
  --primary-grey-600: #5F625F;
  --primary-grey-700: #464846;
  --primary-grey-800: #2D2E2D;
  --primary-grey-900: #141414;
  --header-height: 5rem;

}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-comfortaa);
}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding-top: calc(var(--header-height) + 0.5rem);
    font-family: system-ui;
    background-color: var(--primary-off-white);
  }
`;
