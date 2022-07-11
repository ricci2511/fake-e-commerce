import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import HomeBottomSection from '../components/Home/HomeBottomSection';

export const Home = () => {
    return (
        <main className="flex w-full flex-col space-y-12 overflow-y-auto rounded-xl bg-paleWhite py-12 px-10 shadow-lg">
            <HeroSection />
            <HomeBottomSection />
        </main>
    );
};
