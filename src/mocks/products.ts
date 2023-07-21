export interface IProduct {
    id: number,
    title : string,
    price: number
}

export const PRODUCTS : IProduct [] = [
    {
        id:1,
        title: "Lampe",
        price: 2
    },
    {
        id:2,
        title: "Table",
        price: 5
    },
    {
        id:3,
        title: "Bureau",
        price: 20
    },
]
