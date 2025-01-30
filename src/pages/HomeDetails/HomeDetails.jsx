import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaLocationDot, FaFeatherPointed, FaSackDollar } from "react-icons/fa6";
import { FaCaretSquareLeft, FaHandPointRight } from "react-icons/fa";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';


const HomeDetails = () => {
    const DetailsHome = useLoaderData()
    
    return (
        <div className='max-w-4xl mx-auto'>
            <div className='mt-[-250px]'>
                <Header></Header>
                <Navbar></Navbar>
            </div>
            <div className=' mt-20'>
                {
                    DetailsHome.map((home, index) => <div key={index} className=' mb-10'>
                        <div>
                            <p className='mt-3 font-bold mx-5 text-4xl mb-5 text-center'>{home.house_title}</p>
                            <div className='flex justify-center'>
                            <img className='h-[400px] w-[900px] rounded-2xl' src={home.image} alt="" />
                            </div>
                            <div className='flex justify-between mt-3'>
                                <p className='font-semibold mx-5 text-lg flex gap-2 items-center'><FaFeatherPointed className='text-blue-600' />{home.segment_name}</p>
                                <p className='font-semibold mx-5 text-lg flex gap-2 items-center'><FaLocationDot className='text-blue-600' />{home.location}</p>
                                <p className='font-semibold mx-5 text-lg flex gap-2 items-center'><FaCaretSquareLeft className='text-blue-600' />{home.area}</p>
                                <p className='font-semibold mx-5 text-lg flex gap-2 items-center'><FaSackDollar className='text-blue-600' />{home.rent}</p>
                            </div>
                            <div className='flex gap-2 font-semibold mx-5 text-lg mt-2'>
                                <div>
                                    <FaHandPointRight className='text-blue-600' />
                                </div>
                                <div>
                                    <p>{home.facilities[0]},{home.facilities[1]},{home.facilities[2]},{home.facilities[3]}</p>
                                </div>
                            </div>
                            <div className='mx-4 my-4'><span className='text-xl font-bold'>Details:</span> {home.description}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeDetails;