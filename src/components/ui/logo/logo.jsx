// import React from "react";
// import logo from "/src/assets/logo.svg";
// import "./style.css";

// function Logo() {
//   return (
//     <a href="/" className="logo__link">
//       <img src={logo} alt="Логотип" />
//       <span className="logo__text">Котокафе</span>
//     </a>
//   );
// }

// export default Logo;

// При стилизации компонента Logo
// можно через SVGR создать из SVG React-компонент,
// а затем вставить его в JSX.
// В CodeSandbox для этого SVG нужно импортировать
// не по умолчанию import logo from "/src/assets/logo.svg";,
// а использовать именованный импорт
// import { ReactComponent } from "/src/assets/logo.svg;.
// Теперь в ReactComponent будет находиться именно компонент,
// созданный на основе logo.svg, а не путь до logo.svg,
// как в случае с импортом по умолчанию.
import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";

import { Text, StyledLogo } from "./styled";

// Логотип сайта с названием
function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
// здесь это компонент созд на основе лого, а не путь до лого
