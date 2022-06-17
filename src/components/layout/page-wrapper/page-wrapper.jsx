import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
// import MainPage from "/src/components/pages/main-page/main-page";
// import "./style.css";
// import OrderPage from "/src/components/pages/order-page/order-page";
import { Main } from "./style";
import { Outlet } from "react-router-dom";

/*
Подключим starList в компонент App 
и через props прокинем до компонента StarList.
props идут из моков через все компоненты
выжно проследить весь путь и указать их и как массив 
и как пропс
*/

/*
подключать данные для отрисовки starsCard нужно везде
здесь они выглядят ввиде props это переданный массив
*/

function PageWrapper({ pageUrl }) {
  // return (
  //   <>
  //     <Header />
  //     <main className="page-wrapper__main">
  //       <MainPage {...prop} />
  //     </main>
  //     <Footer />
  //   </>
  // );
  return (
    <>
      <Header pageUrl={pageUrl} />
      <Main>
        {/* <MainPage {...prop} /> */}
        {/* <OrderPage {...prop} /> */}
        {/* Поменяем PageWrapper так, чтобы он получал отображаемую страницу через , и подключим в App. */}
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
