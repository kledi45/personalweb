import React, {useEffect} from 'react';
import './skills.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import {FaHtml5} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {FaJsSquare} from 'react-icons/fa';
import {FaPhp} from 'react-icons/fa';
import {FaWordpress} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
const Skills = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    },[]);
    return(
        <>
        <div className = "experience-container">
            <h1 className = "h1"  data-aos = "flip-up">Skills</h1>
            <hr></hr>
            <div className = "row"  data-aos = "flip-up">
                <div className = "card">
                <FaHtml5 size = {100} color = "#795649" />
                <h2>HTML</h2>
                </div>
                <div className = "card">
                <FaCss3Alt size = {100} color = "#795649" />
                <h2>CSS</h2>
                </div>
                <div className = "card">
                <FaJsSquare size = {100} color = "#795649" />
                <h2>JS</h2>
                </div>
            </div>
            <div className = "row" data-aos = "flip-up">
                <div className = "card">
                <FaPhp size = {100} color = "#795649" />
                <h2>PHP</h2>
                </div>
                <div className = "card">
                <FaWordpress size = {100} color = "#795649" />
                <h2 className ="h1w">WordPress</h2>
                </div>
                <div className = "card">
                <FaReact size = {100} color = "#795649" />
                <h2>React</h2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills;