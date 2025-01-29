import React from 'react';
import { useLoaderData} from 'react-router-dom';
import { FaLocationDot, FaFeatherPointed } from "react-icons/fa6";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

const HomeDetails = () => {
    const DetailsHome = useLoaderData()
    console.log(DetailsHome)
    return (
        <div className='max-w-6xl mx-auto'>
            <div className='mt-[-250px]'>
                <Header></Header>
                <Navbar></Navbar>
            </div>
            <div className='border border-blue-600'>
                {
                    DetailsHome.map((home, index) => <div key={index} className=' mb-10'>
                        <div>
                            <p className='mt-3 font-bold mx-5 text-4xl mb-5'>{home.house_title}</p>
                            <img className='h-screen w-screen' src={home.image} alt="" />
                            <div className='flex justify-between mt-3'>
                                <div>
                                    <p className='font-semibold mx-5 text-xl flex gap-2 items-center'><FaFeatherPointed className='text-blue-600' />{home.segment_name}</p>
                                    <p className='font-semibold mx-5 text-xl'>{home.rent}</p>
                                </div>
                                <div>
                                    <p className='font-semibold mx-5 text-xl flex gap-2 items-center'><FaLocationDot className='text-blue-600' />{home.location}</p>
                                    <p className='font-semibold mx-5 text-xl'>{home.area}</p>
                                </div>
                            </div>
                            <div className='mx-4 my-4 text-lg'>{home.description}</div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default HomeDetails;