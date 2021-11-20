
export interface Chuong {
    id?: string
    name?: string,

}
export interface Product {
    id?: string,
    name: string

    pg_product_group?: Chuong
}
