import React, { useState } from 'react';
import '../assets/styles/intro.scss'
import Jw from '../assets/images/jw.PNG'
import Typewriter from 'typewriter-effect';

const Intro = () => {
    const [img, setImg]=useState(true);
    const handlerMouseHover=()=>{
        setImg(false)
    }
    const handlerMouseLeave=()=>{
        setImg(true)
    }
    return (
        <div className='intro_container'>
            <div className='title'>
            <Typewriter
                options={{
                strings: ['JIWON CHOI'],
                autoStart: true,
                loop: true,
                pauseFor:5000
                }}
            />
            <Typewriter
                options={{
                strings: ['Front-end Developer'],
                autoStart: true,
                loop: true,
                pauseFor:5000
                }}
            />
            </div>
            <div className='myself'>
                <div onMouseEnter={handlerMouseHover} onMouseLeave={handlerMouseLeave}>
                    {img?<img src={Jw} alt='jw'></img>:
                        <div className='img_info'>
                            <p style={{fontFamily:'neodgm'}}>최지원</p>
                            <p style={{fontFamily:'"Black Ops One", system-ui'}}>2002.01.22</p>
                        </div>
                    }
                </div>
                <div className='texts'>
                    <p>새로운 것을 받아들이고 도전하는 것을 즐기는 사람으로써, 변화에 유연하게 대처하는 
                        프론트엔드가 되겠습니다.
                        <br/></p>
                    <p>“If you have mastered your profession but lack the ability to be persistent, 
                        you will not succeed... You are a failure when you stop trying again and again.”
                        -Dozie Uzochukwu <br/><br/>
                        제가 매일 되새기는 명언입니다. 끊임없이 공부하고, 연구하는 개발자가 되고자 노력하고 있습니다. 
                        </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;