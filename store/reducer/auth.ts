'use client'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IRequestLogin } from '../types'
import auth from '../service/auth'
import { ACCESS_TOKEN, EMAIL, ENVIRONMENT } from '@/const/api.const'
import { RootState } from '..'

export interface AuthState {
    email: string
    isLoginFetching: boolean
    permissions: any
    staff: any
    role: any
    user: any
}
const initialState: AuthState = {
    // email: localStorage.getItem(EMAIL) || '',
    email: '',
    isLoginFetching: false,
    permissions: {},
    staff: null,
    role: null,
    user: null,
}

export const login = createAsyncThunk(
    'auth/login',
    async (requestBody: IRequestLogin, { rejectWithValue, dispatch }) => {
        try {
            const res = await auth.login(requestBody)
            return res
        } catch (err: any) {
            console.log(err);
            return rejectWithValue(err)
        }
    }
)
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.pending, state => {
            state.isLoginFetching = true
        }),
            builder.addCase(login.fulfilled, (state, { payload }) => {
                const { accessToken, email } = payload.data
                state.isLoginFetching = false
                state.email = email
                // localStorage.setItem(EMAIL, email)
                // if (ENVIRONMENT === 'development') {
                //     localStorage.setItem(ACCESS_TOKEN, accessToken)
                // }
            }),
            builder.addCase(login.rejected, state => {
                state.isLoginFetching = false
            })
    },
})

export const selectAuth = (state: RootState) => state['auth']

export default authSlice.reducer
