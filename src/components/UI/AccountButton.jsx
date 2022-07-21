import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'firebase-config';
import { FaUserAlt } from 'react-icons/fa';
import AccountDropDown from './AccountDropDown';
import { AnimatePresence } from 'framer-motion';

const AccountButton = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleOnDropDownOpen = () =>
        setIsDropDownOpen((prevState) => !prevState);

    return (
        <div className="relative">
            <button
                className="rounded-full bg-white p-4"
                onClick={handleOnDropDownOpen}
            >
                {user ? (
                    <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-14 rounded-full"
                    />
                ) : (
                    <FaUserAlt size={20} />
                )}
            </button>
            <AnimatePresence>
                {isDropDownOpen && <AccountDropDown user={user} />}
            </AnimatePresence>
        </div>
    );
};

export default AccountButton;
