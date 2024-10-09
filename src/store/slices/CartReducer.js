import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('CartItems') !== null ? JSON.parse(localStorage.getItem('CartItems')):[]
const len = localStorage.getItem('cartLength') !== null ? JSON.parse(localStorage.getItem('cartLength')):0

const initialState = {
    cart_items : items,
    length : len
}

const CartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {

        addItem : (state, action) => { 
            const exist = state.cart_items.find((x) => x.id === action.payload.id)
            if(exist){
                state.cart_items = state.cart_items.map((x) => (
                    x.id === action.payload.id ? {...x, quantity:x.quantity+1}: x))
            }
            else{
                const item = action.payload
                item['quantity'] = 1
                state.cart_items.push(item)

            }
            state.length = state.length+1
            localStorage.setItem('CartItems', JSON.stringify(state.cart_items.map(item=>item)))
            localStorage.setItem('cartLength', JSON.stringify(state.length))
        },
        removeItem : (state, action) => {
            let index = state.cart_items.find((cart) => (cart.id === action.payload.id))
            index.quantity -= 1
            if(index.quantity == 0){
                state.cart_items = state.cart_items.filter((item) => (item.id !== action.payload.id))
            }
            state.length = state.length-1
            localStorage.setItem('CartItems', JSON.stringify(state.cart_items.map(item=>item)))
            localStorage.setItem('cartLength', JSON.stringify(state.length))
        },
    }
})

export const {addItem, removeItem} = CartSlice.actions

export default CartSlice.reducer