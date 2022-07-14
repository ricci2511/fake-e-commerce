import React from 'react';
import Categories from './Categories';
import ItemCard from './ItemCard';
import AnimatedMain from '../../components/UI/AnimatedMain';

export const Shop = () => {
    return (
        <AnimatedMain>
            <section>
                <Categories />
            </section>
            <section className="grid w-full grid-flow-row grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
                <ItemCard />
            </section>
        </AnimatedMain>
    );
};

export default Shop;
