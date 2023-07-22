import { PRODUCTS } from "mocks/products";
import ProductCard from "components/ProductCard/ProductCard";

const Products = () => {
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
