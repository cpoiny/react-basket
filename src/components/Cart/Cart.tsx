import { useCartContext } from "contexts/Cart.context";

const Cart = () => {
const {products} = useCartContext();

    return (
        <main>
            <ul>
            {products.map((product)=>
            <li key={product.id}>Article : {product.product.title} - Quantité : {product.quantity} </li>
            )}
               </ul>
               </main>
)}

export default Cart;