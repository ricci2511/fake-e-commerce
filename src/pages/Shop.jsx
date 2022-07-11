import React from 'react';
import ShopCategories from '../components/Shop/ShopCategories';
import ShopItem from '../components/Shop/ShopItem';

export const Shop = () => {
    return (
        <main className="flex w-full flex-col space-y-12 rounded-xl bg-paleWhite py-12 px-10 shadow-lg">
            <section>
                <ShopCategories />
            </section>
            <section className="grid w-full grid-flow-row grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
            </section>
        </main>
    );
};
