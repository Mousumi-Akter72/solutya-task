import React from 'react';
import plant1 from "../../assets/plant1.png"
import plant2 from "../../assets/plant2.png"
import PlantSidewise from '../Shared/PlantSidewise';

const TopRated = () => {
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
            <h1 className='font-bold text-[45px] text-center'>Top Rated Products</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4'>
                {
                    plants?.map((item, index) => <PlantSidewise key={index} plant={item} />)
                }
            </div>

        </div >
    );
};

export default TopRated;