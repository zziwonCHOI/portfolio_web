import React from 'react';
import Intro from './Intro';
import '../assets/styles/main.scss'
import Skils from './Skils';
import Projects from './Projects';
import Footer from './Footer';

const Main = () => {
    
    return (
        <div className='main_container'>
            <Intro/>
            <Skils/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default Main;