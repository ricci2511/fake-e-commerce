import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import DarkOverlay from '../UI/DarkOverlay';
import CartItem from './CartItem';
import { MdClose } from 'react-icons/md';
import { FaSadTear } from 'react-icons/fa';
import { formatPrice } from '../../utils/formatPrice';
import RightSideMenu from '../UI/RightSideMenu';

const Cart = ({ isOpen }) => {
    const { closeCart, cartItems, getCartSubtotal } =
        useContext(ShoppingCartContext);
    const subtotal = formatPrice(getCartSubtotal());

    return (
        <>
            <RightSideMenu isOpen={isOpen} width="w-full sm:w-[30rem]">
                <div className=" flex flex-col gap-16 p-12">
                    <button
                        aria-label="close"
                        className="absolute right-0 top-0 p-5"
                        onClick={closeCart}
                    >
                        <MdClose size={40} />
                    </button>
                    <h1 className="mt-8 text-5xl">Your cart</h1>
                    {cartItems.length < 1 && (
                        <div className="flex items-center gap-4 text-lg">
                            <span>It's so empty in here...</span>
                            <FaSadTear size={40} />
                        </div>
                    )}
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <h4 className="self-end text-3xl">
                        Subtotal <span className="font-bold">{subtotal}</span>
                    </h4>
                    {cartItems.length > 0 && (
                        <button
                            className="rounded-md bg-green-400 px-4 py-2 font-semibold transition-all duration-150 hover:bg-green-500"
                            onClick={() => {
                                closeCart();
                                alert(
                                    'Thanks for being awesome and checking out my project :)'
                                );
                            }}
                        >
                            Checkout
                        </button>
                    )}
                </div>
            </RightSideMenu>
            <DarkOverlay isOpen={isOpen} />
        </>
    );
};

export default Cart;
