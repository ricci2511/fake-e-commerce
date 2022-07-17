import React from 'react';
import SidebarLink from 'components/Navigation/Sidebar/SidebarLink';

const Sidebar = () => {
    return (
        <nav className="mt-12 hidden lg:block">
            <div className="sticky top-40 flex-col space-y-12 lg:flex">
                <SidebarLink path="/" />
                <SidebarLink path="/shop" />
                <SidebarLink path="/about" />
                <SidebarLink path="/contact" />
            </div>
        </nav>
    );
};

export default Sidebar;
