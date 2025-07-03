import React, { useState } from "react";
import SigninForm from "./SigninForm.tsx";
import type { ISignInState } from "../../Utilities/types/signIn/SignIn";


const SignIn: React.FC = () => {

    const [signDtails, setSignDtails] = useState<ISignInState>({
        email: '',
        password: ''
    });

    return (
       <SigninForm />
    );
};

export default SignIn;
