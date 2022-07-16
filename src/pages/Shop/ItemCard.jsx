import React, { useContext } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

const ItemCard = ({ id, title, image, price }) => {
    const { increaseCartQuantity } = useContext(ShoppingCartContext);

    return (
        <article className="flex flex-col rounded-2xl bg-white shadow-xl">
            <div className="mx-auto h-80 p-12">
                <Link to={`/shop/${id}`}>
                    <motion.img
                        src={image}
                        alt={title}
                        className="h-full cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    />
                </Link>
            </div>
            <div className="flex h-full flex-col gap-6 p-8">
                <div className="flex h-full flex-col justify-end gap-4">
                    <h4 className="font-medium">{title}</h4>
                    <p className="text-lg font-bold">${price}</p>
                </div>
                <motion.button
                    className="border-2 border-purple bg-white py-2 px-6 text-black"
                    whileHover={{
                        backgroundColor: '#5C4EBD',
                        color: 'rgb(255, 255, 255)',
                    }}
                    onClick={() =>
                        increaseCartQuantity({
                            id: id,
                            title: title,
                            image: image,
                            price: price,
                        })
                    }
                >
                    <div className="flex flex-row items-center justify-center space-x-3">
                        <FaCartPlus size={18} />
                        <span>Add to cart</span>
                    </div>
                </motion.button>
            </div>
        </article>
    );
};

export default ItemCard;
