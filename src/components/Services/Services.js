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
    <StyledAbout id="about">
      <SectionSupTitle>SERVICES</SectionSupTitle>
      <SectionTitle>
        MY SERVICES
      </SectionTitle>
      <AboutDetails>
        <AboutText>
          Hi there! I'm Job Mwita, a Freelance Email Designer based in Nairobi, Kenya. 𝗠𝘆 𝗴𝗼𝗮𝗹 𝗶𝘀 𝘁𝗼 𝗰𝗿𝗲𝗮𝘁𝗲 𝘀𝘁𝘂𝗻𝗻𝗶𝗻𝗴 𝗲𝗺𝗮𝗶𝗹 𝗱𝗲𝘀𝗶𝗴𝗻𝘀 𝘁𝗵𝗮𝘁 𝗲𝗻𝗴𝗮𝗴𝗲 𝗮𝗻𝗱 𝗰𝗼𝗻𝘃𝗲𝗿𝘁—whether you’re building your brand, boosting sales, or nurturing leads, I’m here to help you captivate your audience and drive results.                                                  
          <br />
          <br />
          🎨 HERE IS HOW I CAN HELP YOU:<br />
          • Create Templates in Figma / Canva / Adobe Photoshop that you can Reuse<br />
          • Convert your JPEG / Canva / Photoshop / Figma design into Klaviyo / Mailchimp Emails<br />
          • Create Tutorial Videos 𝗙𝗼𝗿 𝗬𝗼𝘂 or 𝗬𝗼𝘂𝗿 𝗧𝗲𝗮𝗺<br />
          • Custom NO CODE Klaviyo / Mailchimp Templates that are editable and reusable!<br />
          • Teach you how to do any of this 𝗬𝗢𝗨𝗥𝗦𝗘𝗟𝗙:)<br />
          <br />
          ✅ Ready to enhance your email marketing? Book My FREE 1:1 Power Hour or DM me on my LinkedIn Profile below!
        </AboutText>
      </AboutDetails>
    </StyledAbout>
  );
};

export default Services;
