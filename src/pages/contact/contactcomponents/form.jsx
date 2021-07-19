import React, {useEffect} from 'react';
import './form.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import contact from '../../../assets/contact.jpg';

const Forms = () => {
    useEffect(() => {
        AOS.init({duration:2000});
    },[]);
    return(
        <>
        <div className = "form-banner">
            <div className = "max-width">
                <h1 data-aos = "fade-right">If you want to create great projects feel free to contact me.</h1>
            </div>
            <div className = "form">
                <div className = "form-second" data-aos = "flip-down">
                <p>Name:</p>
                <input type = "text"></input>
                </div>
                <div className = "form-second" data-aos = "flip-down">
                <p>Email:</p>
                <input type = "email"></input>
                </div>
            </div>
            
            <div className = "text-area">
                <div data-aos = "flip-up">
                <p>Write me a message</p>
                <textarea></textarea>
                <div className ="center">
                <button className = "submit-button">Submit</button>
                </div>
                </div>
            </div>
            
        </div>
        </>
    )
}


export default Forms;