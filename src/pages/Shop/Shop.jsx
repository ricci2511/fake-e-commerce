import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import ShopItem from './ShopItem';
import AnimatedMain from 'components/UI/AnimatedMain';
import ApiData from 'config/ApiData';
import ErrorMessageWrapper from 'components/UI/ErrorMessageWrapper';
import LoadingWrapper from 'components/UI/LoadingWrapper';

export const Shop = () => {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // fetching all shop items on page load
    useEffect(() => {
        const loadItems = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(ApiData.SERVER_URL);
                if (!response.ok)
                    throw Error('Could not fetch the data for that resource');
                const itemsData = await response.json();
                setItems(itemsData);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadItems();
    }, []);

    return (
        <AnimatedMain>
            <section>
                <Categories changeCategory={setCategory} />
            </section>
            {isLoading && <LoadingWrapper />}
            {error && <ErrorMessageWrapper error={error} />}
            <section className="grid w-full grid-flow-row grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                {category !== ''
                    ? items
                          .filter((item) => item.category === category)
                          .map((item) => <ShopItem key={item.id} {...item} />)
                    : items.map((item) => <ShopItem key={item.id} {...item} />)}
            </section>
        </AnimatedMain>
    );
};

export default Shop;
