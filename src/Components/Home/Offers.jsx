import React from 'react';
import bg1 from "../../assets/offerbg.png"
import bg2 from "../../assets/bs.png"
import bg3 from "../../assets/gp.png"
import bg4 from "../../assets/popcactus.png"
import summerpots from "../../assets/summerpots.png"
import qualityproduct from "../../assets/qp.png"
import { PrimaryButton } from '../Shared/Button/Button';

const Offers = () => {
    return (
        <div className='flex flex-col space-y-4 mt-20 font-semibold'>
            <div className='flex flex-col lg:flex-row justify-center items-stretch space-y-4 lg:space-y-0 lg:space-x-4'>
                <div style={{ backgroundImage: `url(${bg1})` }} className="bg-no-repeat bg-cover w-full lg:w-1/2 flex flex-col justify-center items-end p-10">
                    <div className='text-center'>
                        <p className='text-lg text-primary'>Get 50% Off</p>
                        <p className='text-[40px]'>Best Selling</p>
                        <PrimaryButton title={"Shop Now"} classname={"p-2 mt-3"} />
                    </div>

                </div>
                <div className='w-full lg:w-1/2 flex flex-col lg:flex-row items-stretch space-y-4 lg:space-y-0 lg:space-x-4'>
                    <div style={{ backgroundImage: `url(${bg2})` }} className='bg-bottom bg-cover bg-no-repeat bg-primary text-white h-full text-center flex flex-col justify-center items-center lg:w-1/2 p-5 lg:p-0'>
                        <p className='text-[40px]'>Big Saving</p>
                        <p className='text-lg'>Flat 50% Off</p>
                    </div>
                    <div className='flex items-center relative'>
                        <img src={summerpots} alt="" className='p-5' />
                        <p className='text-[30px] rotate-90'>Summers Pots</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-stretch space-y-4 lg:space-y-0 lg:space-x-4'>
                <div className='w-full lg:w-1/2 flex flex-col lg:flex-row items-stretch space-y-4 lg:space-y-0 lg:space-x-4'>
                    <div className='flex items-center relative'>
                        <p className='text-[30px] -rotate-90'>Quality Product</p>
                        <img src={qualityproduct} alt="" className='p-3' />
                    </div>
                    <div style={{ backgroundImage: `url(${bg3})` }} className='bg-bottom bg-cover bg-no-repeat bg-primary text-black h-full text-center flex flex-col justify-center items-center lg:w-1/2 p-5 lg:p-0'>
                        <p className='text-[40px]'>Green  Plants</p>
                        <p className='text-lg'>Flat 50% Off</p>
                    </div>

                </div>
                <div style={{ backgroundImage: `url(${bg4})` }} className="bg-no-repeat bg-cover w-full lg:w-1/2 flex flex-col justify-center items-start p-10">
                    <div className='text-center'>
                        <p className='text-[40px]'>Popular</p>
                        <p className='text-lg'>Collection Of Cactus</p>
                        <PrimaryButton title={"Shop Now"} classname={"p-2 mt-3"} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Offers;