import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/ProductsReducer";
import CartReducer from "./slices/CartReducer";

export const store = configureStore({
    reducer : {
        products : ProductsReducer,
        cart : CartReducer,
    }
})