import React from 'react'
import {  
    PPITBlurb, PPITImg, KeySkillContainer, ProblemsFaced, PPITHeader, PPITSpan, PPITImage, PPITListBlurb
} from './PPITElements'
import capstone from "../../../src/images/capstone.png"
import challenge from "../../../src/images/challenge.png"

const PPIT = () => {

  return (
      <div>
        <KeySkillContainer>
            <PPITHeader>key skill</PPITHeader>
            <PPITBlurb>
                Throughout my education at NSCC, I developed a lot of important industry skills like becoming 
                proficient in several programming languages, elevating my typing speed, and web design. However, I 
                think the skill that has grown the most, and one that I'm really proud of is my ability 
                to <PPITSpan>collaborate effectively</PPITSpan>.
            </PPITBlurb>

            <PPITBlurb>
                I have two great examples of effective collaboration to discuss. The first is the <PPITSpan>
                    Capstone Project</PPITSpan> of which this site is a by-product. For this project I co-developed
                    the front-end, and also took meeting minutes for our twice-weekly meetings.
            </PPITBlurb>
            <PPITBlurb>
                The other example is my participation in <PPITSpan>Challenge Nova Scotia</PPITSpan> in November 
                2021 with four other classmates. For this day-long competition, I helped develop and refine our
                overall proposal, created our video submission which included finding stock video footage and music.
            </PPITBlurb>
            <PPITImage>
                <PPITImg src={capstone} alt="Capstone"></PPITImg>
                <PPITImg src={challenge} alt="Challenge Nova Scotia"></PPITImg>
            </PPITImage>
        </KeySkillContainer>

        <ProblemsFaced>
            <PPITHeader>problems faced</PPITHeader>
            <PPITBlurb>
            In both of these examples, I really focused a lot on letting other voices talk and hearing others' 
            opinions. Sometimes in group work, one or two voices can really dominate the conversation, leaving 
            other members without a say or feeling like they're not contributing as much. Having been on both 
            sides of this, I now actively try to make sure anything I do as a team is distributed and executed 
            as <PPITSpan>one</PPITSpan> team. I think working and attending school remotely has really brought this skill into 
            focus for me and allowed me to <PPITSpan>hone in and develop</PPITSpan> this into a big strength.
            </PPITBlurb>
            <br/>
            <PPITImage>
                <PPITListBlurb>
                    One problem faced in both of these examples was the abundance of good ideas - which, 
                    yes, is a problem. It's really difficult to reject a good idea in favour of the "best" idea, 
                    especially because sometimes a group member might experience rejection or disapproval 
                    when their idea gets cut. 
                </PPITListBlurb>
                <PPITListBlurb>
                    To overcome this problem, I do my best to take time and <PPITSpan>acknowledge</PPITSpan> each 
                    idea, understand it, and ask some qualifying questions about the idea to learn more. If an 
                    idea gets cut, at least the group member knows that we took the time to listen and understand 
                    the idea, and have chosen a different direction.
                </PPITListBlurb>
            </PPITImage>
        </ProblemsFaced>


    </div>
      );
    
}

export default PPIT;