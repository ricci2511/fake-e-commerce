import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from 'context/AuthContext';

const AccountDropDown = ({ user }) => {
    const { signInUser, signOutUser } = useContext(AuthContext);

    return (
        <motion.div
            className="absolute right-0 mt-6 flex min-h-[15vh] w-60 flex-col items-center justify-center overflow-y-auto rounded-md bg-lightPink shadow-sm"
            initial={{ opacity: 0, y: '-80px' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '80px', transition: { duration: 0.2 } }}
        >
            {user ? (
                <div>
                    <button
                        className="bg-red-400 py-2 px-4"
                        onClick={signOutUser}
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <button
                    className="relative bg-blue-400 py-2 px-4 text-white"
                    onClick={signInUser}
                >
                    <div className="flex flex-row items-center justify-center space-x-6 text-sm">
                        <div className="absolute left-0 top-0 bottom-0 grid place-items-center border-2 border-blue-400 bg-white px-1">
                            <FcGoogle size={25} />
                        </div>
                        <span>Sign in with Google</span>
                    </div>
                </button>
            )}
        </motion.div>
    );
};

export default AccountDropDown;
