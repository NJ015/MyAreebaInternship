import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice.jsx'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
    }
})


