import { createSlice } from "react-redux"
const initialState = [];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state) => {
      (newUser) => {
        setUsers([...users, newUser]);
      }
    }
  }
})

export const { addUser } = usersSlice.actions;
export default usersSlice.reducers;