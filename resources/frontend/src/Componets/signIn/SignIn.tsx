import React, { useState } from "react";
import SigninForm from "./SigninForm.tsx";
import type { ISignInState } from "../../Utilities/types/signIn/SignIn";

const SignIn: React.FC = () => {
    const [signDtails, setSignDtails] = useState<ISignInState>({
        email: "",
        password: "",
    });

    const handleInputField = (
        event: React.ChangeEvent<HTMLSelectElement>,
    ): void => {
        const { name, value } = event.target;

        setSignDtails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('www');
    };

    return (
        <SigninForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
