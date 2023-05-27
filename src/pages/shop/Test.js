import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Test = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['/api/v1/brand'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/api/v1/brand')
            const data = await res.json();
            return data;
        },
    })
    console.log(products);

    return (
        <div className='mt-8 w-3/5 mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    products?.data?.map(product => <div>
                        <h1>{product?.name}</h1>
                        <h1>{product?.email}</h1>
                        <h1>{product?.location}</h1>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Test;