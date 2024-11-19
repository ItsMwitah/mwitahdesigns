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
            X/Twitter
          </Social>
          &nbsp;-&nbsp;
          <Social
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.upwork.com/freelancers/~016a7abebc392b8aff"
          >
            Upwork
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
          work with me on{" "}
          <Developer
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.upwork.com/services/product/marketing-a-conversion-driven-klaviyo-email-design-template-1856307405281016453?ref=project_share"
          >
            Upwork
          </Developer>
        </Developed>
      </FooterSocials>
    </StyledFooter>
  );
};

export default Footer;
