import React, {useEffect} from 'react';
import './projects.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import Prezzies from '../../../assets/prezzies.jpg';
import Logo from '../../../assets/logo.png';
import WeThree from '../../../assets/wethree.png';
import SecKos from '../../../assets/seckos.png';
import Library from '../../../assets/library.png';
const Projects = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    },[]);

  
    return(
        <>
        <div className = "projects-container">
            <div className = "mesi" data-aos = "fade-left">
            <h1>Here are some of my projects that I've developed using different programming languages</h1>
            </div>
            <div className = "project-cards">
                <div className = "project-cards-1" data-aos = "flip-up">
                    <img src= {Prezzies} className = "prezzies"/>
                    <p>Prezzies is a platform where you can order personalized gifts for your loved ones.</p>
                    <button className = "visit-btn" onClick = {()=> window.open('https://prezzies.store/', '_blank')}>VISIT PAGE</button>
                </div>
                <div className = "project-cards-1" data-aos = "flip-up">
                    <img src= {WeThree} className = "prezzies"/>
                    <p>We-Three is a website made for a marketing agency in Germany. Click button for info</p>
                    <button className = "visit-btn" onClick = {()=> window.open('https://we-three.de/', '_blank')}>VISIT PAGE</button>
                </div>
                <div className = "project-cards-1" data-aos = "flip-up">
                    <img src= {Logo} className = "prezzies"/>
                    <p>A. Balaj Heizungen is a web that's being developed for a heating system company </p>
                    <button className = "visit-btn" onClick = {()=> window.open('http://kledi.prezzies.store/kledi/', '_blank')}>VISIT PAGE</button>
                </div>   
            </div>
            <div className ="center" data-aos = 'fade-right'>
            <h1>In development</h1>
            </div>
            <div className = "project-cards">
                <div className = "project-cards-1" data-aos = "flip-up">
                    <img src= {SecKos} className = "prezzies"/>
                    <p>SecKos is an upcoming information website build for a cybersecurity company in Kosovo</p>
                    <button className = "visit-btn" onClick = {()=> window.open('https://seckkoss.netlify.app/', '_blank')}>VISIT PAGE</button>
                </div>
                <div className = "project-cards-1" data-aos = "flip-up">
                    <img src= {Library} className = "prezzies"/>
                    <p>Zeka's Library is an app where it shows what kind of books our family has in our home library.</p>
                    <button className = "visit-btn">VISIT PAGE</button>
                </div>
                <div className = "project-cards-1" data-aos = "flip-up">
                    <img src= {Prezzies} className = "prezzies"/>
                    <p>Prezzies Mobile App is the same platform as Prezzies Store but as an app for smartphones </p>
                    <button className = "visit-btn">VISIT PAGE</button>
                </div>   
            </div>
        </div>
        </>
    )
}


export default Projects;
