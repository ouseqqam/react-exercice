import { ShoppingForm } from "./shoppingForm"
import { useState } from "react"
import ShoppingItems from "./shoppingItems"


export function Shopping() {
    const [product, setProduct] = useState([])

    return (
        <div class="flex flex-col items-center">
            <h1 class="mb-4 text-3xl ">
                Shopping List
            </h1>
            <div>
            <ShoppingForm setProduct = { setProduct } />
            {
                product && <ShoppingItems product = { product } setProduct = {setProduct} /> 
            }
            </div>
        </div>
    )
}