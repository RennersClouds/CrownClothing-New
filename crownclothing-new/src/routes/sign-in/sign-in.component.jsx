import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";





const SignIn = ()=>{

    const logGoogleUser = async()=> {
        const {user} = await signInWithGooglePopup()
        // console.log({response})
       const userDocRef = await createUserDocumentFromAuth(user)


    }

    return (
      <div>
        <h1>Sign in</h1>
        <button onClick={logGoogleUser}>Sign In with google</button>
      </div>
    );
}

export default SignIn;