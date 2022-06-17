import React from "react";
import About from "/src/components/blocks/about/about";
import StarsList from "/src/components/blocks/stars-list/stars-list";
import { TitleLevel } from "/src/components/ui/title/title";

/*
Подключим starList в компонент App 
и через props прокинем до компонента StarList.
props идут из моков через все компоненты
выжно проследить весь путь и указать их и как массив 
и как пропс
*/

/*
подключать данные для отрисовки starsCard нужно везде
здесь они выглядят ввиде stars это переданный массив
*/

function MainPage({ stars }) {
  // return (
  //   <>
  //     <About />
  //     <StarsList stars={stars} />
  //   </>
  // );
  return (
    <>
      <About level={TitleLevel.H1} />
      <StarsList stars={stars} level={TitleLevel.H2} />
    </>
  );
}

export default MainPage;
