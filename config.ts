import { ApiError } from "next/dist/server/api-utils";

const API_URL = 'http://localhost:5244/api/';
const SEARCH_BASE_URL = `${API_URL}products/search/product?query=`;
const FILTER_BASE_URL = `${API_URL}products/filter/product?query=`;
const PRODUCT_ALL_URL = `${API_URL}products`

const productUrl =(id? :string) => `${API_URL}products/${id}`;
const userUrl =(id? :string) => `${API_URL}users/${id}`;

//const productAllUrl =(id? :string) => `${API_URL}/products`;

export {
    API_URL,
    SEARCH_BASE_URL,
    FILTER_BASE_URL,
    productUrl,
    userUrl,
    PRODUCT_ALL_URL,
}
