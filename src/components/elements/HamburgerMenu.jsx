import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import NavLinks from './NavLinks';
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
            <NavLinks isOpen={isOpen} changeIsOpen={handleOnOpen} />
        </Menu>
    );
};

export default HamburgerMenu;
