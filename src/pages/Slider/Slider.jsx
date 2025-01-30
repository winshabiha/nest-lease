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

            <div className='mt-8 grid md:grid-cols-2 sm:grid-cols-1 gap-10'>
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