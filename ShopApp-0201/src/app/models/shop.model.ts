import Product from "./product.model"

export default interface Shop{
    id: number,
    name: string,
    dateCreated: Date
    products: Product[]
}