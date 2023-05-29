import React, { useState } from 'react';
import Plant from '../Shared/Plant';
import plant1 from "../../assets/plant1.png"
import plant2 from "../../assets/plant2.png"

const BestProduct = () => {
    const [all, setAll] = useState(true)
    const [garden, setGarden] = useState(false)
    const [homedesign, setHomedesign] = useState(false)
    const [officedesign, setOfficedesign] = useState(false)
    const plants = [
        {
            title: "Aliquam Furniture",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant1,
            offer: "",
            category: ["garden", "homedesign"]
        },
        {
            title: "Aliquam Furniture",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant1,
            offer: "",
            category: ["garden"]
        },
        {
            title: "Aliquam Furniture",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant1,
            offer: "",
            category: ["homedesign"]
        },
        {
            title: "Aliquam Furniture",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant1,
            offer: "",
            category: ["garden", "homedesign"]
        },
        {
            title: "Freddie Calathea",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant2,
            offer: "20%",
            category: ["officedesign"]
        },
        {
            title: "Freddie Calathea",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant2,
            offer: "20%",
            category: ["garden", "officedesign"]
        },
        {
            title: "Freddie Calathea",
            rating: 5,
            offerprice: "99.00",
            price: "79.20",
            img: plant2,
            offer: "20%",
            category: ["garden", "homedesign"]
        }
    ]
    return (
        <div className='mt-20'>
            <h1 className='font-bold text-[45px] text-center'>Best Product</h1>
            <div className='flex justify-center items-center space-x-5 my-10'>
                <button onClick={() => {
                    setAll(true)
                    setGarden(false)
                    setHomedesign(false)
                    setOfficedesign(false)
                }
                } className={`font-semibold text-2xl ${all ? "text-primary" : "text-black"}`}>
                    All
                </button>
                <button onClick={() => {
                    setAll(false)
                    setGarden(true)
                    setHomedesign(false)
                    setOfficedesign(false)
                }
                } className={`font-semibold text-2xl ${garden ? "text-primary" : "text-black"}`}>
                    Garden
                </button>
                <button onClick={() => {
                    setAll(false)
                    setGarden(false)
                    setHomedesign(true)
                    setOfficedesign(false)
                }
                } className={`font-semibold text-2xl ${homedesign ? "text-primary" : "text-black"}`}>
                    Home Design
                </button>
                <button onClick={() => {
                    setAll(false)
                    setGarden(false)
                    setHomedesign(false)
                    setOfficedesign(true)
                }
                } className={`font-semibold text-2xl ${officedesign ? "text-primary" : "text-black"}`}>
                    Office Design
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                {
                    plants?.filter(item => {
                        if (garden) {
                            return item?.category?.includes("garden")
                        }
                        if (homedesign) {
                            return item?.category?.includes("homedesign")
                        }
                        if (officedesign) {
                            return item?.category?.includes("officedesign")
                        }
                        return item
                    })?.map((item, index) => <Plant key={index} plant={item} />)
                }
            </div>

        </div >
    );
};

export default BestProduct;