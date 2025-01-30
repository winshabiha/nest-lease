import React from 'react';
import { Link} from 'react-router-dom';
import { FaLocationDot, FaFeatherPointed } from "react-icons/fa6";

const Homes = ({ homes }) => {
    const { image, house_title, segment_name, rent, area, location,description } = homes
    return (
        <div className='grid grid-cols-2'>
            <div className="card bg-base-100 w-[500px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img className='h-[300px] w-[400px] rounded-2xl' src={image} alt="" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{house_title}</h2>
                    <div className='flex justify-between mt-3'>
                        <div>
                            <p className='font-semibold flex gap-2 items-center'><FaFeatherPointed className='text-blue-600' />{segment_name}</p>
                            <p className='font-semibold mx-5'>{rent}</p>
                        </div>
                        <div>
                            <p className='font-semibold flex gap-2 items-center'><FaLocationDot className='text-blue-600' />{location}</p>
                            <p className='font-semibold mx-5'>{area}</p>
                        </div>

                    </div>
                    <div className='mx-4 my-4'><Link to={`/${homes.id}`}><div className="card-actions justify-end"><button className="btn btn-primary">Details</button></div></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Homes;