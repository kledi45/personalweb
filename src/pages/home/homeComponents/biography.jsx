import React, {useEffect} from 'react';
import './biography.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import baba from '../../../assets/BABA.PNG';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Biography = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    },[]);
    return(
        <>
        <div className = "container">
            <div className = "biography" data-aos = "flip-right">
               <div className = "biography-content">
                <div className = "photo-text">
                    <img src = {baba} alt = "photo" className = "baba-picture"/>
                    <h1>Kledi Zeka</h1>
                    <h4>Full Stack Developer</h4>
                    <div className = "icons-bio">
                        <Link to = "/facebook.com"><FaFacebookF size = {30} color = "#795649" className = "icon"/></Link>
                        <Link to = "/instagram.com"><FaInstagram size = {30} color = "#795649" className = "icon"/></Link>
                        <Link to = "/instagram.com"><FaTwitter size = {30} color = "#795649" className = "icon"/></Link>
                    </div>
                </div> 
                 <div className = "biography-paragraph">
                    <h1>Biography</h1>
                    <p>I am a hardworking and ambitious individual with a great passion for programming and web desinging. I am currently finishing high school and will be studying Computer Science at UBT University. I have excellent programming skills, enabling me to effectively write code with a wide range of different ideas. I've been working as a freelancer for amlost 2 years now where I put my knowledge to the best of my abilities. </p>
                    <div className = "interests-education">
                        <div className = "interests">
                            <h1>Interests</h1>
                            <ul>
                                <li>Developing cool projects</li>
                                <li>Sharing my ideas with others</li>
                                <li>Video Games</li>
                            </ul>
                        </div>
                        <div className = "education">
                            <h1>Education</h1>
                            <ul>
                                <li>SH.F.M.U "Selman Riza"</li>
                                <li>Shkolla e mesme "Xhevdet Doda"</li>
                            </ul>
                        </div>
                    </div>
                </div>    
                </div>           
            </div>
        </div>
        </>
    )
}

export default Biography;





