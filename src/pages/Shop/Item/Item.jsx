import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedMain from '../../../components/UI/AnimatedMain';
import { motion } from 'framer-motion';
import { FaCartPlus } from 'react-icons/fa';
import ApiData from '../../../config/ApiData';

const Item = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        const loadItem = async () => {
            try {
                const response = await fetch(`${ApiData.SERVER_URL}/${itemId}`);
                const data = await response.json();
                setItem(data);
            } catch (err) {
                console.error(err);
            } finally {
                console.log('finished fetching item...');
            }
        };

        loadItem();
    }, [itemId]);

    return (
        <AnimatedMain>
            <div className="container mx-auto flex h-full flex-col justify-start gap-12 md:justify-center xl:px-8">
                <div className="flex flex-col items-center gap-4 md:flex-row">
                    <section className="md:w-10/12">
                        <h1 className="text-center text-4xl font-bold md:text-left md:text-6xl">
                            {item.title}
                        </h1>
                    </section>
                    <section className="max-w-sm px-10 md:w-1/2 xl:w-1/3">
                        <img src={item.image} alt={item.title} />
                    </section>
                </div>
                <div className="flex w-full flex-col justify-center space-y-6 md:flex-row md:space-y-0">
                    <section className="md:w-1/2">
                        <p className="max-w-[45ch]">{item.description}</p>
                    </section>
                    <section className="flex flex-col space-y-4 md:w-1/2 md:pr-10">
                        <p className="self-end text-xl font-bold">
                            ${item.price}
                        </p>
                        <motion.button
                            className="self-end border-2 border-purple bg-white py-2 px-6 text-black"
                            whileHover={{
                                backgroundColor: '#5C4EBD',
                                color: 'rgb(255, 255, 255)',
                            }}
                        >
                            <div className="flex flex-row items-center justify-center space-x-3">
                                <FaCartPlus size={18} />
                                <span>Add to cart</span>
                            </div>
                        </motion.button>
                    </section>
                </div>
            </div>
        </AnimatedMain>
    );
};

export default Item;
