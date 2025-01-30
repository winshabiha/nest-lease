import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationDot, FaFeatherPointed } from "react-icons/fa6";
import Homes from '../Homes/Homes';


const Slider = () => {
    const [value, setValue] = useState(4)
    const [allHomes, setAllHomes] = useState([])
    // console.log(value)
    // const [value, setValue] = useState(4)

    useEffect(() => {
        fetch('https://api2-kohl.vercel.app/allhouses')
            .then(res => res.json())
            .then(data => setAllHomes(data))
    }, [])
    return (



        <div className='mt-28'>
            <p className='text-4xl font-bold text-blue-700 mb-5 text-center'> Types of Property</p>
            {/* <div className='grid grid-cols-2'> */}
            {/* {
                    allHomes.map((homes, index) => <div key={index} className=' mb-10'>


                            <div className="card bg-base-100 w-[500px] shadow-xl">
                                <figure className="px-10 pt-10">
                                <img className='h-[300px] w-[400px] rounded-2xl' src={homes.image} alt="" />
                                </figure>
                                <div className="card-body">
                                <h2 className="card-title">{homes.house_title}</h2>
                                <div className='flex justify-between mt-3'>
                                    <div>
                                        <p className='font-semibold flex gap-2 items-center'><FaFeatherPointed className='text-blue-600' />{homes.segment_name}</p>
                                        <p className='font-semibold mx-5'>{homes.rent}</p>
                                    </div>
                                    <div>
                                        <p className='font-semibold flex gap-2 items-center'><FaLocationDot className='text-blue-600' />{homes.location}</p>
                                        <p className='font-semibold mx-5'>{homes.area}</p>
                                    </div>

                                </div>
                                <div className='mx-4 my-4'>{(homes.description).slice(0, 150)}...<span className='text-red-600 font-semibold'><Link to={`/${homes.id}`}>Details</Link></span></div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                            </div>
                    </div>)
                } */}
            {/* </div> */}

            <div className='mt-8 grid grid-cols-2 gap-10'>
                {
                    allHomes.length ? allHomes.slice(0, value).map(homes => <Homes homes={homes} key={homes._id}></Homes>) : <div className='grid grid-cols-3 gap-96'>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                        <div className="flex w-52 flex-col gap-4">
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </div>
                }
            </div>
            <div className='mt-5 flex justify-center'>
                {
                    value === 4 ? <button className='btn btn-primary' onClick={() => setValue(allHomes.length)}>View All</button> : <button className='btn btn-primary' onClick={() => setValue(4)}>Show Less</button>
                }
            </div>
        </div>
    );
};

export default Slider;