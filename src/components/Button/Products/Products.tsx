import { PRODUCTS } from "mocks/products"
import Button from "../Button"
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useCartContext } from "contexts/Cart.context";
import Cart from "components/Cart/Cart";
import ProductCard from "components/ProductCard/ProductCard";

const Products = () => {
    const { addOne } = useCartContext();

    return (
        <ul>
            {PRODUCTS.map((product) =>
                <li key={product.id}>
                    <ProductCard product={product} />
                </li>)}
        </ul>
    )
}

export default Products;
