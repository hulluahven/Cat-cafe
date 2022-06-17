/* @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

html {
  height: 100%;
}

body,
html {
  margin: 0;
}

body {
  position: relative;
  min-height: 100%;
  font-family: "Inter", "Arial", sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  color: #333333;
} */

/* мы используем style.css, 
чтобы задать стили <html> и <body>. 
Заменим его на файл styles.js, 
в котором с помощью createGlobalStyle 
создадим стилизованный
компонент с глобальными стилями приложения: */

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};
    /* width: ${(props) => props.theme.pageWidth}; */
  }
`;

// Вставим компонент глобальных стилей в JSX у App:
