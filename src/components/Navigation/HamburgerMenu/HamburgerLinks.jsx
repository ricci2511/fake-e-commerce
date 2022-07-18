import React from 'react';
import { Link } from 'react-router-dom';
import LinkWrapper from 'components/Navigation/LinkWrapper';

const HamburgerLinks = ({ changeIsOpen }) => {
    return (
        <nav className="flex flex-col gap-12 px-8 py-24">
            <Link to="/" onClick={changeIsOpen}>
                <LinkWrapper path="/" linkName="Home" />
            </Link>
            <Link to="/shop" onClick={changeIsOpen}>
                <LinkWrapper path="/shop" linkName="Shop" />
            </Link>
            <Link to="/about" onClick={changeIsOpen}>
                <LinkWrapper path="/about" linkName="About" />
            </Link>
            <Link to="/contact" onClick={changeIsOpen}>
                <LinkWrapper path="/contact" linkName="Contact" />
            </Link>
        </nav>
    );
};

export default HamburgerLinks;
