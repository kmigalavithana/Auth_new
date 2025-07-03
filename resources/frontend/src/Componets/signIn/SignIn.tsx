import React, { useState } from "react";
import SigninForm from "./SigninForm.tsx";
import type { ISignInState } from "../../Utilities/types/signIn/SignIn";


const SignIn: React.FC = () => {

    const [signDtails, setSignDtails] = useState<ISignInState>({
        email: '',
        password: ''
    });

    const handleInputField = (event) => {
            const {name,value}=event.target

        setSignDtails((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    console.log(signDtails);

    return (
       <SigninForm handleInputField={handleInputField}/>
    );
};

export default SignIn;
