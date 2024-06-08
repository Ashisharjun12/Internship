import { createSlice } from "@reduxjs/toolkit";

const MyProductSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        addMyProduct(state, action) {
            state.push(action.payload);
        },
        IncreseQty(state, action) {
            const product = state.find(item => item.id === action.payload);
            if (product) {
                product.qty += 1;
            }
        },
        DecreaseQty(state, action) {
            const product = state.find(item => item.id === action.payload);
            if (product && product.qty > 0) {
                product.qty -= 1;
            }
        }
    }
});

export const { addMyProduct, IncreseQty, DecreaseQty } = MyProductSlice.actions;
export default MyProductSlice.reducer;
