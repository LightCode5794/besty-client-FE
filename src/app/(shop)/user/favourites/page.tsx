
'use client'
import { basicFetch } from "@/api/fetchFuntions";
import { ProductBasic } from "@/interfaces";
import { PRODUCT_BASE_URL, userFavoritesUrl } from "../../../../../config";
import { Divider, Flex } from "antd";
import GridProduct from "@/components/product/productGrid/GridProduct";
import { notFound } from "next/navigation";
import { useAppSelector } from "@/store/hooks";
import { selectUser } from "@/store/features/auth/authSlice";
import { useEffect, useState } from "react";
import withAuth from "@/components/HOC/withAuth";



const getProductData = async (id: number) => {

  const userFavoritesEndpoint = userFavoritesUrl(id)
  const productsData = await basicFetch<ProductBasic[]>(userFavoritesEndpoint);
  return {
    productsData
  }

}

// { searchParams }: { searchParams: { userId: number } }
function FavoritePage() {

  const user = useAppSelector(selectUser);
  // if (!user) {
  //   return notFound();
  // }
  
  const [products, setProducts] = useState<ProductBasic[]>([]);
  
  useEffect(() => {
    const getFavorites = async () => {
      if(user) {
        const { productsData } = await getProductData(user.id);
        setProducts(productsData);
      }
    
    };
  
    getFavorites();
  }, [products]);
  

  return <>
    <div className='content-layout-container'>
      <Flex justify='center' style={{ marginTop: 50 }}>
        <h3>SẢN PHẨM YÊU THÍCH CỦA BẠN</h3>
      </Flex>
      <Divider />
      <GridProduct products={products} />
    </div>
  </>
}
export default withAuth(FavoritePage);