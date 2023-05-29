import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import { SecondaryButton } from '../Button/Button';
import { AiOutlineSearch, AiOutlineShopping } from "react-icons/ai"
import { FiUser } from "react-icons/fi"

const Navbar = () => {
    const { pathname } = useLocation()
    return (
        <div className='w-full bg-white'>
            <div className="navbar max-w-7xl mx-auto p-0 px-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden p-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li tabIndex={0}>
                                <Link className={`text-lg font-medium ${pathname.includes("/") ? "text-primary" : ""}`} to={"/"}>
                                    Home
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-white">
                                    <li><a href='#'>Submenu 1</a></li>
                                    <li><a href='#'>Submenu 1</a></li>
                                </ul>
                            </li>
                            <li className='text-lg font-medium' ><Link to={"/about"}>About Us</Link></li>
                            <li tabIndex={0}>
                                <Link className={`text-lg font-medium ${pathname.includes("pages") ? "text-primary" : ""}`} to={"/"}>
                                    Pages
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </Link>
                                <ul className="p-2 bg-white">
                                    <li><a href='#'>Submenu 1</a></li>
                                    <li><a href='#'>Submenu 1</a></li>
                                </ul>
                            </li>
                            <li className={`text-lg font-medium ${pathname.includes("product") ? "text-primary" : ""}`}  ><Link to={"/"}>Product</Link></li>
                            <li className={`text-lg font-medium ${pathname.includes("blog") ? "text-primary" : ""}`}  ><Link to={"/"}>Blog</Link></li>
                            <li className={`text-lg font-medium ${pathname.includes("contactus") ? "text-primary" : ""}`}  ><Link to={"/"}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <Link className='flex justify-center items-center font-bold lg:text-[40px] space-x-2' to={"/"}> <img src={logo} alt="" /> <p>SolPlant</p> </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li tabIndex={0}>
                            <Link className={`text-lg font-medium ${pathname.includes("/") ? "text-primary" : ""}`} to={"/"}>
                                Home
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-white">
                                <li><a href='#'>Submenu 1</a></li>
                                <li><a href='#'>Submenu 1</a></li>
                            </ul>
                        </li>
                        <li className='text-lg font-medium' ><Link to={"/about"}>About Us</Link></li>
                        <li tabIndex={0}>
                            <Link className={`text-lg font-medium ${pathname.includes("pages") ? "text-primary" : ""}`} to={"/"}>
                                Pages
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-white">
                                <li><a href='#'>Submenu 1</a></li>
                                <li><a href='#'>Submenu 1</a></li>
                            </ul>
                        </li>
                        <li className={`text-lg font-medium ${pathname.includes("product") ? "text-primary" : ""}`}  ><Link to={"/"}>Product</Link></li>
                        <li className={`text-lg font-medium ${pathname.includes("blog") ? "text-primary" : ""}`}  ><Link to={"/"}>Blog</Link></li>
                        <li className={`text-lg font-medium ${pathname.includes("contactus") ? "text-primary" : ""}`}  ><Link to={"/"}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <SecondaryButton title={<AiOutlineSearch size={20} />} classname={"border-[#DDDDDD] border-[1px] p-2 md:p-4"} />
                    <SecondaryButton title={<AiOutlineShopping size={20} />} classname={"border-[#DDDDDD] border-[1px] p-2 md:p-4"} />
                    <SecondaryButton title={<FiUser size={20} />} classname={"border-[#DDDDDD] border-[1px] p-2 md:p-4"} />
                </div>
            </div>

        </div>

    );
};

export default Navbar;