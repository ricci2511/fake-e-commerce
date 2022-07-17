import React from 'react';
import womenFashion from 'assets/women-fashion.jpg';

const MainContent = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-3 sm:space-y-0">
            <div className="space-y-4 text-center sm:w-1/2 sm:text-left">
                <h3 className="text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                    Diverse <span className="text-purple">Collections</span>
                </h3>
                <p>
                    Explore the huge variety of products we offer, we're sure
                    we'll help you find your next favourite item!
                </p>
            </div>
            <div className="z-0 w-9/12 sm:w-1/2 sm:rotate-3">
                <img
                    src={womenFashion}
                    alt="electronics, clothing and other apparel"
                    className="rounded-lg"
                />
            </div>
        </div>
    );
};

export default MainContent;
