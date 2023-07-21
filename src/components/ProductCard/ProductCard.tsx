import Products from "components/Button/Products/Products";
import QuantityPicker from "components/QuantityPicker/QuantityPicker";
import { useCartContext } from "contexts/Cart.context";
import { IProduct } from "mocks/products";
import { useState } from "react";

interface ProductCardProps {
    product : IProduct
}




const ProductCard = (props: ProductCardProps) => {

    const {product} = props;
    const {title, price} = product;
    const {addOne} = useCartContext();
    const [quantity, setQuantity] = useState(1);



    const add = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const remove = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }

    return(
        <main>
              {title} - {price}€
            
            <QuantityPicker quantity={quantity} add={add} remove={remove} />
            <br></br>

            <button onClick={()=>addOne(product,quantity)}>Ajouter au panier</button>
           
    
        </main>
    )
}

export default ProductCard;