import { createSlice } from "@reduxjs/toolkit";
import { myStore } from "./MyStore";

const MyCartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addMyProductToMyCart(state, action) {
            let MyIndex = -1;
            state.forEach((item, index) => {
                if (item.id === action.payload.id) {
                    MyIndex = index;
                }
            });

            if (MyIndex === -1) {
                state.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    mrp: action.payload.mrp,
                    off: action.payload.off,
                    marketer: action.payload.marketer,
                    dose: action.payload.dose,
                    qty: action.payload.qty || 1,
                    desc: action.payload.desc
                });
            } else {
                state[MyIndex].qty += 1;
            }
        },
        removeMyCartItem(state , action){
            return state.filter(item => item.id !== action.payload.id);


        },
        removeOneCartItem(state, action){
            let MyIndex = -1;
            state.forEach((item, index) => {
                if (item.id === action.payload.id) {
                    MyIndex = index;
                }
            });
            if(MyIndex==-1){

            }else{
                state[MyIndex].qty -= 1;

            }


        }
    }
});

export const { addMyProductToMyCart , removeMyCartItem , removeOneCartItem} = MyCartSlice.actions;
export default MyCartSlice.reducer;
