import React from 'react';
import Hero from './Hero';
import MainContent from './MainContent';
import Features from './Features';
import AnimatedMain from 'components/UI/AnimatedMain';

const Home = () => {
    return (
        <AnimatedMain>
            <section className="flex h-full flex-col items-center justify-center space-y-12">
                <Hero />
            </section>
            <section className="px-6 py-12 lg:px-12 xl:px-28 2xl:px-44">
                <MainContent />
            </section>
            <section className="mb-32 border-t-[1px] border-t-slate-300 pt-2 text-center text-gray-800">
                <h2 className="mb-12 text-3xl font-bold">
                    Why <u className="text-purple"> us?</u>
                </h2>
                <Features />
            </section>
        </AnimatedMain>
    );
};

export default Home;
