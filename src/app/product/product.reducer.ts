import { Product } from "./product.model"

export const ADD_PRODUCT = "ADD_PRODUCT"
export const DELETE_PRODUCT = "DELETE_PRODUCT"

export const initialState = []
export const addProductReducer = (state: Product[] = initialState, action: any) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return [...state, action.payload]
        case DELETE_PRODUCT:
            console.log("action.payload", action.payload)
            const filteredState = state.filter(element=> element.id !== action.payload.id)
            console.log("filteredState", filteredState)
            return [...filteredState]
        default:
            return state
    }
    return state
}