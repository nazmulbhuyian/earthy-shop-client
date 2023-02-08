import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleShop from './SingleShop';

const Shop = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['/products'],
        queryFn: async () => {
            const res = await fetch('https://earthy-shop-server.vercel.app/products')
            const data = await res.json();
            return data;
        },
    })

    return (
        <div className='mt-8 w-3/5 mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    products?.map(product => <SingleShop refetch={refetch} key={product._id} product={product}></SingleShop>)
                }
            </div>
        </div>
    );
};

export default Shop;