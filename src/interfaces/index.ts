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
//export type ProductWithoutImages = Omit<Product, 'images'>;

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

export interface Category {
    id: number,
    name: string
}

export interface ProductBasic {
    id: number,
    name: string,
    price: number;
    discountPercent: number;
    fixedPrice: number,
    status: string
    categories: Category[];
    thumbnail: string;
}

export interface SizeColor {
    id : number,
    price: number;
    inventory: number;
    size: string;

}
export interface Variation {
    id: number
    color: string,
    image: string,
    sizesColor: SizeColor[]
}
export interface ProductDetail {
    id: number,
    name: string,
    price: number;
    description: string,
    discountPercent: number;
    fixedPrice: number,
    status: string
    categories: Category[];
    thumbnail: string;
    images: string[],
    variations: Variation[]
}

export type ImageCarousel = {
    url: string,
    color: string,
}