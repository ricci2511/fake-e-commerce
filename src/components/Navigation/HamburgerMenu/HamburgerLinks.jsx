import React from 'react';
import { Link } from 'react-router-dom';
import LinkWrapper from 'components/Navigation/LinkWrapper';

const HamburgerLinks = ({ changeIsOpen }) => {
    return (
        <nav className="flex flex-col gap-12 px-8 py-24">
            <Link to="/" onClick={changeIsOpen}>
                <LinkWrapper path="/" />
            </Link>
            <Link to="/shop" onClick={changeIsOpen}>
                <LinkWrapper path="/shop" />
            </Link>
            <Link to="/about" onClick={changeIsOpen}>
                <LinkWrapper path="/about" />
            </Link>
            <Link to="/contact" onClick={changeIsOpen}>
                <LinkWrapper path="/contact" />
            </Link>
        </nav>
    );
};

export default HamburgerLinks;
