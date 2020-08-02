import React from 'react';
import Logo from '../../assets/img/Logo.png'
import { LogoImage, MenuWrapper, ButtonLink } from './style.js'
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <MenuWrapper className="Menu">
            <a href="/">
                <LogoImage src={Logo} alt="Logo" />
            </a>

            <ButtonLink as="a" className="ButtonLink" href="/">
                Novo Video
            </ButtonLink>
        </MenuWrapper>
    )
}

export default Menu;