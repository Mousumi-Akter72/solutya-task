import React from 'react';
import { AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai';
import { FiFacebook, FiPhoneCall, FiTwitter } from 'react-icons/fi';
import { CiLinkedin } from 'react-icons/ci';

const Navtop = () => {
    return (
        <div className='w-full bg-primary text-white font-medium py-2'>
            <div className='max-w-7xl mx-auto flex justify-between items-center px-2'>
                <div className='flex flex-col md:flex-row items-center md:space-x-3 justify-center'>
                    <div className='flex justify-center items-center space-x-1'>
                        <FiPhoneCall size={20} />
                        <p>00440012345678</p>
                    </div>
                    <div className='flex justify-center items-center space-x-1'>
                        <AiOutlineMail size={20} />
                        <p>00440012345678</p>
                    </div>
                </div>
                <div className='flex items-center justify-center space-x-3'>
                    <FiFacebook size={20} />
                    <FiTwitter size={20} />
                    <AiOutlineInstagram size={20} />
                    <CiLinkedin size={20} />
                </div>
            </div>
        </div>
    );
};

export default Navtop;