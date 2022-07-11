import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from '../pages/About';
import { Contact } from '../pages/Contact';
import { Home } from '../pages/Home';
import { Shop } from '../pages/Shop';

const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default Main;
