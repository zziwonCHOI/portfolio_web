import React from 'react';
import '../assets/styles/footer.scss'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='text1'>
                <p>copyright 2024. Designed & Developed by JIWON CHOI</p>
                <div className='btn'>
                    <a href='https://github.com/zziwonCHOI?tab=repositories'>Github</a>
                    <a href='https://gguyeokdo.tistory.com/'>Blog</a>
                    <a href='mailto:wldnjssem6@naver.com'>Email</a>
                </div>
                <p>Do you like my portfolio? Send email!</p>
                
            </div>
        </div>
    );
};

export default Footer;