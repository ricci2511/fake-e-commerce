import React from 'react';

const DarkOverlay = ({ isOpen, closeRightSideMenu }) => {
    return (
        <div
            className={`${
                isOpen ? 'left-0' : 'left-[-110%]'
            } fixed top-0 z-20 h-full w-full bg-black opacity-50 transition-all duration-700 ease-in-out`}
            onClick={closeRightSideMenu}
        ></div>
    );
};

export default DarkOverlay;
