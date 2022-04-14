import React from 'react'
import {  
    PPITBlurb, PPITImg, KeySkillContainer, ProblemsFaced, PPITHeader, PPITSpan, PPITImage, PPITListBlurb,
    Reflection,
    Summary,
    PPITSmallHeader
} from './PPITElements'
import capstone from "../../../src/images/capstone.png"
import challenge from "../../../src/images/challenge.png"

const PPIT = () => {

  return (
      <div>
        <KeySkillContainer id="keyskill">
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

        <ProblemsFaced id="problems">
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
                    yes, is a problem. It's really difficult to reject a good idea in favour of 
                    the <PPITSpan>"best" idea</PPITSpan>, especially because sometimes a group member might 
                    experience rejection or disapproval when their idea gets cut. 
                </PPITListBlurb>
                <PPITListBlurb>
                    To overcome this problem, I do my best to take time and <PPITSpan>acknowledge</PPITSpan> each 
                    idea, understand it, and ask some qualifying questions about the idea to learn more. If an 
                    idea gets cut, at least the group member knows that we took the time to listen and understand 
                    the idea, and have chosen a different direction.
                </PPITListBlurb>
            </PPITImage>
        </ProblemsFaced>

        <Reflection id="reflection">
            <PPITHeader>reflection</PPITHeader>
            <PPITBlurb>
                Going forward, I think being able to effectively collaborate is hugely important. It's 
                personally valueable for me so I can take constructive criticism on ideas I present, and not let 
                my ego get in the way of a <PPITSpan>team effort</PPITSpan>. But maybe even more importantly, 
                being able to effectively collaborate can allow my peers and I to take on bigger challenges
                and accomplish greater things. Isn't it funny how sometimes the quietest voices have the best ideas?
                My goal is to make sure <PPITSpan>every voice</PPITSpan> is heard, and I think good results follow. 
            </PPITBlurb>
            <PPITBlurb>
                As someone who believes in the <PPITSpan>power of diversity</PPITSpan>, I also embrace the 
                power of collaboration and its ability to conquer great things. I want to practice being a 
                facilitator of communication, collaboration, and continue to develop these skills to 
                accomplish meaningful results personally and professionally.
            </PPITBlurb>
        </Reflection>

        <Summary id="summary">
            <PPITHeader>summary</PPITHeader>
            <PPITSmallHeader>where am i now<PPITSpan>?</PPITSpan></PPITSmallHeader>
            <PPITBlurb>on track to <PPITSpan>graduate with honours</PPITSpan> from NSCC's IT Programming in June 2022</PPITBlurb>

            <PPITSmallHeader>where am i going<PPITSpan>?</PPITSpan></PPITSmallHeader>
            <PPITBlurb>
                I'm still in the exploratory phase of my programming career. I really enjoy working with 
                front-end UIs and <PPITSpan>exercising my creativity</PPITSpan>, but I also have a great interest in autonomous 
                vehicles, and in smart farming.
            </PPITBlurb>

            <PPITSmallHeader>how do i get there<PPITSpan>?</PPITSpan></PPITSmallHeader>
            <PPITBlurb>
                As simple as it sounds, I just plan to <PPITSpan>keep learning</PPITSpan>. I will learn a lot from 
                my upcoming role as a junior front-end developer, and will supplement that learning with 
                other projects I will do in my personal work to expand my knowledge and to create solutions I find 
                to be meaningful. As cheesy as it is, I do really take pride in being a life-long learner. As I continue to try new 
                things I think my exact career path will become more clear.
            </PPITBlurb>
        </Summary>


    </div>
      );
    
}

export default PPIT;