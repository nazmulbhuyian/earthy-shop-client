import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { AuthContext } from '../../context/AuthProvider';
import CardDetails from './CardDetails';
import Drawer2 from './Drawer2';
import image from './Earthly Logo_edited.webp'
import Nav2 from './Nav2';
import './Navbar.css'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const [isOpen, setIsOpen] = useState(false);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['/quantity', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://earthy-shop-server.vercel.app/quantity?email=${user?.email}`)
            const data = await res.json();
            return data;
        },
    })

    const total = products?.reduce((prv, next) => prv + (next.price), 0).toFixed(2)

    return (
        <div>
            <div className="navbar bgColor p-4 text-white">
                <div className="navbar-start ml-24">
                    <div>
                        <img src={image} alt="" width='80px' />
                    </div>
                    <div className='ml-32'>
                        <Link to='/home'>
                            <h3 className='text-3xl font-semibold'>earthly</h3>
                            <p>Sustainable <Typewriter words={[' products at affordable prices', ' products at affordable prices', ' products at affordable prices', ' products at affordable prices', ' products at affordable prices']} loop={10}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000} /></p>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end mr-24">
                    <Link to='/' className='mr-4'>Shop</Link>
                    {
                        user ?
                            <Link to='' onClick={handleLogOut} className='mr-4'>Log Out</Link>
                            :
                            <Link to='/login' className='mr-4'>Login</Link>
                    }
                    <Nav2 setIsOpen={setIsOpen}></Nav2>
                </div>
            </div>


            <Drawer2 isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className='ml-12'>
                    {
                        products?.map(product => <CardDetails refetch={refetch} product={product} key={product._id}></CardDetails>)
                    }
                    <div>
                        <h1 className='text-2xl font-semibold'>Subtotal</h1>
                        <h3 className='text-2xl font-semibold'>{total}</h3>
                    </div>
                </div>
            </Drawer2>

        </div>
    );
};


export default Navbar;