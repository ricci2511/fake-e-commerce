import React, { useEffect, useState } from 'react';
import Categories from './Categories';
import ShopItem from './ShopItem';
import AnimatedMain from '../../components/UI/AnimatedMain';
import ApiData from '../../config/ApiData';
import { BouncingBall } from 'react-svg-spinners';

export const Shop = () => {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // fetching all shop items on page load
    useEffect(() => {
        const loadItems = async () => {
            try {
                setIsLoading(true);
                const response = await fetch(ApiData.SERVER_URL);
                const itemsData = await response.json();
                setItems(itemsData);
            } catch (err) {
                console.error(err);
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
            {isLoading && (
                <div className="flex items-center justify-center">
                    <BouncingBall width={35} height={35} />
                </div>
            )}
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
