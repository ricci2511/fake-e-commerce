import React from 'react';
import menFashion from '../assets/men-fashion-2.jpg';
import womenFashion from '../assets/women-fashion.jpg';
import HeroSection from '../components/Home/HeroSection';

const imageWidthClasses = 'w-44 md:w-52 lg:w-64';

export const Home = () => {
    return (
        <main className="flex w-full flex-col space-y-12 rounded-xl bg-paleWhite py-12 px-10 shadow-lg">
            <div className="flex h-full flex-col items-center justify-center space-y-12">
                <div className="flex w-full gap-6 self-start">
                    <img
                        className={imageWidthClasses}
                        src={menFashion}
                        alt=""
                    />
                    <p className="mt-8">
                        The latest and greatest fashion for men at unbeatable
                        prices, go get yours before its all sold out!
                    </p>
                </div>
                <HeroSection />
                <div className="flex gap-4 self-end">
                    <p className="mt-8">
                        The latest and greatest fashion for women at unbeatable
                        prices, go get yours before its all sold out!
                    </p>
                    <img
                        className={imageWidthClasses}
                        src={womenFashion}
                        alt=""
                    />
                </div>
            </div>
        </main>
    );
};
