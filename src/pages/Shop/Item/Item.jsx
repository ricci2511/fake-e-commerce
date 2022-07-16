import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedMain from '../../../components/UI/AnimatedMain';
import ApiData from '../../../config/ApiData';
import AddToCartButton from '../../../components/UI/AddToCartButton';

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
                        <AddToCartButton
                            id={parseInt(itemId)}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                        />
                    </section>
                </div>
            </div>
        </AnimatedMain>
    );
};

export default Item;
