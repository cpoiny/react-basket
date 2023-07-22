import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useCartContext } from "contexts/Cart.context";
import { IProduct } from "mocks/products";
import { useState } from "react";


const Cart = () => {
   
    const { products, resetCart, removeProduct, removeOne, addOne } = useCartContext();
    const reset = () => resetCart();

    return (
        <main>
            <ul>
                {products.map((p) =>
                    <li key={p.id}>Article : {p.product.title} - Quantité :  {p.quantity}
                        <br />
                        {/* <button onClick={() => removeOne(p.product)}>-</button> */}
                         {/* <p>{p.quantity}</p> */}
                    <QuantityPicker quantity={p.quantity} add={() => addOne(p.product, p.quantity)} remove={() => removeOne(p.product)} />

                        {/* <button onClick={() => addOne(p.product, p.quantity)}>+</button> */}
                        <br /><br />
                        <button onClick={() => removeProduct(p.product)}>X</button>
                    </li>

                )}
            </ul>

            <button onClick={reset} >Reset</button>
        </main>
    )
}

export default Cart;