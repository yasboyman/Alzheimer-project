import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "../features/counterSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
     reducer: {
         counter: CounterReducer,
         auth: authReducer
     },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
