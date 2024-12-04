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
import img from "../../assets/Hero Image.jpg";

const Home = () => {
  return (
    <StyledHome id="home">
      <HomeDetails>
        <SupTitle>Hello, I'm Job Mwitah!</SupTitle>
        <Title>
          Freelance Email <span>De</span>signer, <br /> based in Kenya.
        </Title>
        <SubTitles>
          <Subtitle>
            <SubtitleRegular>KENYA</SubtitleRegular>
            <SubtitleItalic>* AVAILABLE WORLDWIDE</SubtitleItalic>
          </Subtitle>

          <Subtitle>
            <SubtitleRegular>MAILCHIMP · KLAVIYO</SubtitleRegular>
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
