/* eslint-disable react/prop-types */
import React from 'react';
import ReactStars from "react-rating-stars-component";
import { SecondaryButton } from './Button/Button';
import { AiOutlineHeart, AiOutlineShopping, AiOutlineEye } from 'react-icons/ai';

const PlantSidewise = ({ plant }) => {
    return (
        <div className='relative flex justify-center items-center'>
            <div >
                <img src={plant?.img} alt="" className='p-2 w-full' />

            </div>
            <div className='flex flex-col'>
                <div>
                    <ReactStars
                        count={plant?.rating}
                        value={3}
                        size={24}
                        activeColor="#ffd700"
                        edit={false}
                    />
                </div>
                <p className='font-semibold text-lg'>{plant?.title}</p>
                <p className='font-medium text-[15px] text-[#606060]'>$<span>{plant?.offerprice}</span>- <span className='line-through'>${plant?.price}</span></p>
                <div className="flex justify-center items-center space-x-2">
                    <SecondaryButton title={<AiOutlineHeart size={20} />} classname={"border-[#DDDDDD] border-[1px] p-2"} />
                    <SecondaryButton title={<AiOutlineShopping size={20} />} classname={"border-[#DDDDDD] border-[1px] p-2"} />
                    <SecondaryButton title={<AiOutlineEye size={20} />} classname={"border-[#DDDDDD] border-[1px] p-2"} />
                </div>
            </div>
        </div>
    );
};

export default PlantSidewise;