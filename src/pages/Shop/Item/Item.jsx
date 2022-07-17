import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedMain from '../../../components/UI/AnimatedMain';
import ApiData from '../../../config/ApiData';
import AddToCartButton from '../../../components/UI/AddToCartButton';
import ErrorMessageWrapper from '../../../components/UI/ErrorMessageWrapper';
import LoadingWrapper from '../../../components/UI/LoadingWrapper';
import { formatPrice } from '../../../utils/formatPrice';

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
                <div className="container mx-auto flex h-full flex-col justify-start gap-12 md:justify-center lg:flex-row xl:px-8">
                    <section className="flex justify-center lg:w-1/2">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="self-center rounded-md"
                        />
                    </section>
                    <section className="flex flex-col gap-8 lg:mb-8 lg:w-1/2 lg:justify-center">
                        <div className="flex flex-col justify-between gap-8 self-center lg:self-start">
                            <h1 className="w-full max-w-[35ch] text-2xl font-bold lg:text-4xl">
                                {item.title}
                            </h1>
                            <p className="max-w-[45ch]">{item.description}.</p>
                            <div className="flex items-center gap-4 self-start">
                                <p className="text-xl font-bold">
                                    {formatPrice(item.price)}
                                </p>
                                <AddToCartButton
                                    id={parseInt(itemId)}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </AnimatedMain>
    );
};

export default Item;
