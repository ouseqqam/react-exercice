import { context } from "./shoppingList"
import { useContext } from "react"


export function ShoppingForm() {
    const { setProduct } = useContext(context)
    const onSubmit = e => {
        const product = {
            id: Math.random() * 100,
            product: e.target.product.value,
            price: Number(e.target.price.value),
            packed: false
        }
        e.preventDefault()
        if (product.product && product.price)
            setProduct(prev => [...prev, product])
        e.target.product.value = ''
        e.target.price.value = ''
    }
    return (
        <div>
            <form onSubmit={onSubmit} class='flex gap-1'>
                <input
                 class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 type="text" placeholder="Product" name="product" />
                <input 
                class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text" placeholder="Price" name="price" />
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add</button>
            </form>
        </div>
    )
}