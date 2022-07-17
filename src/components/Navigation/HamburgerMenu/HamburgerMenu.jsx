import React from 'react';
import HamburgerLinks from './HamburgerLinks';
import '../../../hamburger.css';
import RightSideMenu from '../../UI/RightSideMenu';
import DarkOverlay from '../../UI/DarkOverlay';

const HamburgerMenu = ({ isOpen, changeIsOpen }) => {
    return (
        <>
            <RightSideMenu isOpen={isOpen} width="w-72">
                <HamburgerLinks changeIsOpen={changeIsOpen} />
            </RightSideMenu>
            <DarkOverlay isOpen={isOpen} />
        </>
    );
};

export default HamburgerMenu;
