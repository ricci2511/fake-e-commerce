import React from 'react';
import HamburgerLinks from 'components/Navigation/HamburgerMenu/HamburgerLinks';
import RightSideMenu from 'components/UI/RightSideMenu';
import LeftSlideInBackdrop from 'components/UI/DarkBackdrops/LeftSlideInBackdrop';

const HamburgerMenu = ({ isOpen, changeIsOpen }) => {
    return (
        <>
            <RightSideMenu isOpen={isOpen} width="w-72">
                <HamburgerLinks changeIsOpen={changeIsOpen} />
            </RightSideMenu>
            <LeftSlideInBackdrop
                isOpen={isOpen}
                closeFocusedElement={changeIsOpen}
            />
        </>
    );
};

export default HamburgerMenu;
