import { createGlobalStyle } from "styled-components";

import Roboto from "./Roboto.ttf";
import Cabin from "./Cabin.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${Roboto}) format('ttf'),
        url(${Cabin}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
