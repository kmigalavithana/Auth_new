export interface ISignInState{
    email: string,
    password: string,
}

export interface ISignInFromprop{
    handleInputField: (event:React.ChangeEvent<HTMLSelectElement>) => void
}
