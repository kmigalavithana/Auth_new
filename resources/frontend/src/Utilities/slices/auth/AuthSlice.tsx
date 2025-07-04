import { createSelector, createSlice } from "@reduxjs/toolkit";
import { IAuthInitialState } from "../../types/authSlice";


const initialState: IAuthInitialState = {
    token: '',
    user_id:'',
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},

});

export default authSlice.reducer;
