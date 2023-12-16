export type User = {
    id: number
    name: string
}

export type Product = {
    id: number,
    name: string,
    liked: boolean,
    price: number,
    colors: string[],
    sizes: string[],
    description: string,
    thumbnail: string,
    images: string[],
}
export type ProductWithoutImages = Omit<Product, 'images'>;

export type CartItem = {
    id: number,
    quantity: number,
    name: string,
    image: string,
    price: number,
    selectedColor: string,
    selectedSize: string,
}
export interface TemporaryBill {
    district?: string;
    email: string;
    fullAddress: string;
    fullName: string;
    note?: string;
    numberPhone: string;
    province: string;
    ward: string;
}