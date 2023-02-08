import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const SingleShop = ({ product, refetch }) => {

    const { user } = useContext(AuthContext)

    const { pic1, pic2, price1, price2, badge, name, stock } = product;

    const [isHover, setIsHover] = useState(false);
    const navigate = useNavigate()

    const handleCart = (product) => {
        if (user) {
            const products = {
                pic1: product.pic1,
                pic2: product.pic2,
                price1: product.price1,
                price2: product.price2,
                name: product.name,
                badge: product.badge,
                stoke: product.stoke,
                quantity: 1,
                email: user?.email,
                price: product.price2
            }
            fetch('https://earthy-shop-server.vercel.app/orders', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(products)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        refetch()
                        window.location.reload(true);
                    }
                })
        }
        else{
            navigate('login')
        }

    }

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="card card-compact w-72">
            <div className="indicator">
                {badge ? <span className="indicator-item indicator-start mt-3 ml-8 p-4 badge bg-green-600 border-0">{badge}</span> : ''}
                <div
                    className="grid w-72 place-items-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ? (
                        <motion.button
                            initial={false}
                            animate={[isHover ? "hover" : "rest"]}
                            whileTap="press"
                            variants={buttonVariants}
                            onHoverStart={() => setIsHover(true)}
                            onHoverEnd={() => setIsHover(false)}
                            className="star"
                        >
                            <motion.span>
                                <figure><img src={pic1} className='rounded-3xl' alt="img" width='650px' /></figure>
                                <h3 className='text-white text-xl' style={{ marginTop: '-30px' }}>Quick View</h3>
                            </motion.span>
                        </motion.button>
                    ) : (
                        <motion.button
                            initial={false}
                            animate={[isHover ? "hover" : "rest"]}
                            whileTap="press"
                            variants={buttonVariants}
                            onHoverStart={() => setIsHover(true)}
                            onHoverEnd={() => setIsHover(false)}
                            className="star"
                        >
                            <motion.span><figure><img src={pic2} className='rounded-3xl' alt="img" width='160px' /></figure></motion.span>
                        </motion.button>
                    )}
                </div>
            </div>

            <div>
                <h5 className="font-bold my-4">{name}</h5>
                <div className='flex justify-start align-start'>
                    {
                        price1 ?
                            <p className='mr-3 font-bold text-gray-800 line-through'>$ {price1}</p>
                            :
                            ''
                    }
                    <p className='font-bold text-gray-700'>$ {price2}</p>
                </div>
                <div className="card-actions justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {
                        stock ?

                            <motion.button
                                initial={false}
                                animate={[isHover ? "hover" : "rest"]}
                                whileTap="press"
                                onHoverStart={() => setIsHover(true)}
                                onHoverEnd={() => setIsHover(false)}
                                className="star w-full"
                            >
                                <motion.span><button onClick={() => handleCart(product)} className="btn bg-black text-white rounded-full w-full">Add To Cart</button></motion.span>
                            </motion.button>
                            :

                            <motion.button
                                initial={false}
                                animate={[isHover ? "hover" : "rest"]}
                                whileTap="press"
                                onHoverStart={() => setIsHover(true)}
                                onHoverEnd={() => setIsHover(false)}
                                className="star w-full"
                            >
                                <motion.span><button className="btn bg-gray-500 text-white rounded-full w-full" disabled>Out Of Stock</button></motion.span>
                            </motion.button>
                    }
                </div>
            </div>
        </div>
    );
};

const buttonVariants = {
    hover: {
        scale: 1.1
    }
}

export default SingleShop;