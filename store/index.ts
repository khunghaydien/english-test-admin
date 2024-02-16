"use client";
import {
    combineReducers,
    configureStore,
    ThunkAction,
    Action,
} from '@reduxjs/toolkit'
import auth from './reducer/auth';

const rootReducer = combineReducers({
    //reducer
    auth,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
