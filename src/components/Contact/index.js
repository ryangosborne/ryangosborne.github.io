import React from 'react'
import {
    ContactContainer,
    ContactContent,
    ContactHeader,
    ContactP,
    ButtonWrapper,
    ContactButton
} from './ContactElements'

const Contact = ({ body }) => {
  return (
    <ContactContainer id="contact">
        <ContactContent>
            <ContactHeader>reach out</ContactHeader>
            <ContactP>
                Thanks for visiting my portfolio! To find out more about me, you can visit 
                my <a href='https://www.linkedin.com/in/ryan-osborne-16755631/' target='_blank'>LinkedIn profile</a>, or
                my <a href='https://github.com/ryangosborne' target='_blank'>GitHub profile</a>.
                You can reach me at ryangosborne@live.ca <i>or</i> simply hit the button below. Thanks for your time!
            </ContactP>
            <ButtonWrapper>
                <ContactButton><a href='mailto:ryangosborne@live.ca' target='_blank'>email me</a></ContactButton>
            </ButtonWrapper>
        </ContactContent>
    </ContactContainer>
  )
}

Contact.defaultProps = {
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
}

export default Contact
