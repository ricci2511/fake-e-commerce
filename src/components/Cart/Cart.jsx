import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import DarkOverlay from '../UI/DarkOverlay';

const Cart = ({ isOpen }) => {
    const { closeCart, cartItems } = useContext(ShoppingCartContext);

    console.log(cartItems);
    return (
        <>
            <div
                className={`${
                    isOpen ? 'right-0' : 'right-[-110%]'
                } fixed top-0 z-50 flex h-full w-full flex-col items-center gap-16 bg-slate-900 p-16 transition-all duration-700 ease-in-out sm:w-96`}
            >
                <h1 className="text-5xl text-white">Your cart</h1>
                {cartItems.length < 1 && <p className="text-white">Empty :(</p>}
                <button
                    className="rounded-lg bg-red-400 px-3 py-2 text-3xl"
                    onClick={closeCart}
                >
                    Close
                </button>
            </div>
            <DarkOverlay isOpen={isOpen} />
        </>
    );
};

export default Cart;
