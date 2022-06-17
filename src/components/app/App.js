import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
// import "./style.css";
// import starList from "/src/mocks/starList";
// на этапе роутинга пинимаем старлист
import starList from "/src/mocks/starList";
import galery from "/src/mocks/galery";
import orderOptions from "/src/mocks/orderOptions";
import { GlobalStyle } from "./styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/app-route";
// далее здесь подкл страницы и отправляем отображ через роут
import MainPage from "/src/components/pages/main-page/main-page";
import OrderPage from "/src/components/pages/order-page/order-page";
import FixedScroll from "/src/components/ui/fixed-scroll/fixed-scroll";
/*
Подключим starList в компонент App 
и через props прокинем до компонента StarList.
props идут из моков через все компоненты
выжно проследить весь путь и указать их и как массив 
и как пропс
*/

// Вставим компонент глобальных стилей в JSX у App:

// export default function App() {
//   return (
//     <>
//       <GlobalStyle />
//       {/* <PageWrapper stars={starList}>Контент страницы</PageWrapper> */}
//       {/* <PageWrapper slides={galery} orderOptions={orderOptions} /> */}
//       <Router>
//         <Routes>
//           <Route path={AppRoute.MAIN} />
//           {/* element={
//               <PageWrapper slides={galery} orderOptions={orderOptions} />
//             } */}
//           <Route index element={<MainPage stars={starList} />} />
//           {/* <Route
//             path={AppRoute.ORDER}
//             element={
//               <PageWrapper slides={galery} orderOptions={orderOptions} />
//             }
//           /> */}
//           <Route
//             path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
//             element={<OrderPage slides={galery} buyOptions={orderOptions} />}
//           />
//         </Routes>
//       </Router>
//     </>
//   );
// }
export default function App({ pageUrl }) {
  return (
    <>
      <GlobalStyle />
      <Router>
        <FixedScroll />
        <Routes>
          <Route
            path={AppRoute.MAIN}
            element={<PageWrapper pageUrl={pageUrl} />}
          >
            <Route index element={<MainPage stars={starList} />} />
            <Route
              path={AppRoute.ORDER.replace(AppRoute.MAIN, "")}
              element={
                <OrderPage
                  slides={galery}
                  orderOptions={orderOptions}
                  pageUrl={pageUrl}
                />
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
