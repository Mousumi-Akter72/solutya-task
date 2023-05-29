import React from 'react';
import { AiOutlineMail } from 'react-icons/ai'
import { FiPhoneCall, FiMap } from 'react-icons/fi'
import { BsChevronUp } from 'react-icons/bs'
import bg from "../../../assets/footerbg.png"
import logo from "../../../assets/whitelogo.png"
import { Link } from 'react-router-dom';
import Facilities from './Facilities';

const Footer = () => {
    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
    const isBrowser = () => typeof window !== "undefined";
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='bg-primary py-5 bg-cover bg-no-repeat bg-bottom mt-20 relative'>
            <Facilities />
            <footer className=''>
                <div className="footer p-1 text-white max-w-7xl mx-auto">
                    <div>
                        <Link className='flex justify-center items-center font-bold lg:text-[40px] space-x-2' to={"/"}> <img src={logo} alt="" /> <p>SolPlant</p> </Link>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Donec sed nulla eu dui <br /> suscipit ultricies. Mauris vestibulum volutpat <br /> nisl vel cursus. Cras finibus nec mauris <br />   tincidunt condimentum.
                        </p>
                        <div className="grid grid-flow-col gap-4">
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                        </div>
                    </div>
                    <div>
                        <h1 className="footer-title text-white">Link</h1>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Products</a>
                        <a className="link link-hover">Contact Us</a>
                        <a className="link link-hover">Blog</a>
                    </div>
                    <div>
                        <span className="footer-title">Get In Touch</span>
                        <a className="link link-hover flex items-center"><FiPhoneCall />00440012345678</a>
                        <a className="link link-hover flex items-center"><AiOutlineMail /> plantush@plantush.com</a>
                        <a className="link link-hover flex "><FiMap />29 Washington Pl, New York, NY <br /> 10003, USA</a>

                    </div>
                    <div>
                        <span className="footer-title">Other Links</span>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms & Conditions</a>

                    </div>

                </div>
                <div className='h-1 border-t-2 border-[#DCE775] relative my-5'>
                    <div className="absolute right-[100px] -top-[17px]">
                        <button onClick={scrollToTop} className='bg-[#DCE775] p-2 rounded-full'>
                            <BsChevronUp size={16} />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center text-white max-w-7xl mx-auto">
                    <div className="">
                        <p>Copyright & Design by Plantush-2023</p>
                    </div>
                    <div className="flex space-x-3">
                        <a> <img className='w-8' src="https://www.logo.wine/a/logo/Payoneer/Payoneer-Logo.wine.svg" alt="" /></a>
                        <a> <img className='w-8' src="https://centaur-wp.s3.eu-central-1.amazonaws.com/designweek/prod/content/uploads/2018/04/10121846/am_amex_06.jpg" alt="" /></a>
                        <a>
                            <img className='w-8' src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg" alt="" />
                        </a>
                        <a><img className='w-8' src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg" alt="" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;