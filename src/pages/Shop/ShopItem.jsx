import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AddToCartButton from 'components/UI/Buttons/AddToCartButton';
import { formatPrice } from 'utils/formatPrice';

const ShopItem = ({ id, title, image, price }) => {
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
                    <h4 className="text-sm font-medium md:text-base">
                        {title}
                    </h4>
                    <p className="text-base font-bold">{formatPrice(price)}</p>
                </div>
                <AddToCartButton
                    id={id}
                    title={title}
                    image={image}
                    price={price}
                />
            </div>
        </article>
    );
};

export default ShopItem;
