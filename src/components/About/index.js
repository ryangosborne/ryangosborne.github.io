import React from 'react'
import Technologies from './Technologies'
// import Certifications from './Certifications'
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
        <AboutHeader>a bit about me</AboutHeader>

        <AboutBlurb>
          Hi there! My name is Ryan Osborne and I'm a developer in Halifax, Nova Scotia. I'm just about to 
          graduate from NSCC's IT Programming Diploma with Honours and truly looking forward to starting a career
          in such an exciting field at an exciting time. This website itself is actually a big portion of my 
          portfolio, and something I am very proud of. This website was developed as a Capstone project by 
          Alex Reynolds, Jason MacKeigan, Gideon Niemelainen, and myself during our 2022 winter semester. You 
          can view and fork our repo <a href="https://github.com/CapstoneTeamGreen" target="_blank">here</a>.

        </AboutBlurb>

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
          <ButtonToggle>technical_skills()</ButtonToggle>

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
  blurb: "Hi there! My name is Ryan Osborne and I'm a developer in Halifax, Nova Scotia. " +
  "I'm just about to graduate from NSCC's IT Programming Diploma with Honours and truly looking forward to " +
  "starting a career in such an excited field at an exciting time. This website itself is actually a big portion" +
  "of my portfolio, and something I am very proud of. This website was developed as a Capstone project" +
  "by Alex Reynolds, Jason MacKeigan, Gideon Niemelainen and myself during our 2022 winter semester. " +
  "You can view our public repo here"
}

export default About