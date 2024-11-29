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
          ⭐ EMAIL CAMPAIGNS <br />
          ⭐ EMAIL AUTOMATIONS & FLOWS <br />
          ⭐ POP-UP DESIGN <br />
          ⭐ SMS & MMS CAMPAIGNS <br />
          <br />
          WHAT'S INCLUDED: <br />
          ⭐ Beautiful, custom email design that makes your brand pop <br />
          ⭐ A healthy balance of imagery + text for deliverability <br />
          ⭐ Unlimited design revisions <br />
          ⭐ Dark-mode tested and mobile-ready <br />
          ⭐ Implementation into your ESP <br />
          <br />
          ✅ Ready to enhance your email marketing? Book My FREE 1:1 Call
        </AboutText>
      </AboutDetails>
    </StyledAbout>
  );
};

export default Services;
