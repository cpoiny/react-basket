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
    addOne : (product: IProduct, quantity: number) => void;
     getTotalProduct : () => void,
     resetCart : () => void
}

/* Initialisation d'un panier par défaut */
const defaultCart: ICart = {
    products : [],
    addOne: () => {},
    getTotalProduct:() => 0,
    resetCart: () => {}
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
    const addOne = (product: IProduct, quantity: number) => {
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
    
    /* Function to remove a product */
    
    const removeProduct= (product: IProduct) => {
        const foundProduct = cartProducts.find((p)=> p.product.id === product.id);
        if (!foundProduct) return;
        const index = cartProducts.indexOf(foundProduct);
        console.log("index product to remove", index);


    }




/* function to get the total quantity of the cart  - WIP */
     const getTotalProduct = () => {
       const totalProducts = cartProducts.reduce((accumulator:number, currentValue:ICartProduct) => {
            return accumulator += currentValue.quantity;
        },0);
        console.log("totalQuantity", totalProducts);

        }


    
/* function to reset cart */
    const resetCart = () => {
       // console.log("panier avant", cart);
        setCartProducts([]);
       // console.log("panier apres reset", cart);
    }



    const cart: ICart = {
        products: cartProducts,
        addOne,
        getTotalProduct,
        resetCart
    }

return <CartContext.Provider value={cart}>
    {children}
</CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);