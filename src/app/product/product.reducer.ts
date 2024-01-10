import { Product } from "./product.model"

export const ADD_PRODUCT = "ADD_PRODUCT"

export const initialState = []
export const addProductReducer = (state: Product[]=initialState, action:any)=>{
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]
        default:
            return state
    }
    return state
}