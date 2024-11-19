import React from "react";
import {
  ProjectCardImage,
  ProjectCategory,
  ProjectDetails,
  ProjectImg,
  ProjectName,
  ProjectNumber,
  StyledProjectCard,
} from "../../styles/Projects.styled/Projects.styled";

import { Social, Socials } from "../../styles/Footer.styled/Footer.styled";

const ProjectCard = ({ name, img, number, category, link }) => {
  return (
    <StyledProjectCard>
      <ProjectCardImage>
        <ProjectImg src={img} alt={name} />
      </ProjectCardImage>
      <ProjectDetails>
        <ProjectName>
          <Socials>
            <Social target="_blank" rel="noopener noreferrer" href={link}>
              <ProjectNumber>{number} — </ProjectNumber>
              {name}
            </Social>
          </Socials>
        </ProjectName>
        <ProjectCategory>{category}</ProjectCategory>
      </ProjectDetails>
    </StyledProjectCard>
  );
};

export default ProjectCard;
