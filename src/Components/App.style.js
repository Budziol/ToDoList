import { createGlobalStyle } from "styled-components";
import NotoSansRegular from "../fonts/NotoSans-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face{
    font-family: "NotoSans";
  src: local("NotoSans"), url(${NotoSansRegular}) format("truetype");
  font-weight: 100;
}

:root{
    --bg-gradient: linear-gradient(-45deg, rgba(231,216,201,1) 0%, rgba(231,216,201,0.85) 85%);
    --list-container-bg-color: #EEE4E1;
    --font-size-xl: 2.25rem;
    --font-size-medium: 1.125rem;
    --neumorphism: -3px -3px 7px #ffffffb2, 3px 3px 5px rgba(94, 104, 121, 0.945);
    --container-border: 1.563rem;
    --container-content-border: 0.313rem;
    --container-content-padding: 0 0.625rem;
    --button-wid-hei: 1.875rem;
    --icon-fs: 1.125rem;
    --header-position: 1.563rem;
    --flex-gap: 0.625rem;
}

*:focus {
    outline: none;
}

body {
    margin: 0;
    padding: 0;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    background: var(--bg-gradient);
    min-width: 100vw;
    min-height: 100vh;
}

*{
    margin: 0;
    padding: 0;
}
`;
