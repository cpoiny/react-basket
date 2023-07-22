import { IProduct } from "mocks/products";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

/* Interface article dans le Panier */
interface ICartProduct {
    id: string;
    product: IProduct;
    quantity: number
}

/* Interface panier */
interface ICart {
    products: ICartProduct[];
    addOne: (product: IProduct, quantity: number) => void;
    getTotalProduct: () => number;
    resetCart: () => void;
    removeOne: (product : IProduct) => void;
    removeProduct: (product: IProduct) => void
}

/* Initialisation d'un panier par défaut */
const defaultCart: ICart = {
    products: [],
    addOne: () => { },
    getTotalProduct: () => 0,
    resetCart: () => {},
    removeOne : () => {},
    removeProduct : () => {}
}

/* Initialisation d'un contexte */
const CartContext = createContext<ICart>(defaultCart);


/* Provider */
interface CartProviderProps {
    children: JSX.Element
}

export const CartProvider = (props: CartProviderProps) => {
    const { children } = props;
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([]);

    /* Ok - Function add to cart */
    const addOne = (product: IProduct, quantity: number) => {
        const newProduct = {
            id: uuidv4(),
            product,
            quantity
        }
        /* check if product exist in the cart */
        const foundProduct = cartProducts.find((p) => p.product === newProduct.product);

        if (!foundProduct) {
            setCartProducts([...cartProducts, newProduct]);
        } else {
            /* add quantity */
            foundProduct.quantity += 1;
            setCartProducts([...cartProducts]);
        }
        console.log(cartProducts);
    }

    /* Function to remove quantity of a product */

    const removeOne = (product: IProduct) => {
        const foundProduct = cartProducts.find((p) => p.product.id === product.id);
        
        console.log("found", foundProduct);
        if(!foundProduct){
            return;
        } else {
            if(foundProduct.quantity > 1) {
                foundProduct.quantity -= 1;
                setCartProducts([...cartProducts]);
            } else {
                removeProduct(product);
                setCartProducts([...cartProducts]);
            }
            
        }
        const index = cartProducts.indexOf(foundProduct);
        console.log("index", index);
    }

    /*  Ok - Function to remove all the product of the card */
    const removeProduct = (product : IProduct) => {
        const foundProduct = cartProducts.find((p) => p.product.id === product.id);
        if(foundProduct) {
            const index = cartProducts.indexOf(foundProduct);
            cartProducts.splice(index, 1);
            setCartProducts([...cartProducts]);
    }
    return cartProducts;
}

    /* OK - Function to get the total quantity of the cart  - WIP */
    const getTotalProduct = () => {
        const totalProducts = cartProducts.reduce((accumulator: number, currentValue: ICartProduct) => {
            return accumulator += currentValue.quantity;
        }, 0);
    return totalProducts;

    }

    /* Ok - Function to reset cart */
    const resetCart = () => {
        setCartProducts([]);
    }


    const cart: ICart = {
        products: cartProducts,
        addOne,
        getTotalProduct,
        resetCart,
        removeOne,
        removeProduct
    }

    return <CartContext.Provider value={cart}>
        {children}
    </CartContext.Provider>
}

export const useCartContext = () => useContext(CartContext);