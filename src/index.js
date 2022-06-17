import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "/src/components/app/App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme/default";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    {/* Теперь в index.js с помощью  */}
    {/* ThemeProvider обернём App в созданную тему: */}
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
