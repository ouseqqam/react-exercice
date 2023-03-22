import { useState, useEffect } from "react"
import { useContext } from "react"
import { context } from "./shoppingList"


function ShoppingItems() {
    const {product, dispatch } = useContext(context)
    const [total, setTotal] = useState(0)

    const setProduct = (id) => {
        dispatch({type: 'new', id})
    }

    const deleteProduct = (id) => {
        dispatch({type: 'delete', id})
    }

    useEffect(() => {
        setTotal(
            product?.reduce((accum, p) => accum + p.price, 0)
        )
    }, [product]);

    const onChange = (id) => {
        setProduct(id)
    }

    const onDelete = (id) => {
        deleteProduct(id)
    }

    return (
        <div class=''>
            <div>
                <h3 class="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-600">
                    Unpacked items 
                </h3>
                {
                    product?.map(p => {
                        if (!p.packed)
                            return (
                                <div key={p.id} class='flex justify-between gap-2 text-2xl'>
                                    <label htmlFor={p.id}>
                                        <input  type="checkbox" id={p.id} onChange={() => onChange(p.id)} checked={p.packed} />
                                            {p.product}
                                    </label>   
                                    <p> { p.price } </p>
                                    <button onClick= {() => onDelete(p.id)} ><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                            )
                    })
                }
            </div>
            <div>
            <h3 class="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-600">
                    Packed items
                </h3>
                {
                    product?.map(p => {
                        if (p.packed) {
                            return (
                                <div key={p.id} class='flex justify-between gap-2 text-2xl font-normal leading-normal mt-0 mb-2'>
                                    <label htmlFor={p.id}>
                                        <input type="checkbox" id={p.id} onChange={() => onChange(p.id)} checked={p.packed} />
                                            {p.product}
                                    </label>   
                                    <p> { p.price } </p>
                                    <button onClick= {() => onDelete(p.id)} ><i class="fa fa-trash" aria-hidden="true"></i></button>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div class=" flex justify-end text-4xl font-normal leading-normal mt-0 mb-2 text-blue-600" >
                total: {total}
            </div>
        </div> 
    )
}

export default ShoppingItems;