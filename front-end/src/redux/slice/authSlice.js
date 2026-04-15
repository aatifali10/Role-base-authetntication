import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { loginUser, registerUser, uploadProfilePicture } from "./authServices"

export const register = createAsyncThunk("/auth/register", registerUser);
export const login = createAsyncThunk("/auth/login", loginUser);
export const uploadProfilePic = createAsyncThunk("/auth/uploadProfilePic", uploadProfilePicture);

const persistedUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

const initialState = {
    user: persistedUser,
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
                state.role = action.payload.userExists.role,

                localStorage.setItem("token", action.payload.token),
                localStorage.setItem("role", action.payload.userExists.role),
                localStorage.setItem("user", JSON.stringify(action.payload.userExists))
        })
        builder.addCase(uploadProfilePic.fulfilled, (state, action) => {
                state.user = action.payload.user,
                localStorage.setItem("user", JSON.stringify(action.payload.user))
        })
    }
})

export const { logout } =  authSlice.actions;
export default authSlice.reducer;