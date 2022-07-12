import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { BiWorld } from 'react-icons/bi';
import { FaShippingFast } from 'react-icons/fa';

const Features = () => {
    return (
        <div className="grid md:grid-cols-3 lg:gap-x-12">
            <article className="mb-12 md:mb-0">
                <div className="mb-6 inline-block rounded-lg bg-purple p-4 shadow-lg">
                    <BiWorld color="white" size={20} />
                </div>
                <h5 className="mb-4 text-lg font-bold">
                    International shipping
                </h5>
                <p className="text-gray-500">
                    Eum nostrum fugit numquam, voluptates veniam neque quibusdam
                    ullam aspernatur odio soluta, quisquam dolore animi mollitia
                    a omnis praesentium, expedita nobis!
                </p>
            </article>
            <article className="mb-12 md:mb-0">
                <div className="mb-6 inline-block rounded-lg bg-purple p-4 shadow-lg">
                    <FaShippingFast color="white" size={20} />
                </div>
                <h5 className="mb-4 text-lg font-bold">Quick delivery</h5>
                <p className="text-gray-500">
                    Enim cupiditate, minus nulla dolor cumque iure eveniet
                    facere ullam beatae hic voluptatibus dolores exercitationem?
                    Facilis debitis aspernatur amet nisi?
                </p>
            </article>
            <article className="mb-12 md:mb-0">
                <div className="mb-6 inline-block rounded-lg bg-purple p-4 shadow-lg">
                    <BiSupport color="white" size={20} />
                </div>
                <h5 className="mb-4 text-lg font-bold">Support 24/7</h5>
                <p className="text-gray-500">
                    Laudantium totam quas cumque pariatur at doloremque hic quos
                    quia eius. Reiciendis optio minus mollitia rerum labore
                    facilis inventore voluptatem ad, quae quia sint. Ullam.
                </p>
            </article>
        </div>
    );
};

export default Features;
