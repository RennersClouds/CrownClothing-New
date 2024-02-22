import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss"
import Button from "../button/button.component";




const defaultFormFields = {
  
  email: "",
  password: "",
  
};

const SignInForm = () => {
  const [formFields, setFormfields] = useState(defaultFormFields);
  const {  email, password } = formFields;

  const resetFormFields = ()=>{
    setFormfields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    // console.log({response})
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { email, password, confirmPassword } = event.target;

   
    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(response)
      resetFormFields()
    
    } catch (error) {

      switch(error.code){
        case 'auth/wrong-password':
          alert('Incorrect password')
          break
        case 'auth/user-not-found':
          alert('user not found')
          break
        default:
          console.log(error);
      }
    }

  };

  const handleform = (event) => {
    const { name, value } = event.target;

    setFormfields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
    

        <FormInput
          label="Email"
          type="email"
          onChange={handleform}
          name="email"
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleform}
          name="password"
          value={password}
          required
        />
      <div className="buttons-container">
        <Button type="submit">
          Sign In
        </Button>
        <Button type='button' buttontype='google-sign-in' onClick={signInWithGoogle}>
          Google Sign In
        </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;