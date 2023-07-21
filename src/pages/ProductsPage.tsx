import Button from "components/Button/Button";
import Products from "components/Button/Products/Products";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { link } from "fs";
import { PRODUCTS } from "mocks/products";

const ProductsPage = () => {
    return(
        <main>
            <h1>Products</h1>
            <Products />
            
        </main>
    )
}

export default ProductsPage;