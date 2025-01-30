import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { authContext } from '../../providers/AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash } from 'react-icons/fa6';
import { IoEyeSharp } from 'react-icons/io5';

const Register = () => {
    const { createUser } = useContext(authContext)
    const [visible, setVisible] = useState(true)
    const [error, setError] = useState(null)

    const handleSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get("name")
        const image = form.get("photoURL")
        const email = form.get("email")
        const password = form.get("password")

        setError(null)

        if(password.length < 8){
            setError("Your Password is too short")
            return;
        }
        else if(!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)){
            setError('Please add at least one uppercase and one digit into your password')
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image
                })
                    .then(() => {
                        console.log("profile updated")
                        toast("Registered Successfully")
                    })
                    .catch(err => console.log(err.message))
            })
            .catch(err => {
                console.log(err.message)
                if(err.message == "Firebase: Error (auth/email-already-in-use)."){
                    setError("This email has already been used")
                }
                else if(err.message == "Firebase: Password should be at least 6 characters (auth/weak-password)."){
                    setError("You have to include at least 6 charecter as your password")
                }
            })
    }

    const hideShow = () => {
        setVisible(!visible)
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
                                <div className='flex items-center'>
                                    <input type={visible ? 'password' : 'text'} placeholder="password" name="password" className="input input-bordered" required />
                                    {
                                        visible ? <FaEyeSlash className='relative right-5 text-xl' onClick={hideShow} /> : <IoEyeSharp onClick={hideShow} className='relative right-5 text-xl' />
                                    }
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                                error && <p style={{ color: 'red' }}>{error}</p>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral">Register</button>
                            </div>
                            <p className='text-center'>Already have an account? Please <Link to='/login'><span className='text-blue-800 font-semibold'>Login</span></Link></p>
                            
                            
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;