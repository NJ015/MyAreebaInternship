import { configureStore} from "react-redux"
import usersReducer from './usersSlice.js';

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})
