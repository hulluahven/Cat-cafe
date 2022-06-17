import React, { useState, useRef } from "react";
import "swiper/swiper.scss";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Thumbs } from "swiper/core";
import { ReactComponent as LeftArrow } from "/src/assets/left-arrow.svg";

import {
  SliderWrapper,
  StyledSwiper,
  StyledSwiperMini,
  StyleSlide,
  StyleSlideMini,
  StyledButtonLeft,
  StyledButtonRight,
  RightArrow
} from "./styled";

// стилизация
// здесь- 2 слайдера бол и мал, кот далее нужно синхрониз-ть

// для этого нужны модули Swiper: import SwiperCore, { Navigation, Thumbs } from "swiper/core";.
// подключение чтобы подключить необходимые модули к Свайперу, нужно выполнить за пределами тела функции компонента: SwiperCore.use([Navigation, Thumbs]);.
SwiperCore.use([Navigation, Thumbs]);
function Galery({
  slides = [] // список слайдов, каждый слайд — это src картинки и alt
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // аведём состояние, чтобы хранить состояние слайдера и обмениваться им между слайдерами
  const [activeSlide, setActiveSlide] = useState(0);
  // чтобы в нижнем слайдере подсвечивалось лишь превью того слайда, что отображён в основном
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  // добавили состояния впер наз через ссылок хук
  return (
    <>
      <StyledSwiper spaceBetween={20} thumbs={{ swiper: thumbsSwiper }} loop>
        {/* тобы отображаемый слайд большого слайдера StyledSwiper зависел от thumbsSwiper, передадим в него props: thumbs */}
        onSlideChange=
        {(slider) => {
          setActiveSlide(slider.realIndex);
        }}
        {/* Теперь в activeSlide всегда будет храниться индекс активного в данный момент слайда. */}
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <StyleSlide
              src={slide.src}
              alt={slide.alt}
              width={728}
              height={408}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
      <SliderWrapper>
        <StyledSwiperMini
          onSwiper={(evt) => {
            setThumbsSwiper(evt);
          }}
          // а сам thumbsSwiper свяжем с StyledSwiperMini, передав в его обработчик onSwiper функцию:
          spaceBetween={20}
          slidesPerView={4}
          freeMode
          watchSlidesProgress
          loop
          // +привязка ссылок к слайдеру
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          {/* когда StyledSwiperMini проинициализируется, он запишет своё состояние через setThumbsSwiper: */}
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <StyleSlideMini
                // Воспользуемся activeSlide для того, чтобы в слайдере-превью в компоненте StyleSlideMini передавать пропс $active={activeSlide === index}.
                $active={activeSlide === index}
                src={slide.src}
                alt={slide.alt}
              />
            </SwiperSlide>
          ))}
        </StyledSwiperMini>
        {/* доб-ем перекл кнопок */}
        {/* кнопки стилизуем в стилях */}
        <StyledButtonLeft ref={navigationPrevRef}>
          <LeftArrow />
        </StyledButtonLeft>
        <StyledButtonRight ref={navigationNextRef}>
          <RightArrow />
        </StyledButtonRight>
      </SliderWrapper>
    </>
  );
}

export default Galery;
