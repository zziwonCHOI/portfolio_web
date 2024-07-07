import React from 'react';
import '../assets/styles/skils.scss'
import Js from '../assets/images/js.png'
import css from '../assets/images/css.png'
import ts from '../assets/images/typescript.png'
import html from '../assets/images/html.png'
import react from '../assets/images/react.png'
import reactnative from '../assets/images/reactnative.png'
import sass from '../assets/images/sass.png'
import vs from '../assets/images/vscode.png'
import notion from '../assets/images/notion.png'
import git from '../assets/images/git.png'

const Skils = () => {
    return (
        <div className='skils_container'>
            <div className='t'>
                <p>Skils</p>
            </div>
            <div className='t-2'>
                <p>Languages</p>
            </div>
            <div className='images'>
                <img src={html} alt="html" />
                <img src={css} alt="css" />
                <img src={Js} alt="js" />
                <img src={ts} alt="ts" />
                <img src={sass} alt="sass" />
            </div>
            <div className='t-2'>
                <p>Platforms</p>
            </div>
            <div className='images'>
                <img src={react} alt="react" />
                <img src={reactnative} alt="rn" />
            </div>
            <div className='t-2'>
                <p>Tools</p>
            </div>
            <div className='images'>
                <img src={vs} alt="vs" />
                <img src={git} alt="git" />
                <img src={notion} alt='notion'/>
            </div>
        </div>
    );
};

export default Skils;