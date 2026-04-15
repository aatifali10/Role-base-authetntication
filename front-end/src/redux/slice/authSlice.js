import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { loginUser, registerUser } from "./authServices"

export const register = createAsyncThunk("/auth/register", registerUser);
export const login = createAsyncThunk("/auth/login", loginUser);

const initialState = {
    user: null,
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role")
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null,
                state.token = null,
                state.role = null,
                localStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.userExists,
                state.token = action.payload.token,
                state.role = action.payload.role,

                localStorage.setItem("token", action.payload.token),
                localStorage.setItem("role", action.payload.userExists.role)
        })
    }
})

export const { logout } =  authSlice.actions;
export default authSlice.reducer;