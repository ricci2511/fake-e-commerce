import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'firebase-config';
import { FaUserAlt } from 'react-icons/fa';
import AccountDropDown from './AccountDropDown';
import { AnimatePresence } from 'framer-motion';

const AccountButton = () => {
    const [user] = useAuthState(auth);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleOnDropDownOpen = () =>
        setIsDropDownOpen((prevState) => !prevState);

    return (
        <div className="relative">
            <button
                className={`${
                    user ? '' : 'bg-white p-4'
                } flex items-center rounded-full`}
                onClick={handleOnDropDownOpen}
            >
                {user ? (
                    <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-12 rounded-full"
                    />
                ) : (
                    <FaUserAlt size={20} />
                )}
            </button>
            <AnimatePresence>
                {isDropDownOpen && (
                    <>
                        <AccountDropDown
                            user={user}
                            closeDropDown={handleOnDropDownOpen}
                        />
                        <div
                            className="fixed top-0 left-0 z-20 h-full w-full bg-black opacity-70"
                            onClick={handleOnDropDownOpen}
                        ></div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccountButton;
