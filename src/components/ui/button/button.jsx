// import React from "react";
import React, { forwardRef } from "react";
// import "./style.css";
import { StyledButton } from "./styles";

// function Button({ children, minWidth }) {
//   return (
//     <button type="button" style={{ minWidth: minWidth }} className="button">
//       {children}
//     </button>
//   );
// }
// подключим forwardRef т.к. только так
// В отличие от styled-компонентов, обычные React-компоненты не умеют пробрасывать ref до HTML-элементов,
const Button = forwardRef(
  ({ children, minWidth, link, className, onClick, ...props }, ref) => {
    return (
      <StyledButton
        {...props}
        ref={ref}
        $minWidth={minWidth}
        {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
        className={className}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
// Далее стилизуем Button внутри слайдера и через ref свяжем его со Swiper:
// Ш13 приложение просто будет выводить пользователю данные о покупке через alert.

// Чтобы обрабатывать нажатия на кнопку,
// добавим в компонент Button возможность через
// props передавать обработчик onClick:
