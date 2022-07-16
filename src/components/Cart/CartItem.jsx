import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';
import { formatPrice } from '../../utils/formatPrice';

const CartItem = ({ item }) => {
    const {
        getItemQuantity,
        handleItemQuantityChange,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeCartItem,
    } = useContext(ShoppingCartContext);
    const quantity = getItemQuantity(item.id);

    return (
        <div className="relative flex gap-6 border-b-2 border-slate-200 p-3">
            <button
                className="absolute right-0 -top-4"
                aria-label="delete"
                onClick={() => removeCartItem(item.id)}
            >
                <MdDeleteForever size={25} />
            </button>
            <section className="h-48 w-1/3">
                <img src={item.image} alt={item.title} />
            </section>
            <section className="mt-2 flex w-10/12 flex-col space-y-6">
                <h3>{item.title}</h3>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <button
                            aria-label="decrease"
                            onClick={() => decreaseCartQuantity(item.id)}
                        >
                            <FaMinus />
                        </button>
                        <input
                            type="number"
                            value={quantity}
                            onChange={(e) =>
                                handleItemQuantityChange(e, item.id)
                            }
                            min="1"
                            className="w-12 bg-whiteGrayish py-1 text-center outline-0 focus:shadow-lg"
                        />
                        <button
                            aria-label="increase"
                            onClick={() => increaseCartQuantity(item.id)}
                        >
                            <FaPlus />
                        </button>
                    </div>
                    <div>
                        <p className="font-bold">{formatPrice(item.price)}</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartItem;
