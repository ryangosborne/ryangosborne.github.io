import styled from "styled-components";

export const ContactContainer = styled.div`
    background: #0c4e6e;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;

`

export const ContactContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContactHeader = styled.header`
    font-size: calc(24px + 2vmin);
    font-weight: bold;
    color: #cfd5e8;

`

export const ContactP = styled.p`
    font-size: calc(14px + 1vmin);
    color: #cfd5e8;
    text-align: center;
    margin: 2rem;
    padding: 0px 70px 0px 70px;

`

export const ButtonWrapper = styled.nav`
    display: flex;
    align-items: center;
`

export const ContactButton = styled.button`
    border-radius: 30px;
    background: #0c4e6e;
    white-space: nowrap;
    padding: 16px 30px;
    color: #cfd5e8;
    font-size: 20px;
    font-weight: 300;
    width: 290px;

    outline: 2px inset #e68a00;
    border: none;
    cursor: pointer;
    /* transition: all 0.2s ease-in-out; */
    text-decoration: none;

    &:hover {
        /* transition: all 0.2s ease-in-out; */
        background: #0c4e83;
        outline: 3px solid #e78a09;
    }
`