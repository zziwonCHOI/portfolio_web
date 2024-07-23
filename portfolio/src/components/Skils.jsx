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
                <div><img src={html} alt="html" /><p>familiar</p></div>
                <div><img src={css} alt="css" /><p>familiar</p></div>
                <div><img src={Js} alt="js" /><p>familiar</p></div>
                <div><img src={ts} alt="ts" /><p>tried</p></div>
                <div><img src={sass} alt="sass" /><p>tried</p></div>
            </div>
            <div className='t-2'>
                <p>Platforms</p>
            </div>
            <div className='images'>
                <div><img src={react} alt="react" /><p>familiar</p></div>
                <div><img src={reactnative} alt="rn" /><p>tried</p></div>
            </div>
            <div className='t-2'>
                <p>Tools</p>
            </div>
            <div className='images'>
                <div><img src={vs} alt="vs" /><p>familiar</p></div>
                <div><img src={git} alt="git" /><p>familiar</p></div>
                <div><img src={notion} alt='notion'/><p>familiar</p></div>
            </div>
        </div>
    );
};

export default Skils;