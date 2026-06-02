import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

:root {
  --off-white: #fdfbf9;
  --primary-green-50: #EFFED8;
  --primary-green-100: #E5FEBF;
  --primary-green-200: #D1FC8E;
  --primary-green-300: #BDFB5C;
  --primary-green-400:  #A8FA2A;
  --primary-green-500: #91EC05;
  --primary-green-600: #72BA04;
  --primary-green-700: #548803;
  --primary-green-800: #355602;
  --primary-green-900: #162401;
  --secondary-green-50: #FDFFF6;
  --secondary-green-100: #F7FEDD;
  --secondary-green-200: #ECFDAB;
  --secondary-green-300: #E0FD78;
  --secondary-green-400: #D5FC46;
  --secondary-green-500: #C9FB14;
  --secondary-green-600: #ABD804;
  --secondary-green-700: #83A603;
  --secondary-green-800: #5B7402;
  --secondary-green-900: #344201;
  --primary-red-50: #faf4f0;
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

}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: var(--primary-red-50);
  }
`;
