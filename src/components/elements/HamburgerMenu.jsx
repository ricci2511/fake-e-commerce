import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import HamburgerLinks from './HamburgerLinks';
import { useState } from 'react';
import '../../hamburger.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOnOpen = () => setIsOpen((prevState) => !prevState);

    return (
        <Menu
            right
            isOpen={isOpen}
            onOpen={handleOnOpen}
            onClose={handleOnOpen}
        >
            <HamburgerLinks changeIsOpen={handleOnOpen} />
        </Menu>
    );
};

export default HamburgerMenu;
