import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';


const Login = () => {

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    return (
        <>
            <div className="text-base text-secondary font-3xl hidden lg:block">
                <button className='mx-2 my-5 py-2 px-5 border rounded' onClick={handleLogin}>Login</button>
            </div>
        </>
    )
}

export default Login