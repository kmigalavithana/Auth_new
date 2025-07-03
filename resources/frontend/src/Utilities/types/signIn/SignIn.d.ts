export interface ISignInState{
    email: string,
    password: string,
}

export interface ISignInFromprop{
    handleInputField: (event:React.ChangeEvent<HTMLSelectElement>) => void
    handleSubmit: (event:React.FormEvent<HTMLFormElement>) => void
}
