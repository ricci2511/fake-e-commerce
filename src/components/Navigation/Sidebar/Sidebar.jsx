import React from 'react';
import SidebarLink from 'components/Navigation/Sidebar/SidebarLink';

const Sidebar = () => {
    return (
        <nav className="mt-12 hidden lg:block">
            <div className="sticky top-40 flex-col space-y-12 lg:flex">
                <SidebarLink path="/fake-e-commerce" linkName="Home" />
                <SidebarLink path="/fake-e-commerce/shop" linkName="Shop" />
                <SidebarLink path="/fake-e-commerce/about" linkName="About" />
                <SidebarLink
                    path="/fake-e-commerce/contact"
                    linkName="Contact"
                />
            </div>
        </nav>
    );
};

export default Sidebar;
