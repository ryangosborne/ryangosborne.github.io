import styled from 'styled-components';

export const AboutContainer = styled.div`
    background: #0c4e6e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
    color: #cfd5e8;
`

export const AboutGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 0.5fr 0.6fr 0.7fr 0.9fr 1.3fr 1fr 1fr;
    gap: 5px 5px;
    grid-auto-flow: column;
    grid-template-areas:
    ". grid-header ."
    "grid-blurb grid-blurb grid-blurb"
    "grid-blurb grid-blurb grid-blurb"
    "grid-image grid-view-toggle grid-view-toggle"
    "grid-image grid-skills grid-skills"
    "grid-image grid-skills grid-skills"
    "grid-image grid-skills grid-skills";
    max-width: 1200px;
`

export const AboutHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: grid-header;  
    font-size: calc(24px + 2vmin);
    font-weight: bold;
    color: #cfd5e8;
`

export const AboutBlurb = styled.p`
    grid-area: grid-blurb;
    font-size: calc(14px + 1vmin);
    text-align: center;
    margin: 1.5rem;
    padding: 0px 60px 0px 60px;
    color: #cfd5e8;
`

export const AboutImageLocation = styled.div`
    grid-area: grid-image;
`

export const AboutImage = styled.div`
    width: 350px;
    height: auto;
    display: block;
    margin: 20px auto 0px auto;
`

export const AboutImg = styled.img`
    width: 380px;
    height: auto;
    display: block;
    margin: 40px auto 0px auto;
`

export const AboutToggleText = styled.div`
    grid-area: grid-view-toggle; 
    display: flex;
    margin-left: 15px;
    vertical-align: bottom;
`

export const SkillsSection = styled.div`
    grid-area: grid-skills;
`

export const ButtonToggle = styled.button`
    color:#e68a00;
    border: 0px;
    min-width: 100px;
    min-height: 25px;
    font-size: 25px;
    letter-spacing: .5mm;
    background-color: transparent;
`

export const TechnologiesGridLayout = styled.div`
    display: grid;
    margin-left: 10px;
    gap: 7px;
    grid-auto-flow: column;
    grid-template-areas:
    "tech-0 tech-1 tech-2"
    "tech-3 tech-4 tech-5"
    "tech-6 tech-7 tech-8";
`

export const TechnologiesGrid = styled.div`
    margin: 10px;
    padding: 5px;
    font-size: 28px;
    height: 40px;
    width: 120px;
    justify-content: center;
    transition: all 120ms cubic-bezier(.17, .67, .8, .45);
`

export const CertificationsGridLayout = styled.div`
    font-size: 23px;
    text-align: left;
    margin: 2px;
`

export const CertificationsGridUL = styled.ul`
    margin: 0px;
    padding: 2px;
`

export const CertificationsGridLI = styled.li`
    padding: 8px;
    margin: 1px;
    padding-left: 15px;
    margin-right: 15px;
    display: grid;
    list-style-type: none;
    transition: all 120ms cubic-bezier(0.77, 1, 0.175, 1);
    border-left: 5px solid #0A192F;
`