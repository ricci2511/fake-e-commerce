import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SignInWithGoogleButton from 'components/UI/Buttons/SignInWithGoogleButton';
import SignOutButton from 'components/UI/Buttons/SignOutButton';

const AccountDropDown = ({ isOpen, user, closeDropDown }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="absolute right-0 z-30 mt-6 flex min-h-[10vh] w-60 flex-col items-center overflow-y-auto rounded-md bg-lightPink p-4 shadow-sm"
                    initial={{ opacity: 0, y: '-80px' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                        opacity: 0,
                        y: '80px',
                        transition: { duration: 0.2 },
                    }}
                >
                    {user ? (
                        <div className="flex h-full flex-col gap-3">
                            <h4 className="text-sm">
                                Signed in as <strong>{user.displayName}</strong>
                            </h4>
                            <div onClick={closeDropDown}>
                                <SignOutButton />
                            </div>
                        </div>
                    ) : (
                        <div onClick={closeDropDown}>
                            <SignInWithGoogleButton />
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AccountDropDown;
