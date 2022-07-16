import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import About from '../pages/About';
import Contact from '../pages/Contact';
import { AnimatePresence } from 'framer-motion';
import Item from '../pages/Shop/Item';

const Main = () => {
    const location = useLocation();
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // wrap all routes in AnimatePresence to animate page transitions
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/shop">
                    <Route index element={<Shop />} />
                    <Route path=":itemId" element={<Item />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    );
};

export default Main;
