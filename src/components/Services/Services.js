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

const Services = () => {
  return (
    <StyledAbout id="services">
      <SectionSupTitle>SERVICES</SectionSupTitle>
      <SectionTitle>
        MY SPECIALITY
      </SectionTitle>
      <AboutDetails>
        <AboutText>
          EMAIL CAMPAIGNS                                                  
          <br />
          <br />
          EMAIL AUTOMATIONS & FLOWS
          <br />
          <br />
          SOCIAL MEDIA DESIGN
          <br />
          <br />
          POP-UP DESIGN
          <br />
          <br />
          SMS & MMS CAMPAIGNS
          <br />
          <br />
          ✅ Ready to enhance your email marketing? Book My FREE 1:1 Power Hour or DM me on my LinkedIn Profile below!
        </AboutText>
      </AboutDetails>
    </StyledAbout>
  );
};

export default Services;
