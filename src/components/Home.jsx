import { getAuth, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase.config";
import { useState } from "react";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const Home = () => {
    const [user, setUser] = useState(null);
    const handleGoogleSignIn = ()=>{
    signInWithPopup(auth,provider)
    .then(result => {
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user);
    setUser(user);
    }).catch(error =>{
    const errorCode = error.code;
    // const errorMessage = error.message;
    // The email of the user's account used.
    // const email = error.customData.email;
    // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode);
    })
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn}>GoogleSignIn</button>
            <h1>{user?.displayName}</h1>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Home;