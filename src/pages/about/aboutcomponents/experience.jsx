import React, {useEffect} from 'react';
import './experience.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const Experience = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    },[]);
    return(
        <>
          <div className = "experience" data-aos = "flip-left">
            <h1>Get to know me more</h1>
            <p>I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.
            </p>
            <p>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
            </p>
          </div> 
        </>
    )
} 

export default Experience;
