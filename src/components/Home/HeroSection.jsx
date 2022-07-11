import React from 'react';
import electronics from '../../assets/electronics.jpg';

const HeroSection = () => {
    return (
        <section className="flex flex-col space-y-8 lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-12">
            <div className="flex flex-col items-center space-y-8 lg:items-start lg:justify-around lg:space-y-0">
                <h1 className="text-5xl font-normal">
                    <strong className="font-extrabold">Choose your</strong>{' '}
                    <span className="text-purple">interest</span>
                </h1>
                <button className="rounded-xl bg-purple py-4 px-6 text-center text-white">
                    Start shopping
                </button>
            </div>
            <div className="grid place-items-start">
                <img
                    src={electronics}
                    alt="pieces of electronics"
                    className="w-90 rounded-md"
                />
            </div>
        </section>
    );
};

export default HeroSection;
