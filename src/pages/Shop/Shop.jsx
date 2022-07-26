import React, { useState } from 'react';
import Categories from 'pages/Shop/Categories';
import ShopItem from 'pages/Shop/ShopItem';
import AnimatedMain from 'components/UI/AnimatedMain';
import ApiData from 'config/ApiData';
import ErrorMessageWrapper from 'components/UI/ErrorMessageWrapper';
import LoadingWrapper from 'components/UI/LoadingWrapper';
import useFetch from 'hooks/useFetch';

export const Shop = () => {
    const { data, isLoading, error } = useFetch(ApiData.SERVER_URL);
    const [category, setCategory] = useState('');

    return (
        <AnimatedMain>
            <section>
                <Categories changeCategory={setCategory} />
            </section>
            {isLoading && <LoadingWrapper />}
            {error && <ErrorMessageWrapper error={error} />}
            <section className="grid w-full grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {category
                    ? data
                          .filter((item) => item.category === category)
                          .map((item) => <ShopItem key={item.id} {...item} />)
                    : data.map((item) => <ShopItem key={item.id} {...item} />)}
            </section>
        </AnimatedMain>
    );
};

export default Shop;
