import React from 'react';
import { Link } from 'react-router-dom';
import LinkWrapper from 'components/Navigation/LinkWrapper';

const HamburgerLinks = ({ changeIsOpen }) => {
    return (
        <nav className="flex flex-col gap-12 px-8 py-24">
            <Link to="/fake-e-commerce" onClick={changeIsOpen}>
                <LinkWrapper path="/" linkName="Home" />
            </Link>
            <Link to="/fake-e-commerce/shop" onClick={changeIsOpen}>
                <LinkWrapper path="/shop" linkName="Shop" />
            </Link>
            <Link to="/fake-e-commerce/about" onClick={changeIsOpen}>
                <LinkWrapper path="/about" linkName="About" />
            </Link>
            <Link to="/fake-e-commerce/contact" onClick={changeIsOpen}>
                <LinkWrapper path="/contact" linkName="Contact" />
            </Link>
        </nav>
    );
};

export default HamburgerLinks;
