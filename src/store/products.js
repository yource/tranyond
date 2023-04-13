import { createSlice } from '@reduxjs/toolkit';
import Storage from '../utils/storage';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        detail: null, //当前打开的产品详情
        list: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.detail = action.payload
        },
        setProductDetail: (state, action) => {
            state.list = action.payload
        }
    },
})
export const { setProducts, setProductDetail } = productsSlice.actions;
export default productsSlice.reducer