import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, StyledTitle } from "./styled";
import Galery from "/src/components/ui/galery/galery";

// Галерея котокафе
// Бывают ситуации, когда слайдов нет, или в slides будет передан не массив.
// В таких случаях галерею выводить не нужно,
// поэтому добавим в CafeGallery проверку slides?.length.
function CafeGalery({ slides }) {
  return slides?.length ? (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Галерея нашего кафе
      </StyledTitle>
      <Galery slides={slides} />
    </StyledSection>
  ) : null;
}

export default CafeGalery;
