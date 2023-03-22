import { ShoppingForm } from "./shoppingForm"
import { useState, createContext, useReducer } from "react"
import ShoppingItems from "./shoppingItems"

export const context = createContext()

const initialProduct = []

const reducer = (state, action) => {
    switch (action.type) {
        case 'add': 
            return [...state, action.item]
        case 'new':
            return state?.map(p => {
                if (p.id === action.id)
                    return {...p, packed: !p.packed}
                return p
            })
        case 'delete':
            return state.filter(p => p.id !== action.id)
    }
}

export function Shopping() {
    //const [product, setProduct] = useState([])
    const [product, dispatch] = useReducer(reducer, initialProduct)

    return (
        <context.Provider value= {{ product, dispatch }} >
            <div class="flex flex-col items-center justify-center h-screen">
                <h1 class="mb-4 text-3xl text-blue-600">
                    Shopping List
                </h1>
                <div>
                <ShoppingForm />
                {
                    product && <ShoppingItems  /> 
                }
                </div>
            </div>
        </context.Provider>
    )
}