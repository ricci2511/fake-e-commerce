import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkWrapper from 'components/Navigation/LinkWrapper';
import { motion } from 'framer-motion';

const linkClasses = 'w-52 min-w-full py-3 px-2';
const selectedLinkClasses =
    'w-52 min-w-full rounded-l-2xl bg-paleWhite py-3 px-2';

const SidebarLink = ({ path, linkName }) => {
    // inject Framer Motion props to NavLink component to do some cool animations
    const MotionLink = motion(NavLink);

    /**
     * for isActive to work properly the 'end' boolean is crucial
     * if end is not set to true it will always set the home path to active,
     * since the shop and other routes are child routes of home
     */
    return (
        <MotionLink
            to={path}
            className={({ isActive }) =>
                isActive ? selectedLinkClasses : linkClasses
            }
            end={true}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [40, 0] }}
            whileTap={{
                scaleY: 0.9,
                x: [0, 40],
            }}
        >
            <LinkWrapper path={path} linkName={linkName} />
        </MotionLink>
    );
};

export default SidebarLink;
