import './Projects.scss';

import Backlog1 from '../../assets/images/backlogger-1.png';
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
import Axios from '../../assets/icons/axios.png';

export default function Projects() {
    return (
        <>
            <div className='projects' id='projects'>
                <div className='projects__title'>
                    <h2>PROJECTS</h2>
                </div>
                <div className='projects__container'>
                    <div className='projects__card'>
                        <h2>Backlogger</h2>
                        <div className='projects__info'>
                            <p className='p-large'><span className='projects__info-title'>Backlogger</span> is a user app to help keep track of your backlog of games and as well as finished games. Search for games and add them to your profile where you can edit, delete, or check the information of games.</p>
                        </div>
                        <div className='projects__img'>
                            <img src={Backlog1} alt='backlogger image example' />
                        </div>
                        <div className='projects__tech'>
                            <div className='projects__tech-icon'>
                                <h4>React</h4>
                                <img src={ReactJs} alt='react icon nucleus' />
                            </div>
                            <div className='projects__tech-icon'>
                                <h4>Sass</h4>
                                <img src={Sass} alt='sass icon circle pink fancy s' />
                            </div>
                            <div className='projects__tech-icon'>
                                <h4>Axios</h4>
                                <img src={Axios} alt='axios logo two half arrows pointing separate directions vertically' />
                            </div>
                            <div className='projects__tech-icon'>
                                <h4>Node</h4>
                                <img src={NodeJs} alt='node icon text' />
                            </div>
                            <div className='projects__tech-icon'>
                                <h4>Express</h4>
                                <img src={Express} alt='express icon the letter e and x' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}