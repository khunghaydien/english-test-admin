
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IRequestLogin } from '../types'
import auth from '../service/auth'
import { ACCESS_TOKEN, EMAIL, ENVIRONMENT } from '@/const/api.const'
import { RootState } from '..'
import Cookies from 'js-cookie'
export interface AuthState {
    email: string | null
    isLoginFetching: boolean
    permissions: any
    staff: any
    role: any
    user: any
}
const initialState: AuthState = {
    email: typeof localStorage !== 'undefined' ? localStorage.getItem(EMAIL) : '',
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
                localStorage.setItem(EMAIL, email)
                Cookies.set(EMAIL, email)
                if (ENVIRONMENT === 'development') {
                    localStorage.setItem(ACCESS_TOKEN, accessToken)
                    Cookies.set(ACCESS_TOKEN, accessToken)
                }
            }),
            builder.addCase(login.rejected, state => {
                state.isLoginFetching = false
            })
    },
})

export const selectAuth = (state: RootState) => state['auth']

export default authSlice.reducer
