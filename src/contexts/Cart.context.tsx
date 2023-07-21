import { IProduct } from "mocks/products";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

/* Interface article dans le Panier */
interface ICartProduct {
    id: string,
    product : IProduct,
    quantity: number
}

/* Interface panier */ 
interface ICart {
    products : ICartProduct[];
    addToCart : (product: IProduct, quantity: number) => void;
     getTotalProduct : () => void
}

/* Initialisation d'un panier par défaut */
const defaultCart: ICart = {
    products : [],
    addToCart: () => {},
    getTotalProduct:() => 0
}

/* Initialisation d'un contexte */
const CartContext = createContext<ICart>(defaultCart);


/* Provider */
interface CartProviderProps {
    children : JSX.Element
}

export const CartProvider = (props: CartProviderProps) => {
    const {children} = props;
    const [cartProducts, setCartProducts] = useState<ICartProduct []>([]);

/* function add to cart */
    const addToCart = (product: IProduct, quantity: number) => {
        const newProduct = {
            id: uuidv4(),
            product,
            quantity
        }
        /* check if product exist in the cart */
        const foundProduct = cartProducts.find((p)=> p.product === newProduct.product);

        if (!foundProduct) {
            setCartProducts([...cartProducts,newProduct]);
        } else {
             /* add quantity */ 
            foundProduct.quantity += 1;
            setCartProducts([...cartProducts]);
        }
        console.log(cartProducts);
    }

/* function to get the total quantity of the cart */
     const getTotalProduct = () => {
       const totalProducts = cartProducts.reduce((accumulator:number, currentValue:ICartProduct) => {
            return accumulator += currentValue.quantity;
        },0);
        console.log("totalQuantity", totalProducts);

        }
    

    const cart: ICart = {
        products: cartProducts,
        addToCart,
        getTotalProduct
    }

return <CartContext.Provider value={cart}>
    {children}
</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);