import { createSlice } from '@reduxjs/toolkit';
import Storage from '../utils/storage';

var defaultUserinfo = {
    id: "",
    email: "",
    name: "",
    verified: false, // 邮箱是否验证
};

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userinfo: JSON.parse(JSON.stringify(defaultUserinfo))
    },
    reducers: {
        setUserinfo: (state, action) => {
            state.userinfo = action.payload;
            Storage.setItem("userinfo", JSON.stringify(action.payload));
        },
        clearUserinfo: (state, action) => {
            state.userinfo = JSON.parse(JSON.stringify(defaultUserinfo));
            Storage.removeItem("userinfo")
        }
    },
})
export const { setUserinfo, clearUserinfo } = userSlice.actions;
export default userSlice.reducer