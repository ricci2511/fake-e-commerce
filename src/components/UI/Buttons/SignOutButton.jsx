import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react';

const SignOutButton = () => {
    const { signOutUser } = useContext(AuthContext);

    return (
        <button
            className="w-full bg-red-500 py-2 px-4 text-white"
            onClick={signOutUser}
        >
            Sign out
        </button>
    );
};

export default SignOutButton;
