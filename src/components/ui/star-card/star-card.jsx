import React from "react";
// import Title, { TitleSize } from "/src/components/ui/title/title";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
// import StarIcon from "/src/components/ui/star-icon/star-icon";
// import "./style.css";
import { Text, Figure, Image, StyledStarCard, StyledStarIcon } from "./styled";

function StarCard({
  name, // имя кота
  about, // информация
  feature, // особенность (ласковый, новенький и т.д.) CatFeature
  image // url c фото кота
}) {
  // return (
  //   <article className="star-card">
  //     <figure className="star-card__figure">
  //       <img
  //         src={image}
  //         className="star-card__image"
  //         width={313}
  //         height={320}
  //         alt="изображение кота"
  //       />
  //       {/* <span className="star-card__icon">Ласковый</span> */}
  //       <StarIcon className="star-card__icon" feature={feature} />
  //     </figure>
  //     {/* <Title size={TitleSize.SMALL}>{name}</Title> */}
  //     <Title size={TitleSize.SMALL} level={TitleLevel.H3}>
  //       {name}
  //     </Title>
  //     <p
  //       className="star-card__text"
  //       /*
  //       Здесь описание вставляем с пом html повторить
  //       */

  //       dangerouslySetInnerHTML={{ __html: about }}
  //     />
  //   </article>
  // );
  return (
    <StyledStarCard>
      <Figure>
        <Image src={image} width={313} height={320} alt="изображение кота" />
        <StyledStarIcon feature={feature} />
      </Figure>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
        {name}
      </Title>
      <Text
        className="star__about"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </StyledStarCard>
  );
}

export default StarCard;
