import { PRODUCTS } from "mocks/products"
import Button from "../Button"
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useCartContext } from "contexts/Cart.context";
import Cart from "components/Cart/Cart";

const Products = () => {
        const {addToCart} = useCartContext();
        // penser a destructurer cart
        // console.log(products, "cartprovider");



    return (
        <ul>
            {PRODUCTS.map((product) => <li key={product.id}>
                {product.title} - {product.price}€
                {/* <QuantityPicker /> */}
                <br></br>
                <button onClick={()=>addToCart(product,1)}>Ajouter au panier</button>
               
            </li>)}
        </ul>
    )
}

export default Products;
