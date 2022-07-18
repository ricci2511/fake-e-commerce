import React from 'react';
import SidebarLink from 'components/Navigation/Sidebar/SidebarLink';

const Sidebar = () => {
    return (
        <nav className="mt-12 hidden lg:block">
            <div className="sticky top-40 flex-col space-y-12 lg:flex">
                <SidebarLink path="/" linkName="Home" />
                <SidebarLink path="/shop" linkName="Shop" />
                <SidebarLink path="/about" linkName="About" />
                <SidebarLink path="/contact" linkName="Contact" />
            </div>
        </nav>
    );
};

export default Sidebar;
