import React from 'react';

import { MdOutlineLocalShipping } from 'react-icons/md'
import { AiOutlineGift } from "react-icons/ai"
import { BsRecycle } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
const Facilities = () => {
    return (
        <div className="max-w-7xl mx-auto bg-white flex justify-around items-center py-5 -mt-16 mb-20">
            <div className='flex items-center justify-center space-x-3'>
                <div className=' text-primary '>
                    <MdOutlineLocalShipping size={48} />
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Free shipping order</h1>
                    <p className='font-normal text-base'>On orders over $100</p>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-3'>
                <div className=' text-primary '>
                    <AiOutlineGift size={48} />
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Special gift card</h1>
                    <p className='font-normal text-base'>Special gift card</p>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-3'>
                <div className=' text-primary '>
                    <BsRecycle size={48} />
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Return & exchange</h1>
                    <p className='font-normal text-base'>Free return within 3 days</p>
                </div>
            </div>
            <div className='flex items-center justify-center space-x-3'>
                <div className=' text-primary '>
                    <FiPhoneCall size={48} />
                </div>
                <div>
                    <h1 className='font-bold text-xl'>Support 24 / 7</h1>
                    <p className='font-normal text-base'>Customer support</p>
                </div>
            </div>

        </div>
    );
};

export default Facilities;