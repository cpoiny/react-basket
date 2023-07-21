import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useCartContext } from "contexts/Cart.context";

const Cart = () => {
    const { products, resetCart } = useCartContext();
    const reset = () => resetCart();

    return (
        <main>
            <ul>
                {products.map((product) =>
                    <li key={product.id}>Article : {product.product.title} - Quantité : {product.quantity}
                    </li>
                )}
            </ul>

            <button onClick={reset} >Reset</button>
        </main>
    )
}

export default Cart;