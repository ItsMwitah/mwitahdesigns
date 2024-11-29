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
          ⭐ SOCIAL MEDIA DESIGN <br />
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
          ✅ Ready to enhance your email marketing? Book My FREE 1:1 Power Hour or DM me on my LinkedIn Profile below!
        </AboutText>
      </AboutDetails>
    </StyledAbout>
  );
};

export default Services;
