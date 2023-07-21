import { IProduct, PRODUCTS } from "mocks/products";


export const getProducts = () => {
    return PRODUCTS;
}

export const getProduct = (id: number) : IProduct | undefined =>{
    return PRODUCTS.find((product) => product.id === id);
}
