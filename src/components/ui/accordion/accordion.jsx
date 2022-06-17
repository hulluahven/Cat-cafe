import React, { useState } from "react";
import AccordionItem from "./accordion-item";
import { Ul } from "/src/components/styley";
import { StyledLi } from "./styled";

export function Accordion({
  titleComponent, // компонент для отрисовки заголовка
  textComponent, // компонент для отрисовки текста
  content, // массив, содержащий контент аккордеона
  isHtml // есть ли HTML в тексте
}) {
  const [openItemIndex, setOpenItemIndex] = useState(null);
  return (
    <Ul>
      {content.map((item, index) => (
        <StyledLi key={item.id}>
          <AccordionItem
            titleComponent={titleComponent}
            textComponent={textComponent}
            title={item.title}
            text={item.description}
            open={index === openItemIndex}
            onClick={() => {
              setOpenItemIndex(index !== openItemIndex ? index : null);
            }}
            isHtml={isHtml}
          />
        </StyledLi>
      ))}
    </Ul>
  );
}

export default AccordionItem;
// Компонент Accordion будет выводить список AccordionItem
// на основе переданных через props данных,
// а также будет хранить состояние раскрытого элемента аккордеона:
