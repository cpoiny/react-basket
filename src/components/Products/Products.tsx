import { PRODUCTS } from "mocks/products"
import { useCartContext } from "contexts/Cart.context";
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
