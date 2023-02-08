import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { HiOutlineShoppingCart } from "react-icons/hi";

export default function Nav2({ setIsOpen }) {

    const { user } = useContext(AuthContext)


    const { data: quantity = [] } = useQuery({
        queryKey: ['/quantity', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://earthy-shop-server.vercel.app/quantity?email=${user?.email}`)
            const data = await res.json();
            return data;
        },
    })


    const total = quantity?.reduce((prv, next) => prv + next.quantity, 0)

    return (
        <header className="flex justify-between">
            <div className="indicator">

                {total ? <span className="indicator-item indicator-center mt-1 ml-4 bg-none p-1 badge border-0">{total}</span> : ''}
                <button
                    onClick={() => setIsOpen(true)}
                >
                    <HiOutlineShoppingCart size={30}></HiOutlineShoppingCart>
                </button>
            </div>
        </header>
    );

}