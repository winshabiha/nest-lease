import React from 'react';
import client1 from '../../assets/client_1.png'
import client2 from '../../assets/client_2.png'
import client3 from '../../assets/client_3.png'
import client4 from '../../assets/client_4.png'
import client5 from '../../assets/client_5.png'

const ValuableClients = () => {
    return (
        <div className='mt-10 mb-30'>
            <h1 className='text-4xl font-bold text-blue-700 mt-32 text-center'>Our Valuable Clients</h1>
            <p className='text-xl font-bold  mb-10 text-center'>Enjoyed our pleasant service</p>
            <div className='grid md:grid-cols-5 sm:grid-cols-1 justify-center gap-28 items-center'>
                <img className='h-12 w-42' src={client1} alt="" />
                <img className='h-12 w-42' src={client2}  alt="" />
                <img className='h-12 w-42' src={client3}  alt="" />
                <img className='h-12 w-72' src={client4}  alt="" />
                <img className='h-12 w-42' src={client5}  alt="" />
            </div>
        </div>
    );
};

export default ValuableClients;
