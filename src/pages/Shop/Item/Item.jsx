import React from 'react';
import { useParams } from 'react-router-dom';
import AnimatedMain from 'components/UI/AnimatedMain';
import ApiData from 'config/ApiData';
import AddToCartButton from 'components/UI/AddToCartButton';
import ErrorMessageWrapper from 'components/UI/ErrorMessageWrapper';
import LoadingWrapper from 'components/UI/LoadingWrapper';
import { formatPrice } from 'utils/formatPrice';
import useFetch from 'hooks/useFetch';
import PurchaseNowButton from 'components/UI/PurchaseNowButton';

const Item = () => {
    const { itemId } = useParams();
    const { data, isLoading, error } = useFetch(
        `${ApiData.SERVER_URL}/${itemId}`
    );
    const { title, price, description, image } = data;

    return (
        <AnimatedMain>
            {isLoading && <LoadingWrapper />}
            {error && <ErrorMessageWrapper error={error} />}
            {!isLoading && !error && (
                <div className="container mx-auto flex h-full flex-col justify-start gap-12 md:flex-row xl:px-8">
                    <section className="flex justify-center lg:w-1/2">
                        <img
                            src={image}
                            alt={title}
                            className="self-center rounded-md"
                        />
                    </section>
                    <section className="flex flex-col gap-8 lg:mb-8 lg:w-1/2 lg:justify-center">
                        <div className="flex flex-col justify-between gap-8 self-center lg:self-start">
                            <h1 className="w-full max-w-[35ch] text-xl font-bold md:text-2xl lg:text-4xl">
                                {title}
                            </h1>
                            <p className="max-w-[45ch] text-sm md:text-base">
                                {description}.
                            </p>
                            <p className="text-lg font-bold md:text-xl">
                                {formatPrice(price)}
                            </p>
                            <div className="flex flex-col gap-3">
                                <AddToCartButton
                                    id={parseInt(itemId)}
                                    title={title}
                                    image={image}
                                    price={price}
                                />
                                <PurchaseNowButton
                                    id={parseInt(itemId)}
                                    title={title}
                                    image={image}
                                    price={price}
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
