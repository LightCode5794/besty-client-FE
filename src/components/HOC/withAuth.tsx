import { selectIsLoggedIn } from "@/store/features/auth/authSlice"
import { notFound, redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux"


export default function withAuth(Component: any) {

    return function WithAuth(props: any) {
        const path = usePathname();
        const isLoggedIn = useSelector(selectIsLoggedIn);
        useEffect(() => {
            if (isLoggedIn) {
                path == '/login' || '/register' ?  "/" : redirect(path)
            }
        }, [isLoggedIn, path])
        if(!isLoggedIn) {
            return notFound();
        }
        
        return <Component {...props} />;
    }
}