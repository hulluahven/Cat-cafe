// import React from "react";
// import "./style.css";

// export const TitleSize = {
//   BIG: "big",
//   SMALL: "small",
//   DEFAULT: ""
// };

// function Title({ children, size }) {
//   return <h1 className={`title${size ? ` title_${size}` : ""}`}>{children}</h1>;
//   /* здесь передаем в класс заг-ка прив. к строке с пом. тернарн.оп. в зав от того
//   какой записан в класс параметр размера => он подставит и приведет к строке выбранный тип
//   и буд выбр заг-к с нужн className => нужн размер
//   Внимательно с пробелами в рамках приведения к строке напр ` title_${size}`
//   читай: класс title(и)(пробел)title_(размер)= class="title title_big(small)(default)"
// */
// }

// export default Title;
import React from "react";
import { StyledTitle } from "./styled";

export const TitleSize = {
  BIG: "big",
  SMALL: "small",
  DEFAULT: ""
};

export const TitleLevel = {
  H1: "1",
  H2: "2",
  H3: "3",
  H4: "4",
  H5: "5",
  H6: "6"
};

// Заголовок
function Title({
  level = 1, // уровень h1, h2 и другие. TitleLevel
  size, // размер заголовка TitleSize
  children, // дочерний элемент, который будет отображён в заголовке
  className
}) {
  return (
    <StyledTitle as={`h${level}`} $size={size} className={className}>
      {children}
    </StyledTitle>
  );
}

export default Title;
// Теперь Title принимает props level, который позволяет указать уровень заголовка.
// +необх в компон-ах расст-ть уровни