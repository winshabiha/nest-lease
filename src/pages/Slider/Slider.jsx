import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLocationDot ,FaFeatherPointed } from "react-icons/fa6";


const Slider = () => {
    const [allHomes, setAllHomes] = useState([])

    useEffect(() => {
        fetch('https://api2-kohl.vercel.app/allhouses')
            .then(res => res.json())
            .then(data => setAllHomes(data))
    }, [])
    return (
        <div className='mt-28'>
            <p className='text-4xl font-bold text-blue-700 mb-5 text-center'> Types of Property</p>
            <div className='h-[1500px] overflow-scroll'>
                {
                    allHomes.map((homes, index) => <div key={index} className=' mb-10'>
                        <div>
                            <p className='mt-3 font-bold mx-5 text-4xl mb-5'>{homes.house_title}</p>
                            <img className='h-screen w-screen' src={homes.image} alt="" />
                            <div className='flex justify-between mt-3'>
                                <div>
                                    <p className='font-semibold mx-5 text-xl flex gap-2 items-center'><FaFeatherPointed className='text-blue-600' />{homes.segment_name}</p>
                                    <p className='font-semibold mx-5 text-xl'>{homes.rent}</p>
                                </div>
                                <div>
                                    <p className='font-semibold mx-5 text-xl flex gap-2 items-center'><FaLocationDot className='text-blue-600' />{homes.location}</p>
                                    <p className='font-semibold mx-5 text-xl'>{homes.area}</p>
                                </div>
                            </div>
                            <div className='mx-4 my-4 text-lg'>{(homes.description).slice(0, 300)}...<span className='text-red-600 font-semibold'><Link to={`/${homes._id}`}>Details</Link></span></div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Slider;