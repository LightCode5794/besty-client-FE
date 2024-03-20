import { Variation } from "@/interfaces";

export type ProductInfo = {
    id: number,
    name: string,
    liked: boolean,
    variations: Variation[],
    price: number,
    discount: number,
    description: string
};

export type OrderDetail = {
    id: number,
    quantity: number,
}

export interface ChildComponentProps {
    product: ProductInfo;
}

export type Color = {
    id: number,
    hex: string,
    isAvailable: boolean


}

export type Size = {
    id: number,
    colorId: number,
    name: string,
    inventory: number,

}

export type SizeBtn = {
    name: string,
    isDisable: boolean
}
export type ColorBtn = {
    name: string,
    isDisable: boolean
}