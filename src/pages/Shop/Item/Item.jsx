import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedMain from '../../../components/UI/AnimatedMain';
import ApiData from '../../../config/ApiData';
import AddToCartButton from '../../../components/UI/AddToCartButton';
import ErrorMessageWrapper from '../../../components/UI/ErrorMessageWrapper';
import LoadingWrapper from '../../../components/UI/LoadingWrapper';

const Item = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadItem = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(`${ApiData.SERVER_URL}/${itemId}`);
                if (!response.ok)
                    throw Error('Could not fetch the data for this resource');
                const data = await response.json();
                setItem(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadItem();
    }, [itemId]);

    return (
        <AnimatedMain>
            {isLoading && <LoadingWrapper />}
            {error && <ErrorMessageWrapper error={error} />}
            {!isLoading && !error && (
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
            )}
        </AnimatedMain>
    );
};

export default Item;
