import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLayout from 'components/UI/AnimatedLayouts/AnimatedLayout';
import { FaAngleDoubleRight } from 'react-icons/fa';

const PageNotFound = () => {
    return (
        <AnimatedLayout>
            <div className="flex w-full flex-col items-center justify-center gap-8 text-4xl font-bold">
                <h1>404 Error</h1>
                <h1>Page not found</h1>
                <Link to="/">
                    <button className="rounded-md bg-purple px-4 py-2 text-white">
                        <div className="flex gap-4">
                            <span>Back to Homepage</span>
                            <FaAngleDoubleRight />
                        </div>
                    </button>
                </Link>
            </div>
        </AnimatedLayout>
    );
};

export default PageNotFound;
