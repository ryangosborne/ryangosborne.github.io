import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? '#0A192F' : 'transparent')};
    background: transparent;
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.5s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 15px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #CCD6F6;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
    }

    @media screen and (max-width: 360px) {
        font-size: 0.7rem
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #CCD6F6;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right: -24px; */
    /* margin-left: -55px; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
    margin-right: 20px;
`

export const NavLinks = styled(LinkS)`
    color: #CCD6F6;
    display: flex;
    font-size: 1.2em;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 2px solid #e68a00;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkS)`
    border-radius: 5px;
    background: #0c4e6e;
    white-space: nowrap;
    padding: 10px 22px;
    color: #CCD6F6;
    font-size: 17px;
    outline: 2px inset #e68a00;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #e68a00;
        color: black;
        outline: 2px solid #646464;
    }
`