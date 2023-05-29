import React, { useState } from 'react';
import Plant from '../Shared/Plant';
import plant1 from "../../assets/plant1.png"
import plant2 from "../../assets/plant2.png"
import { PrimaryButton } from '../Shared/Button/Button';

const Arrival = () => {
    const [toprated, setToprated] = useState(true)
    const [trending, setTrending] = useState(false)
    const [bestseller, setBestseller] = useState(false)
    const plants = [
        {
            title: "Aliquam Furniture",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant1,
            offer: "",
            category: ["trending", "bestseller"]
        },
        {
            title: "Aliquam Furniture",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant1,
            offer: "",
            category: ["toprated"]
        },
        {
            title: "Aliquam Furniture",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant1,
            offer: "",
            category: ["trending"]
        },
        {
            title: "Aliquam Furniture",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant1,
            offer: "",
            category: ["trending"]
        },
        {
            title: "Freddie Calathea",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant2,
            offer: "20%",
            category: ["trending"]
        },
        {
            title: "Freddie Calathea",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant2,
            offer: "20%",
            category: ["toprated"]
        },
        {
            title: "Freddie Calathea",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant2,
            offer: "20%",
            category: ["toprated"]
        },
        {
            title: "Freddie Calathea",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant2,
            offer: "20%",
            category: ["toprated", "bestseller"]
        }
    ]
    return (
        <div className='mt-20'>
            <h1 className='font-bold text-[45px] text-center'>New Arrival</h1>
            <div className='flex justify-center items-center space-x-5 my-10'>
                <button onClick={() => { setToprated(true); setTrending(false); setBestseller(false); }
                } className={`font-semibold text-2xl ${toprated ? "text-primary" : "text-black"}`}>
                    Top Rated
                </button>
                <button onClick={() => { setToprated(false); setTrending(true); setBestseller(false); }
                } className={`font-semibold text-2xl ${trending ? "text-primary" : "text-black"}`}>
                    Trending
                </button>
                <button onClick={() => { setToprated(false); setTrending(false); setBestseller(true); }
                } className={`font-semibold text-2xl ${bestseller ? "text-primary" : "text-black"}`}>
                    Best Seller
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                {
                    plants?.filter(item => {
                        if (toprated) {
                            return item?.category?.includes("toprated")
                        }
                        if (trending) {
                            return item?.category?.includes("trending")
                        }
                        if (bestseller) {
                            return item?.category?.includes("bestseller")
                        }
                        return item
                    })?.map((item, index) => <Plant key={index} plant={item} />)
                }
            </div>
            <div className='flex justify-center items-center mt-8'>
                <PrimaryButton title={"See All Products"} classname={"p-3"} />
            </div>
        </div >
    );
};

export default Arrival;