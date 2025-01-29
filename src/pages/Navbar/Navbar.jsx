import React from 'react';
import { Link, NavLink} from 'react-router-dom';
import userProfile from '../../assets/userProfile.png'
import { LuLogIn } from "react-icons/lu";

const Navbar = () => {
    const list = <>
        <NavLink  to='/'><a>Home</a></NavLink >
        <NavLink to='/about'><a>About</a></NavLink>
        <NavLink to='/contact'><a>Contact</a></NavLink>
        <NavLink to='/more'><a>More</a></NavLink>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm mt-[-150px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {list}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">NestLeaseBD</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 gap-10">
                    {list}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <img className='h-12' src={userProfile} alt="" />
                <Link to='/login'><button className="btn btn-primary">Login<LuLogIn className='text-lg' /></button></Link>
            </div>
        </div>
    );
};

export default Navbar;