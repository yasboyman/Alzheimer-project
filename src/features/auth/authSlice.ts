import {createSlice, createAsyncThunk, AnyAction} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import authService from "./authService";

export interface authState {
    user?: string | null
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message:any
}

// Get user from local storage //
// @ts-ignore
const user = JSON.parse(localStorage.getItem('user'))

const initialState: authState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user - using THUNK //
// Register user
export const register = createAsyncThunk(
    'auth/register',
    async (user: {} , thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// console.log('this is the log in ', login)
console.log('this is the registration in ', register)
//Login
export const login = createAsyncThunk(
    'auth/login',
    async (user: {} , thunkAPI) => {
        try {
            return await authService.login(user)
        } catch (error: any) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout', async () => {
        await authService.logout()
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.isLoading = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            // this handles registration //
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.isSuccess = false
            state.message =  action.payload
        })
            //this handles logout
            .addCase(logout.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = null
            })
            //This handles Login
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true
                state.isLoading = false
                state.isSuccess = false
                state.message =  action.payload
            })

    }
})

// Action creators are generated for each case reducer function
export const {reset} = authSlice.actions

export default authSlice.reducer