/* eslint-disable react/prop-types */
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SwipperButtonGallery = ({ navigationPrevRef, navigationNextRef, activeIndex, bannerlength }) => {
  console.log(activeIndex, bannerlength);
  return (
    <>
      <button
        ref={navigationPrevRef}
        className={`absolute top-[50%] left-[30px] z-40 ${activeIndex === 0 ? "bg-transparent text-primary duration-500" : "bg-primary text-white duration-500"}  rounded-full p-2 border-[1px] border-primary`}
      >
        <BsChevronLeft size={12} />
      </button>
      <button
        ref={navigationNextRef}
        className={`absolute top-[50%] right-[30px] z-40 ${activeIndex === bannerlength - 1 ? "bg-transparent text-primary duration-500" : "bg-primary text-white duration-500"} rounded-full p-2 border-[1px] border-primary`}
      >
        <BsChevronRight size={12} />
      </button>
    </>
  );
};

export default SwipperButtonGallery;
