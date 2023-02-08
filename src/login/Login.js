import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();


    const handleSignIn = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                navigate('/')
            })
            .then(err => console.error(err));
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h3 className='text-xl'>Email: nazmul@gmail.com</h3>
                <h3 className='text-xl'>Password: 123456</h3>
                <h3 className='text-center text-xl mt-5'>Login</h3>
                <form onSubmit={handleSubmit(handleSignIn)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">E-mail</span>
                        </label>
                        <input type="email" {...register("email", { required: 'Email Address is required' })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 caracter or longer' },
                                // pattern:{value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[$@])/, message: 'Passwor should be strong'}
                            })
                        }
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>

                    <input className='btn btn-accent w-full mt-5 bg-red-500 text-white border-0' value='Log In' type="submit" />
                    {
                        // signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                </form>
                <p>New to Earthy Shop <Link className='text-secondary' to='/register'>Please Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;