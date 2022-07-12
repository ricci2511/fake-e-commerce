import React from 'react';
import Hero from '../components/Home/Hero';
import MainContent from '../components/Home/MainContent';
import Features from '../components/Home/Features';

export const Home = () => {
    return (
        <main className="flex w-full flex-col space-y-12 rounded-xl bg-paleWhite py-12 px-10 shadow-lg">
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
        </main>
    );
};
