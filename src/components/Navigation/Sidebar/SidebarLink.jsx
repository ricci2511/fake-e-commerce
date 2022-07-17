import React from 'react';
import { NavLink } from 'react-router-dom';
import LinkWrapper from 'components/Navigation/LinkWrapper';
import { motion } from 'framer-motion';

const linkClasses = 'w-52 min-w-full py-3 px-2';
const selectedLinkClasses =
    'w-52 min-w-full rounded-l-2xl bg-paleWhite py-3 px-2';

const SidebarLink = ({ path }) => {
    // inject Framer Motion props to NavLink component to do some cool animations
    const MotionLink = motion(NavLink);

    return (
        <MotionLink
            to={path}
            className={({ isActive }) =>
                isActive ? selectedLinkClasses : linkClasses
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: [40, 0] }}
            whileTap={{
                scaleY: 0.9,
                x: [0, 40],
            }}
        >
            <LinkWrapper path={path} />
        </MotionLink>
    );
};

export default SidebarLink;
