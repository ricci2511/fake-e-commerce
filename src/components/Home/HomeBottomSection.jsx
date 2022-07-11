import React from 'react';
import menFashion from '../../assets/men-fashion-2.jpg';
import womenFashion from '../../assets/women-fashion.jpg';

const HomeBottomSection = () => {
    return (
        <section className="flex flex-1 flex-col items-center space-y-3 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-4">
            <h2 className="mb-3 text-center text-4xl font-bold lg:hidden">
                Different Collections
            </h2>
            <img
                src={menFashion}
                alt="fashion clothes for men"
                className="h-96 w-72 lg:min-h-full"
            />
            <p className="self-center text-center lg:hidden">
                With out varied collection of products you will find anything
                you could ever dream of. Browse the shop and you’ll know what i
                mean. Have fun!
            </p>
            <div className="flex w-72 flex-col space-y-4">
                <h2 className="hidden self-end text-4xl font-bold lg:block">
                    Different
                </h2>
                <img src={womenFashion} alt="fashion clothes for women" />
            </div>
            <div className="hidden flex-1 flex-col space-y-8 pt-10 lg:flex lg:min-h-full">
                <h2 className="text-4xl font-bold">
                    <span className="lg:hidden">Different </span>
                    Collections
                </h2>
                <p>
                    With our varied collection of products you will find
                    anything you could ever dream of. Browse the shop and you’ll
                    exactly exactly know what we mean. Have fun!
                </p>
            </div>
        </section>
    );
};

export default HomeBottomSection;
