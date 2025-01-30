import React from 'react';
import logo from '../../assets/logo.png'
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaFacebook, FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal font-black mt-36 gap-16 grid md:grid-cols-3 sm:grid-cols-2 mb-28">
            <div className='mt-[-100px]'>
                <img className='h-48 w-48' src={logo} alt="" />
                <p className='mt-[-70px]'>RentLeaseBD is a Leading Real Estate Marketplace featuring a comprehensive search platform to help property seekers find the ideal property for rent, buy, or sale. With an extensive range of listings, we offer diverse options tailored to meet various needs and preferences. Explore our premier listings and reach out to us for any inquiries or personalized assistance.</p>
            </div>
            <div>
                <h6 className="footer-title">Contact</h6>
                <div>
                    <p className='flex gap-3 items-center'><IoLocationOutline className='text-green-500 text-5xl' />House # 01, Road # 2/E, Block # J, Baridhara, Dhaka-1212, Bangladesh.</p>
                </div>
                <div className='mt-3'>
                    <p className='flex gap-3 items-center'><IoCallOutline className='text-green-500 text-3xl' />+88 01622888666 (8am - 5pm) <br /> +88 01622888555</p>
                </div>
                <div className='mt-3'>
                    <p className='flex gap-3 items-center'><CiMail className='text-green-500 text-3xl' />info@rentalhomebd.com <br /> support@rentalhomebd.com</p>
                </div>
            </div>
            <div className='md:ml-44 sm:ml-4'>
                <h6 className="footer-title">Download our App</h6>
                <p className='text-2xl'>Follow Us On</p>
                <div className='text-2xl flex gap-3'><FaFacebook /> <FaLinkedin /> <FaInstagramSquare /> <FaTwitterSquare /> <FaYoutube /></div>
                <fieldset className="fieldset mt-3">
                    <legend className="fieldset-legend text-lg">Weekly newsletter</legend>
                    <input type="text" className="input" placeholder="Enter Your Email" />
                </fieldset>
            </div>
        </footer>
    );
};

export default Footer;