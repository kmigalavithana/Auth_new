import React, { useState } from "react";
import SigninForm from "./SigninForm.tsx";
import type { ISignInState } from "../../Utilities/types/signIn/SignIn";
 import axios from "axios";

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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

      return await  axios.get('/sanctum/csrf-cookie').then( res => {
            const response =  axios.post("http://127.0.0.1:8000/api/sign-in", signDtails);

            console.log(response);
        });




    };

    return (
        <SigninForm
            handleInputField={handleInputField}
            handleSubmit={handleSubmit}
        />
    );
};

export default SignIn;
