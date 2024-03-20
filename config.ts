import { ApiError } from "next/dist/server/api-utils";


const CUSTOMER_ROLE_ID = 1;
const API_URL = 'http://localhost:5244/api/';
const SEARCH_BASE_URL = `${API_URL}products/search/product?query=`;
const FILTER_BASE_URL = `${API_URL}products/filter/product?query=`;
const PRODUCT_BASE_URL = `${API_URL}products`
const ORDER_BASE_URL = `${API_URL}orders`
const ORDER_GENERATE_PAYMENT_URL = `${ORDER_BASE_URL}/create-url-payment`;
const ORDER_VALIDATE_ORDER_PAYMENT_URL = `${ORDER_BASE_URL}/validate`;
const USER_URL = `${API_URL}users`;


const productUrl = (id?: string) => `${API_URL}products/${id}`;
const productSetLikeUrl = (productId: number, userId: number) => `${API_URL}products/${productId}/like?userId=${userId}`
const productSetUnLikeUrl = (productId: number, userId: number) => `${API_URL}products/${productId}/unlike?userId=${userId}`
const productCheckLikeUrl = (productId: number, userId: number) => `${API_URL}products/${productId}/isLiked?userId=${userId}`
const userUrl = (id?: string) => `${API_URL}users/${id}`;
const userFavoritesUrl = (id: number) => `${USER_URL}/${id}/favourites`

//const productAllUrl =(id? :string) => `${API_URL}/products`;

const ordersByUserUrl = (userId: number) => `${ORDER_BASE_URL}/user/${userId}`
export {
    API_URL,
    SEARCH_BASE_URL,
    FILTER_BASE_URL,
    productUrl,
    productSetLikeUrl,
    productSetUnLikeUrl,
    productCheckLikeUrl,
    userUrl,
    userFavoritesUrl,
    PRODUCT_BASE_URL,
    USER_URL,
    CUSTOMER_ROLE_ID,
    ORDER_BASE_URL,
    ORDER_GENERATE_PAYMENT_URL,
    ORDER_VALIDATE_ORDER_PAYMENT_URL,
    ordersByUserUrl
}
