import React from 'react';
import { TbClockHour3 } from "react-icons/tb";
import { GiCctvCamera } from "react-icons/gi";
import { GiLift } from "react-icons/gi";
import { GiSecurityGate } from "react-icons/gi";
import { MdDriveEta } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";

const NewSection = () => {
    return (
        <div className='mt-20 mb-20'>
            <div>
                <h1 className='text-6xl font-semibold text-center text-blue-400'>Storage Units in Nest Lease</h1>
                <h2 className='text-xl font-semibold text-center mt-5'>Check out available self storage listings in your area to secure the right unit for you.</h2>
                <h3 className='text-xl font-semibold text-center'>What Amenities Should You Look For in a Storage Facility?</h3>
                <div  className='grid md:grid-cols-2 sm:grid-cols-1 justify-between'>
                    <div className="card bg-base-100 w-96 shadow-xl mb-20">
                        <div className="card-body">
                            <TbClockHour3 className='text-8xl text-green-900' />
                            <h2 className="card-title text-2xl">24 Hour Access</h2>
                            <p className='text-lg'>24-hour access is an important feature for people who need to pick up items from their storage unit frequently. Finding time to drop by your storage unit during regular business hours can be challenging. If you are working long hours and dealing with a busy schedule, this feature will make your life a lot easier. 24-hour access is also vital for small businesses that keep equipment, tools and other items in self-storage.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl mb-20">
                        <div className="card-body">
                            <GiCctvCamera className='text-8xl text-green-900' />
                            <h2 className="card-title text-2xl">Security Cameras</h2>
                            <p className='text-lg'>Most self-storage facilities are equipped with security cameras that surveil hallways, common spaces, entryways and the outside perimeter of the building. It’s one of the strategies used by storage facility managers to ensure that your belongings are well-protected.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl mb-20">
                        <div className="card-body">
                            <GiLift className='text-8xl text-green-900' />
                            <h2 className="card-title text-2xl">Elevators</h2>
                            <p className='text-lg'>Elevators are available in storage facilities that spread over multiple levels. Usually, elevators in multi-story facilities are large and can hold more weight than a regular elevator, which means you can use them for furniture and oversized items.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl mb-20">
                        <div className="card-body">
                            <GiSecurityGate className='text-8xl text-green-900' />
                            <h2 className="card-title text-2xl">Electronic Gates</h2>
                            <p className='text-lg'>Electronic gates are a security feature that ensures only authorized people can enter the facility. They come with access control systems in the form of keypads or swipe cards, which means that, unless you’re a customer or an employee, you can’t drive your car into the storage facility.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl mb-20">
                        <div className="card-body">
                            <MdDriveEta className='text-8xl text-green-900' />
                            <h2 className="card-title text-2xl">Drive-Up Access
                                s</h2>
                            <p className='text-lg'>Drive-up access means you can park your car right next to the storage unit, making the loading and unloading of things easy and straightforward. Units with this feature are ideal for heavy, large items, and can also be used for storing vehicles.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 w-96 shadow-xl mb-20">
                        <div className="card-body">
                            <MdBusinessCenter className='text-8xl text-green-900' />
                            <h2 className="card-title text-2xl">Business Storage</h2>
                            <p className='text-lg'>Self storage is a great for businesses, big or small, which are confronted with a lack of space. Tools, equipment, office supplies, office furniture, different types of vehicles like fleet cars, trucks and trailers – everything can be put in a storage facility. Businesses benefit from the flexible month-to-month leases and can rent one unit or several, short-term or long-term.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection;