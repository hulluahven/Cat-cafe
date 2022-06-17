import React from "react";
import Title from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import { StarItem, StarList, StyledStarsList } from "./style";
// import "./style.css";
import { AppRoute } from "/src/app-route";

function StarsList({ stars, level }) {
  // return (
  //   <section className="star-list">
  //     {stars && stars.length ? (
  //       <>
  //         <Title level={level}>Наши звёзды</Title>
  //         <ul className="star-list__list">
  //           {stars.map((star) => (
  //             <li className="star-list__item" key={star.id}>
  //               <StarCard {...star} />
  //             </li>
  //           ))}
  //         </ul>
  //         <Button minWidth={353} link="/buy">
  //           Купить билет
  //         </Button>
  //       </>
  //     ) : null}
  //   </section>
  // );
  return (
    <StyledStarsList>
      {stars?.length ? (
        <>
          <Title level={level}>Наши звёзды</Title>
          <StarList $isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <StarCard {...star} />
              </StarItem>
            ))}
          </StarList>
        </>
      ) : null}
      <Button minWidth={353} link={AppRoute.ORDER}>
        Купить билет
      </Button>
    </StyledStarsList>
  );
}

export default StarsList;
