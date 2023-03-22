import { ShoppingForm } from "./shoppingForm"
import { useState, createContext } from "react"
import ShoppingItems from "./shoppingItems"

export const context = createContext()

export function Shopping() {
    const [product, setProduct] = useState([])

    return (
        <context.Provider value= {{ product, setProduct }} >
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