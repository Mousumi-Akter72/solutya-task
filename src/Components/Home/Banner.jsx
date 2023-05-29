import React, { useRef, useState } from 'react';
import SwipperButtonGallery from '../Shared/Button/SwipperButtonGallery';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { PrimaryButton, SecondaryButton } from '../Shared/Button/Button';
import "swiper/css";
import banner from "../../assets/homebanner.png"

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const banners = [
        {
            title: "Summer Collection 2023",
            heading: "Plants Gonna Make People Happy",
            button: ["Shop Now", "Explore Now"],
            img: banner
        },
        {
            title: "Summer Collection 2023",
            heading: "Plants Gonna Make People Happy",
            button: ["Shop Now", "Explore Now"],
            img: banner
        },
        {
            title: "Summer Collection 2023",
            heading: "Plants Gonna Make People Happy",
            button: ["Shop Now", "Explore Now"],
            img: banner
        },
    ]
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const bannerlength = banners.length
    return (
        <div>
            <SwipperButtonGallery
                activeIndex={activeIndex}
                bannerlength={bannerlength}
                navigationPrevRef={navigationPrevRef}
                navigationNextRef={navigationNextRef}
            />
            <div className="">
                <Swiper

                    onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
                    spaceBetween={0}
                    draggable={true}
                    modules={[Navigation]}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                    }}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                    className="mySwiper order-2"
                >
                    {
                        banners?.map((item, index) =>
                            <SwiperSlide key={index}>
                                <div style={{ backgroundImage: `url(${item.img})` }} className={`bg-cover bg-no-repeat flex justify-center md:justify-normal items-center h-[78vh] relative`}>
                                    <div className='max-w-[650px] p-1  md:ml-[200px]'>
                                        <p className='text-primary font-medium text-xl lg:text-[30px] m-0 leading-none'>{item.title}</p>
                                        <p className='font-bold text-[32px] lg:text-[70px] leading-snug m-0'>{item.heading}</p>
                                        <div className='flex items-center space-x-4 mt-5'>
                                            <PrimaryButton title={item.button[0]} classname={"p-3"} />
                                            <SecondaryButton title={item.button[1]} classname={"p-[10px] border-[1px] border-primary"} />
                                        </div>
                                    </div>
                                </div>

                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;