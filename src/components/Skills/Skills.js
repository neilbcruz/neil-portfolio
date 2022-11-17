import './Skills.scss';

import Html from '../../assets/icons/html.png';
import Css from '../../assets/icons/css.png';
import Sass from '../../assets/icons/sass.png';
import Javascript from '../../assets/icons/javascript.png';
import ReactJs from '../../assets/icons/react.png';
import NodeJs from '../../assets/icons/nodejs.png';
import Express from '../../assets/icons/express.png';
import Jwt from '../../assets/icons/JWT.png';
import MySql from '../../assets/icons/mysql.png';
import Git from '../../assets/icons/git.png';
import Agile from '../../assets/icons/agile.png';

export default function Skills() {
    return (
        <>
            <div className='skills' id='skills'>
                <div className='skills__title'>
                    <h2>SKILLS</h2>
                </div>
                <div className='skills__info'>
                    <div className='skills__box'>
                        <div className='skills__box-icon'>
                            <h4>HTML</h4>
                            <img src={Html} alt='html5 icon' />
                        </div>
                        <div className='skills__box-icon'>
                            <h4>CSS</h4>
                            <img src={Css} alt='css3 icon' />
                        </div>
                        <div className='skills__box-icon'>
                            <h4>Sass</h4>
                            <img src={Sass} alt='sass icon circle pink fancy s' />
                        </div>
                        <div className='skills__box-icon'>
                            <h4>Javascript</h4>
                            <img src={Javascript} alt='javascript icon yellow box with js' />
                        </div>
                        <div className='skills__box-icon'>
                            <h4>React</h4>
                            <img src={ReactJs} alt='react icon nucleus' />
                        </div>
                    </div>
                    <div className='skills__box'>
                        <div className='skills__box-icon'>
                            <h4>Node</h4>
                            <img src={NodeJs} alt='node icon word node' />
                        </div>
                        <div className='skills__box-icon'>
                            <h4>Express</h4>
                            <img src={Express} alt='express icon letter e and x' />
                        </div>
                        <div className='skills__box-icon'>
                            <h4>MySQL</h4>
                            <img src={MySql} alt='mysql icon word mysql with dolphin' />
                        </div>
                        <div className='skills__box-icon'>
                            <h4>JWT</h4>
                            <img src={Jwt} alt='jwt icon colorful circular design' />
                        </div>
                    </div>
                    <div className='skills__box'>
                        <div className='skills__box-icon'>
                            <h4>Git</h4>
                            <img src={Git} alt='git logo orange color' />
                        </div>
                        <div className='skills__box-icon'>
                            <h4>Agile Methodology</h4>
                            <img src={Agile} alt='agile methodology icon' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}