import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";

const CardDetails = ({ product, refetch }) => {
    const { pic1, name, price2 } = product;
    const { quantity, _id } = product

    const [isHovered, setIsHovered] = useState(false);

    const [count, setCount] = useState(quantity)
    const newPrices = price2 * count;

    const handleDecrease = () => {
        const newCount = count - 1
        setCount(newCount)
        const newPrices = price2 * newCount;
        const update = {
            _id,
            price: newPrices,
            quantity: newCount
        }
        fetch('https://earthy-shop-server.vercel.app/update', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                refetch()
            })
    }
    const handleIncrease = (id) => {
        const newCount = count + 1
        setCount(newCount)
        const newPrices = price2 * newCount;
        const update = {
            _id,
            price: newPrices,
            quantity: newCount
        }
        fetch('https://earthy-shop-server.vercel.app/update', {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(result => {
                refetch()
            })
    }

    const handleDelete = (id) => {
        fetch(`https://earthy-shop-server.vercel.app/delete/${id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    refetch()
                }
            })
    }

    return (
        <div>

            <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {
                    isHovered ?
                        <div className='flex align-center justify-start mb-8'>
                            <img src={pic1} alt="" width='96px' />
                            <div className='ml-2'>
                                <h3 className='font-bold'>{name}</h3>
                                <h3 className='font-bold'>$ {newPrices}</h3>
                                <div className='flex items-center justify-between'>
                                    <div className='border flex items-center'>
                                        <button className='mr-2' onClick={handleDecrease}>-</button>
                                        <p className='mr-2'>{count}</p>
                                        <button onClick={handleIncrease}>+</button>
                                    </div>
                                    <div>
                                        <button onClick={() => handleDelete(_id)}><AiFillDelete className='text-red-500' size={20}></AiFillDelete></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='flex align-center justify-start mb-8'>
                            <img src={pic1} alt="" width='96px' />
                            <div className='ml-2'>
                                <h3 className='font-bold'>{name}</h3>
                                <h3 className='font-bold'>$ {newPrices}</h3>
                                <div className='flex items-center'>
                                    <div className='border flex items-center'>
                                        <button className='mr-2' onClick={handleDecrease}>-</button>
                                        <p className='mr-2'>{count}</p>
                                        <button onClick={handleIncrease}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>

        </div>
    );
};

export default CardDetails;