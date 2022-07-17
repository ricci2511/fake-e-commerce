import React from 'react';

const RightSideMenu = ({ isOpen, width, children }) => {
    return (
        <div
            className={`${
                isOpen ? 'right-0' : 'right-[-110%]'
            } ${width} fixed top-0 z-30 h-full overflow-y-auto bg-white transition-all duration-700 ease-in-out`}
        >
            {children}
        </div>
    );
};

export default RightSideMenu;
