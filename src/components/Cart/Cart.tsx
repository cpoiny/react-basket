import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useCartContext } from "contexts/Cart.context";


const Cart = () => {

    const { products, resetCart, removeProduct, removeOne, addOne } = useCartContext();
    const reset = () => resetCart();

    return (
        <main>
            <ul>
                {products.map((p) =>
                    <li key={p.id}>Article : {p.product.title} - Quantité :  {p.quantity} - Prix: {p.product.price * p.quantity}€
                        <br />
                        <QuantityPicker quantity={p.quantity} add={() => addOne(p.product, p.quantity)} remove={() => removeOne(p.product)} />
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