import React, {useEffect} from 'react';
import './footer.css';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';

const Footer = (props) => {
    useEffect(() => {
        AOS.init({duration:2000});
    },[]);
    return(
        <>
        <h3 data-aos = "fade-up">"Be water my friend" - Bruce Lee</h3>
        <hr className = "hr" data-aos = "fade-up"></hr>
        <div className = "footer">
            <div className = "footer-icons">
                <h1 className = "contacth1">Kledi Zeka</h1>
                    <Link to = "/facebook.com"><FaFacebookF size = {30} color = "white" className = "social-icon-footer" /></Link>
                    <Link to = "/instagram.com"><FaInstagram size = {30} color = "white" className = "social-icon-footer"/></Link>
                    <Link to = "/instagram.com"><FaTwitter size = {30} color = "white" className = "social-icon-footer"/></Link>
            </div>
            <br></br>
            <hr></hr>
            <p>Copyright 2021 @ Theme made by Kledi Zeka</p>
            <br></br>
           
        </div>
        </>
    );
}





export default Footer;