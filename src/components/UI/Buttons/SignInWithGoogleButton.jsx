import { AuthContext } from 'context/AuthContext';
import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignInWithGoogleButton = () => {
    const { signInUser } = useContext(AuthContext);

    return (
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
    );
};

export default SignInWithGoogleButton;
