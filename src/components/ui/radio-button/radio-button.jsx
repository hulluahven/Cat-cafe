import React from "react";
import styled from "styled-components";
import { VisuallyHiddenInput } from "/src/components/styley";

const Label = styled.label`
  display: block;
`;

// Радиокнопка
function RadioButton({
  labelComponent, // компонент для отображения label
  selectValue, // выбранное значение
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;
  const isChecked = value === selectValue;

  return (
    <Label>
      <VisuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={onChange}
        {...props}
        type="radio"
      />
      <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
    </Label>
  );
}

export default RadioButton;
// Внутри есть компонент Label, который и будет отображён.
// Внутри Label также рендерится компонент LabelComponent,
// переданный через Props.
// LabelComponent позволяет переиспользовать RadioButton в любом месте,
// где нужна радиокнопка, вне зависимости от того,
// как он выглядит в макете.
// В результате мы можем использовать RadioButton для отображения
// количества выбранной продолжительности посещения,
// передав LabelComponent, который будет рендериться
// оранжевыми квадратами.
// И в то же время его можно использовать,
// например, в списке выбора билета,
// передав в него другой LabelComponent.
// В результате RadioButton хранит логику
// работы чекбокса,
// а за его отображение отвечает компонент,
// переданный в LabelComponent.

// RadioButton — это управляемый компонент,
// поэтому он принимает isChecked и onChange.
