import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleShop from './SingleShop';
import { GenaratePDF } from './GenaratePDF';

const Shop = () => {

    // const { data: products = [], refetch } = useQuery({
    //     queryKey: ['/products'],
    //     queryFn: async () => {
    //         const res = await fetch('https://earthy-shop-server.vercel.app/products')
    //         const data = await res.json();
    //         return data;
    //     },
    // })

    // return (
    //     <div className='mt-8 w-3/5 mx-auto'>
    //         <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
    //             {
    //                 products?.map(product => <SingleShop refetch={refetch} key={product._id} product={product}></SingleShop>)
    //             }
    //         </div>
    //     </div>
    // );

    const tableData = [
        { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'nane Smith', age: 40 },
    { id: 4, name: 'bane Smith', age: 50 },
    { id: 3, name: 'Bob Johnson', age: 35 }
      ];
    
      return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
  );


};

export default Shop;