import React from "react";
import {
  AboutDetails,
  AboutText,
  StyledAbout,
} from "../../styles/About.styled/About.styled";
import {
  SectionSupTitle,
  SectionTitle,
} from "../../styles/Section.styled/SectionHeader";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionSupTitle>ABOUT ME</SectionSupTitle>
      <SectionTitle>
        HELPING EMAIL MARKETING AGENCIES & ECOM<br /> BRANDS DELIVER CONVERSION-DRIVEN DESIGNS
      </SectionTitle>
      <AboutDetails>
        <AboutText>
        ⭐Hi there! I'm Job Mwita, a Freelance Email Designer based in Nairobi, Kenya. My goal is to create stunning email designs that engage and convert - whether you’re building your brand, boosting sales, or nurturing leads, I’m here to help you captivate your audience and drive results.                                                  
          <br />
          <br />
        ⭐It's not just about making things look pretty – it's about driving engagement, building relationships, and ultimately, boosting your bottom line.
          <br />
          <br />
        ⭐I’m all about making design a fun and collaborative process, and as stress-free for you as possible. To do this, I always follow a specific process so you know exactly what to expect when working with me.
        </AboutText>
      </AboutDetails>
    </StyledAbout>
  );
};

export default About;
