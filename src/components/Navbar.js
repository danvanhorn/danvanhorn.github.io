import React, { Component } from 'react';
import Styled from '../utils/styled';
import { Link } from '../style/js/style.js';
import Interactive from 'react-interactive';
import s from '../style/js/app.style.js';

const NavbarContainer = Styled('div', {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgb(8,140,232)',
    boxShadow: '1px 1px 4px gray',
    position: 'fixed',
    width: '100vw',
    height: '12vh',
    top: '0'
})

const LinkContainer = Styled('div', {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '5vh',
    width: '60vw'
})

const NavLink = Styled('button', {
    border: 'none',
    outline: 'none'
})

const HoverableLink = (props) => {
    return (
    <Interactive
        as='a'
        hover={{ background: 'rgb(8, 158, 232)' }}
        active={{ color: 'darkgray', background: 'rgb(3, 130, 232)'}}
        style={{
            fontSize: '2vh',
            color: 'white',
            width: '30vw',
            padding: '1vh 1vw 1vh 1vw',
            textAlign: 'center',
            verticalAlign: 'text-bottom'
        }}
        {...props} />
    )
}

class Navbar extends Component {
    render() {
        return (
            <NavbarContainer>
                <h1 style={s.title}>Dan Van Horn</h1>
                <LinkContainer>
                    <HoverableLink href='./'>Home</HoverableLink>
                    <HoverableLink href='./info'>Info</HoverableLink>
                    <HoverableLink href='./projects'>Projects</HoverableLink>
                    <HoverableLink href='./contact'>Contact</HoverableLink>
                </LinkContainer>
            </NavbarContainer>
        );
    }
}

export default Navbar;