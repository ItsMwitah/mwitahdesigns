import React from "react";
import {
  FooterSocials,
  Social,
  Socials,
  StyledFooter,
  StyledFooterMainText,
  Developed,
  Developer,
} from "../../styles/Footer.styled/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterMainText
        href="mailto:jobmwitah@gmail.com"
        data-hover="Let's talk!"
      >
        jobmwitah@gmail.com
      </StyledFooterMainText>
      <FooterSocials>
        <Socials>
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/jobmwita/"
          >
            LinkedIn
          </Social>
          &nbsp;-&nbsp;
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/jobmwita_"
          >
            Twitter/X
          </Social>
          &nbsp;-&nbsp;
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.behance.net/jobmwita"
          >
            Behance
          </Social>
          {/* &nbsp;-&nbsp; */}
          {/* <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/iamchrstnblfr/"
          >
            INSTAGRAM
          </Social> */}
        </Socials>
        <Developed>
          Book My FREE 1:1{" "}
          <Developer
            target="_blank"
            rel="noopener noreferrer"
            href="https://calendly.com/jobmwita/60-min-email-design-power-hour"
          >
            Power Hour
          </Developer>
        </Developed>
      </FooterSocials>
    </StyledFooter>
  );
};

export default Footer;
