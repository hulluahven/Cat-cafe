import React from "react";
// import Title, { TitleSize } from "/src/components/ui/title/title";
import Title, { TitleLevel, TitleSize } from "/src/components/ui/title/title";
import { Address, Text, StyledSection, WorkTime, TextWrapper } from "./styled";
// import "./style.css";

// function About({ level }) {
function About() {
  return (
    // <section className="about">
    //   <div className="about__wrapper">
    //     {/* <Title size={TitleSize.BIG}>Первое в России котокафе</Title> */}
    //     <Title size={TitleSize.BIG} title={level}>
    //       Первое в России котокафе
    //     </Title>
    //     <p className="about__text">
    //       Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
    //       из них ищет новый дом. Животных можно гладить, фотографировать, играть
    //       с ними.
    //     </p>
    //     <p className="about__work-time">Рабочее время с 8:00 до 23:00</p>
    //     <p className="about__address">
    //       {" "}
    //       Санкт-Петербург, набережная реки Карповки, дом 5, литера П
    //     </p>
    //   </div>
    // </section>
    <StyledSection>
      <TextWrapper>
        <Title level={TitleLevel.H1} size={TitleSize.BIG}>
          Первое в России котокафе
        </Title>
        <Text>
          Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
          из них ищет новый дом. Животных можно гладить, фотографировать, играть
          с ними.
        </Text>
        <WorkTime>Рабочее время с 8:00 до 23:00</WorkTime>
        <Address>Санкт-Петербург, Большая Конюшенная улица, 27</Address>
      </TextWrapper>
    </StyledSection>
  );
}

export default About;
