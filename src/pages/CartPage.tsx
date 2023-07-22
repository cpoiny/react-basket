import Cart from "components/Cart/Cart";
import { useCartContext } from "contexts/Cart.context";


const CartPage = () => {
    const {getTotalPrice} = useCartContext();
    const totalPrice = getTotalPrice();
    return(
        <main>
            <h1>Cart</h1>
            <Cart />
            <p>Total: {totalPrice}€ </p>
        </main>
    )
}

export default CartPage;