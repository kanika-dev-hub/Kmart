import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : []
}

const productsSlice = createSlice({
    name : 'products',
    initialState,
    reducers : {
        addItem : (state, action) => {
            return action.payload
        },
    }
});

export const {addItem} = productsSlice.actions

export default productsSlice.reducer