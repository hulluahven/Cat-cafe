import React from "react";
import Logo from "/src/components/ui/logo/logo";
// import "./style.css";
import { StyledSection, Copyright } from "./styles";

// function Footer() {
//   return (
//     <footer className="footer">
//       <Logo />
//       <span className="footer__copyright">Создано в 2021</span>
//     </footer>
//   );
// }
function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Создано 2021</Copyright>
    </StyledSection>
  );
}

export default Footer;
