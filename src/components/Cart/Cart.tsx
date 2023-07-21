import { useCartContext } from "contexts/Cart.context";

const Cart = () => {

        
    const { products, resetCart, removeProduct } = useCartContext();
    const reset = () => resetCart();
    const add = () => {
        
    }
   
    return (
        <main>
            <ul>
                {products.map((product) =>
                    <li key={product.id}>Article : {product.product.title} - Quantité :  {product.quantity}
                   <br />
                    <button onClick={() => removeProduct(product.product)}>X</button>
                   
                    
                    
                    </li>
                    
                )}
            </ul>

            <button onClick={reset} >Reset</button>
        </main>
    )
}

export default Cart;