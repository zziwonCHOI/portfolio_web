import React, { useEffect, useState } from 'react';
import Intro from './Intro';
import '../assets/styles/main.scss'
import Skils from './Skils';
import Projects from './Projects';
import Footer from './Footer';

const Main = () => {
    const [star,setStar]=useState([]);
    useEffect(()=>{
        const createStars=()=>{
            let starsArray=[];
            for(let i=0;i<100;i++){
                let star={
                    id:i,
                    left:Math.random()*100+'vw', //별의 수평 위치 설정
                    animationDuration:Math.random()*50+5+'s', //지속 시간
                    animationDelay:Math.random()*5+'s',//시작 전 대기 시간
                }
                starsArray.push(star)
            }
            setStar(starsArray);
        }
        createStars()
    },[])
    return (
        <div className='main_container'>
            {star.map((s)=>(
                <div
                key={s.id}
                className='star'
                style={{
                    left:s.left,
                    animationDuration:s.animationDuration,
                    animationDelay:s.animationDelay
                }}
                ></div>
            ))}
            <Intro/>
            <Skils/>
            <Projects/>
            <Footer/>
        </div>
    );
};

export default Main;