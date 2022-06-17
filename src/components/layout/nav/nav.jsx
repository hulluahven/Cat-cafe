import React from "react";
import Button from "/src/components/ui/button/button";
import { AppRoute } from "/src/app-route";
import { StyledButton } from "./style";
import { useLocation } from "react-router-dom";
// Nav начнёт принимать pageUrl, полученный
// через useLocation (),
//  в котором будет URL текущей страницы

// список кнопок навигации,
// каждая из которых будет характеризоваться
// объектом со свойством to —
// в нём будет храниться путь,
// куда должно вести нажатие ссылки,
// и свойством button —
// в нём будет храниться JSX для кнопки.

const buttons = [
  {
    to: AppRoute.MAIN,
    button: (
      <StyledButton minWidth={260} key={AppRoute.MAIN} link={AppRoute.MAIN}>
        Главная
      </StyledButton>
    )
  },
  {
    to: AppRoute.ORDER,
    button: (
      <Button minWidth={260} key={AppRoute.ORDER} link={AppRoute.ORDER}>
        Купить билет
      </Button>
    )
  }
];

function Nav() {
  const pageUrl = useLocation().pathname;
  return (
    // <nav>
    //   <Button>Купить билет</Button>
    // </nav>
    <nav>
      <nav>
        {/* <Button minWidth={260} link={AppRoute.ORDER}>
        Купить билет
      </Button> */}
        {buttons
          .filter((button) => button.to !== pageUrl)
          .map((button) => button.button)}
        {/* для отображения навигации нужно  не забыть отфильтровать
           buttons, удалив из него элемент, ссылка которого соответствует pageUrl. */}
      </nav>
    </nav>
  );
}

export default Nav;
