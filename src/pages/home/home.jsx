import React, {useEffect} from 'react';
import { FaFileExport } from 'react-icons/fa';
import Biography from '../home/homeComponents/biography';
import Skills from './homeComponents/skills';
const Home = () => {
    return(
        <>
            <Biography/>
            <Skills/>
        </>
    )
}


export default Home;
