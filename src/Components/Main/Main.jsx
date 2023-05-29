import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Navtop from '../Shared/Navbar/Navtop';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <>
            <div className='sticky top-0 w-full z-50'>
                <Navtop />
                <Navbar />
            </div>
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;