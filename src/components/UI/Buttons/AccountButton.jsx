import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'firebase-config';
import { FaUserAlt } from 'react-icons/fa';
import AccountDropDown from 'components/UI/AccountDropDown';
import FadeInBackdrop from 'components/UI/DarkBackdrops/FadeInBackdrop';

const AccountButton = () => {
    const [user] = useAuthState(auth);
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const handleOnDropDownOpen = () =>
        setIsDropDownOpen((prevState) => !prevState);

    return (
        <div className="relative">
            <button
                className={`${
                    user ? '' : 'bg-white p-3 sm:p-4'
                } flex items-center rounded-full`}
                onClick={handleOnDropDownOpen}
            >
                {user ? (
                    <img
                        src={user.photoURL}
                        alt={user.displayName}
                        className="w-10 rounded-full sm:w-12"
                    />
                ) : (
                    <FaUserAlt size={20} />
                )}
            </button>
            <AccountDropDown
                isOpen={isDropDownOpen}
                user={user}
                closeDropDown={handleOnDropDownOpen}
            />
            <FadeInBackdrop
                isOpen={isDropDownOpen}
                closeFocusedElement={handleOnDropDownOpen}
            />
        </div>
    );
};

export default AccountButton;
