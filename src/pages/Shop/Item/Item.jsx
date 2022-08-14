import React from 'react';
import { useParams } from 'react-router-dom';
import ApiData from 'config/ApiData';
import AddToCartButton from 'components/UI/Buttons/AddToCartButton';
import ErrorMessageWrapper from 'components/UI/ErrorMessageWrapper';
import LoadingWrapper from 'components/UI/LoadingWrapper';
import { formatPrice } from 'utils/formatPrice';
import useFetch from 'hooks/useFetch';
import PurchaseNowButton from 'components/UI/Buttons/PurchaseNowButton';
import AnimatedLayoutWithoutPadding from 'components/UI/AnimatedLayouts/AnimatedLayoutWithoutPadding';

const Item = () => {
    const { itemId } = useParams();
    const { data, isLoading, error } = useFetch(
        `${ApiData.SERVER_URL}/${itemId}`
    );
    const { title, price, description, image } = data;

    return (
        <AnimatedLayoutWithoutPadding>
            {isLoading && <LoadingWrapper />}
            {error && <ErrorMessageWrapper error={error} />}
            {!isLoading && !error && (
                <div className="container mx-auto flex h-full flex-col justify-start gap-8 lg:flex-row xl:pr-8">
                    <section className="z-[1] flex h-full justify-center rounded-t-xl bg-white lg:w-1/2 lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl">
                        <img
                            src={image}
                            alt={title}
                            className="w-3/5 self-center p-2 pt-6 pb-3 lg:py-0"
                        />
                    </section>
                    <section className="flex flex-col px-6 pb-6 lg:w-1/2 lg:justify-center lg:py-6">
                        <div className="flex flex-col justify-between gap-6 self-center lg:self-start">
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
        </AnimatedLayoutWithoutPadding>
    );
};

export default Item;
