import React from 'react';
import '../assets/styles/project.scss';
import time from '../assets/images/timelogo.png';
import mcc from '../assets/images/logo.png';
import git from '../assets/images/github.png';
import link from '../assets/images/link.png';
import { motion } from 'framer-motion';

const Projects = () => {
    const leftToCenterVariants = {
        hidden: { opacity: 0, x: -150 },
        visible: { opacity: 1, x: 0 }
    };

    const rightToCenterVariants = {
        hidden: { opacity: 0, x: 150 },
        visible: { opacity: 1, x: 0 }
    };

    const transition = {
        ease: "easeInOut",
        duration: 1,
        x: { duration: 1 }
    };

    return (
        <div className='project_container'>
            <div className='t'>
                <p>Projects</p>
            </div>

            <motion.div
                className='project'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={leftToCenterVariants}
                transition={transition}
            >
                <div className='project_title'>
                    <div className='icon'>
                        <p id='name'>틈새시장</p>
                        <img src={time} alt='icon' />
                    </div>
                    <p id='ex'>사용자들이 서로의 시간을 돈으로 거래할 수 있게하여 자투리 시간을 효율적으로 활용하여 시간 관리의 효율성을 증가시키는 서비스</p>
                    <div className='skil'>
                        <p>Typescript</p>
                        <p>React Native</p>
                        <p>Redux</p>
                        <a href='https://github.com/capstone-team6/frontend'>
                            <img src={git} style={{ width: '3vw', marginTop: '0.5vw', marginLeft: '1vw' }} alt="github" />
                        </a>
                    </div>
                </div>
            </motion.div>

            <motion.div
                className='project'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={rightToCenterVariants}
                transition={transition}
            >
                <div className='project_title'>
                    <div className='icon'>
                        <p id='name'>M.C.C homepage</p>
                        <img src={mcc} alt='icon' style={{ height: '17.5vw' }} />
                    </div>
                    <p id='ex'>명지대학교 컴퓨터 동아리 m.c.c의 홈페이지. 동아리의 간략한 소개와 활동 결과들을 보여주는 홈페이지</p>
                    <div className='skil'>
                        <p>Javascript</p>
                        <p>React</p>
                        <a href='https://github.com/MJU-MCC/MCC_homepage'>
                            <img src={git} style={{ width: '3vw', marginTop: '0.5vw', marginLeft: '1vw' }} alt="github" />
                        </a>
                        <a href='http://mju-mcc.com'>
                            <img src={link} style={{ width: '3vw', marginTop: '0.5vw', marginLeft: '1vw' }} alt="link" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;
