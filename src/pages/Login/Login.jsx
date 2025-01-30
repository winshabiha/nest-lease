import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa6';


const Login = () => {
    const { login } = useContext(authContext)
    const [error,setError] = useState(null)

    const handleSubmit = e => {


        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")

        setError(null)

        login(email, password)
            .then(result => {
                toast("Logged in successfully")
                console.log(result.user)
            })
            .catch(err =>{
                if (err.message === 'Firebase: Error (auth/invalid-credential).') {
                    setError('Invalid password')
                }
            })
    }
    return (
        <div>
            <div className='max-w-6xl mx-auto mt-[-250px]'>
                <Header></Header>
                <Navbar></Navbar>
            </div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="md:w-[700px] card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control grid">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control grid">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                            </div>
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <p>New to this website please<Link to='/register'><span className='text-blue-700'>Register</span></Link> </p>
                            {
                                error && <p style={{ color: 'red' }}>{error}</p>
                            }
                            <button className="btn btn-primary mt-4">Login</button>
                        </form>
                        <div className='mb-10 grid justify-center'>
                            <button className="btn btn-neutral"><FcGoogle className='text-3xl' />Login With Google</button>
                            <button className="btn btn-neutral mt-3"><FaGithub className='text-3xl' />Login With Github</button>
                        </div>
                    </div>

                </div>

                <ToastContainer />
            </div>

        </div>
    );
};

export default Login;