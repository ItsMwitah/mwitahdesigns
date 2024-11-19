import React from "react";
import {
  HomeDetails,
  HomeImage,
  StyledHome,
  Subtitle,
  SubtitleItalic,
  SubtitleRegular,
  SubTitles,
  SupTitle,
  Title,
} from "../../styles/Home.styled/Home.styled";
import { HomeImg } from "../../styles/Home.styled/Home.styled";
import img from "../../assets/Banner 12.png";

const Home = () => {
  return (
    <StyledHome id="home">
      <HomeDetails>
        <SupTitle>Hello, I'm Job Mwita!</SupTitle>
        <Title>
          Klaviyo Email <span>De</span>signer, <br /> based in Kenya.
        </Title>
        <SubTitles>
          <Subtitle>
            <SubtitleRegular>KENYA</SubtitleRegular>
            <SubtitleItalic>* AVAILABLE WORLDWIDE</SubtitleItalic>
          </Subtitle>

          <Subtitle>
            <SubtitleRegular>EMAIL DESIGN · KLAVIYO</SubtitleRegular>
          </Subtitle>

          <Subtitle>
            <SubtitleRegular>(2024) ALL RIGHTS RESERVED</SubtitleRegular>
          </Subtitle>
        </SubTitles>
      </HomeDetails>
      <HomeImage>
        <HomeImg src={img} alt="Home" />
      </HomeImage>
    </StyledHome>
  );
};

export default Home;
