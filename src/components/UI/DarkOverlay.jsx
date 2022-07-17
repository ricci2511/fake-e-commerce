import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

const DarkOverlay = ({ isOpen }) => {
    const { closeCart } = useContext(ShoppingCartContext);
    return (
        <div
            className={`${
                isOpen ? 'left-0' : 'left-[-110%]'
            } fixed top-0 z-20 h-full w-full bg-black opacity-50 transition-all duration-700 ease-in-out`}
            onClick={closeCart}
        ></div>
    );
};

export default DarkOverlay;
