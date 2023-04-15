import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        currentProduct: null, //当前打开的产品详情
        list: [],
    },
    reducers: {
        setProducts: (state, action) => {
            state.list = action.payload
        },
        setCurrentProduct: (state, action) => {
            state.currentProduct = action.payload
        }
    },
})
export const { setProducts, setCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer