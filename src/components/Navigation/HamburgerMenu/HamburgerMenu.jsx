import React from 'react';
import HamburgerLinks from 'components/Navigation/HamburgerMenu/HamburgerLinks';
import RightSideMenu from 'components/UI/RightSideMenu';
import DarkOverlay from 'components/UI/DarkOverlay';

const HamburgerMenu = ({ isOpen, changeIsOpen }) => {
    return (
        <>
            <RightSideMenu isOpen={isOpen} width="w-72">
                <HamburgerLinks changeIsOpen={changeIsOpen} />
            </RightSideMenu>
            <DarkOverlay isOpen={isOpen} closeRightSideMenu={changeIsOpen} />
        </>
    );
};

export default HamburgerMenu;
