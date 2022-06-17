import React, { useState } from "react";
import { Form, Label, Li, Ul } from "/src/components/styley";
import Button from "/src/components/ui/button/button";
import { TitleSize } from "/src/components/ui/title/title";
import { Accordion } from "/src/components/ui/accordion/accordion";
import {
  StyledSection,
  Price,
  FormItem,
  StyleTitle,
  RadioLabelForTime,
  RadioLabelForType,
  AccordionText
} from "./styled";
import RadioButton from "/src/components/ui/radio-button/radio-button";

// страница покупки
function Order({
  // деструктурируем orderOptions
  orderOptions: { durationOptions = [], ticketOptions = [] }
}) {
  // const { durationOptions, ticketOptions } = orderOptions;
  const canBuy = durationOptions.length && ticketOptions.length;
  // заводим переменную сост если билеты есть и данные пришли
  // Внутри Order деструктурируем orderOptions, чтобы получить ticketOptions:
  const [duration, setDuration] = useState(durationOptions[0]);
  // хранить выбранную продолжительность посещения.
  const [selectType, setSelectType] = useState(ticketOptions[0].id);
  // состояние, в котором будем хранить id выбранной опции билета. По умолчанию будет выбрана первая опция из списка:
  const type = ticketOptions.find((option) => option.id === selectType);
  // есть данные о выбранной продолжительности посещения,
  // «duration», и id типа билета, «selectType».
  // На их основе можно сначала найти описание типа билета
  const price = duration * type.price;
  // на основе предыд выссчитываем стоимость билет
  // Создадим контент аккордеона.
  // Для этого каждый элемент ticketOptions
  // приведём к формату, который ожидает компонент Accordion
  // для своего контента
  // преобразуем ticketOptions в данные для акардеона
  const accordionContent =
    canBuy &&
    ticketOptions.map((option) => ({
      id: option.id,
      title: (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectType}
          value={option.id}
          text={option.title}
          onChange={(el) => {
            setSelectType(Number(el.target.value));
          }}
        />
      ),
      description: option.description
    }));
  // id и description будут переданы в аккордеон без изменений,
  //  а вот в заголовке по макету должен быть не просто текст,
  //  а радиокнопка. Поэтому в title будет записан
  //  элемент RadioButton c необходимыми props:
  const handleBuy = () => {
    alert(
      `Спасибо за покупку.
              Вы приобрели билет класса: ${type.title}.
              Продолжительность посещения(часов): ${duration}.
              Цена билета: ${price} руб.`
    );
  };
  // А в компонент Buy добавим обработчик, который по клику на кнопку «Купить билет» станет выводить данные о покупке:
  return (
    <StyledSection>
      <StyleTitle level={1} size={TitleSize.BIG}>
        Купить билет
      </StyleTitle>
      {canBuy ? (
        // добавл усл есть ли билеты
        <Form $width={540}>
          <FormItem>
            <Label $margin={12}>Продолжительность (часов)</Label>
            {/* По умолчанию будет выбран первый элемент в списке продолжительности */}
            <Ul $isGridList $indent={12} $align="left">
              {durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(el) => {
                      setDuration(Number(el.target.value));
                    }}
                  />
                </Li>
              ))}
            </Ul>
          </FormItem>
          <FormItem $bottom={22}>
            <Label $margin={12}>Тип билета</Label>
            {/* Теперь осталось только разместить Accordion под Label
           «Тип билета» и передать ему нужные props: */}
            <Accordion
              textComponent={AccordionText}
              content={accordionContent}
              isHtml
            />
          </FormItem>
          <Label $small $margin={6}>
            Цена
          </Label>
          {/* <Price>500 руб.</Price> */}
          <Price>{price} руб.</Price>
          {/* тепрь на сонове высчитанного передаем реальную стоимость */}
          {/* <Button minWidth={460}>Купить билет</Button> */}
          <Button minWidth={460} onClick={handleBuy}>
            Купить билет
          </Button>
        </Form>
      ) : (
        <p>Покупка билетов временно недоступна</p>
      )}
    </StyledSection>
  );
}

export default Order;
