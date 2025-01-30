import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const {createUser} = useContext(authContext)

    const handleSubmit=e=>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const image = form.get("photoURL")
        const email = form.get("email")
        const password = form.get("password")
        
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            updateProfile(result.user,{
                displayName: name,
                photoURL: image
            })
            .then(()=>{
                console.log("profile updated")
            })
            .catch(err=>console.log(err.message))
        })
        .catch(err=>console.log(err.message))
    }

    return (
        <div>
            <div className='max-w-6xl mx-auto mt-[-250px]'>
                <Header></Header>
                <Navbar></Navbar>
            </div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                    </div>
                    <div className="md:w-[500px] bg-base-100 shrink-0 shadow-2xl p-10">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="Image" name="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control grid">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                            <p className='text-center'>Already have an account? Please <Link to='/login'><span className='text-blue-800 font-semibold'>Login</span></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;