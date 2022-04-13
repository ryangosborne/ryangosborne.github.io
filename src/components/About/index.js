import React from 'react'
import Technologies from './Technologies'
import Certifications from './Certifications'
import programmer from "../../../src/images/programmer.svg"

import {
  AboutBlurb,
  AboutContainer,
  AboutGrid,
  AboutHeader,
  AboutImage,
  AboutImageLocation,
  AboutToggleText,
  CertificationsGridLayout,
  SkillsSection,
  TechnologiesGridLayout,
  AboutImg,
  ButtonToggle
} from './AboutElements'

const About = ({ toggleViews, altSkills, title, blurb }) => {

  return (
    <AboutContainer id="about">
      <AboutGrid>
        <AboutHeader>{title}</AboutHeader>
        <AboutBlurb>{blurb}</AboutBlurb>
        <AboutImageLocation>
          <AboutImage>
            <AboutImg src={programmer} />
            {/* <AboutImg src={ altSkills ? arrows : cube } alt="grid image" /> */}
          </AboutImage>
        </AboutImageLocation>
        
        <AboutToggleText>
          {/* <ButtonToggle onClick={toggleViews}>
            {altSkills ? 'view technologies' : 'view certifications'}
          </ButtonToggle> */}
          <ButtonToggle>all_skills()</ButtonToggle>

        </AboutToggleText>

        <SkillsSection>
          <TechnologiesGridLayout><Technologies /></TechnologiesGridLayout>
        </SkillsSection>

        {/* <SkillsSection>
          {altSkills ? 
          <CertificationsGridLayout><Certifications/></CertificationsGridLayout> : 
          <TechnologiesGridLayout><Technologies/></TechnologiesGridLayout>}
        </SkillsSection> */}
    </AboutGrid>
  </AboutContainer>
  )
}

About.defaultProps = {
  title: "Who Am I",
  blurb: "For this portfolio I will demonstrate my determination. Throughout my education at NSCC I have been challenged by assignments and " +
  "had to persevere!"
}

export default About