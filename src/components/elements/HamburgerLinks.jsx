import React from 'react';
import { Link } from 'react-router-dom';
import LinkWrapper from './LinkWrapper';

const HamburgerLinks = ({ changeIsOpen }) => {
    return (
        <>
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
        </>
    );
};

export default HamburgerLinks;
