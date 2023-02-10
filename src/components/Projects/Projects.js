import './Projects.scss';

import LetysWebsite from '../../assets/images/letyswebsite.png';
import Sass from '../../assets/icons/sass.png';
import ReactJs from '../../assets/icons/react.png';
import NodeJs from '../../assets/icons/nodejs.png';
import Express from '../../assets/icons/express.png';
import Axios from '../../assets/icons/axios.png';
import Figma from '../../assets/icons/figma.png';

export default function Projects() {
    const newTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

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
                        <div className='projects__space'>
                            <div className='projects__media'>
                                <iframe
                                    src='https://www.youtube.com/embed/GGaR-1bFOfw'
                                    frameborder='0'
                                    width="853"
                                    height="480"
                                    allow='autoplay; encrypted-media'
                                    allowfullscreen
                                    title='video'
                                />
                            </div>
                            <div className='projects__tech'>
                                <div className='projects__tech-icon one'>
                                    <h4>React</h4>
                                    <img src={ReactJs} alt='react icon nucleus' />
                                </div>
                                <div className='projects__tech-icon two'>
                                    <h4>Sass</h4>
                                    <img src={Sass} alt='sass icon circle pink fancy s' />
                                </div>
                                <div className='projects__tech-icon three'>
                                    <h4>Axios</h4>
                                    <img src={Axios} alt='axios logo two half arrows pointing separate directions vertically' />
                                </div>
                                <div className='projects__tech-icon four'>
                                    <h4>Node</h4>
                                    <img src={NodeJs} alt='node icon text' />
                                </div>
                                <div className='projects__tech-icon five'>
                                    <h4>Express</h4>
                                    <img src={Express} alt='express icon the letter e and x' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='projects__card'>
                        <h2>Lety's Buko Pie Website</h2>
                        <div className='projects__info'>
                            <p className='p-large'><span className='projects__info-title'>Lety's Buko Pie Website</span> is an updated website of the store that I made. The website is a Single Page Application composed of only front-end. Check out the website by clicking <span className='projects__info-link' onClick={() => newTab('https://letysbukopie.com/')}>here</span> or the image.</p>
                        </div>
                        <div className='projects__space'>
                            <div className='projects__media'>
                                <img onClick={() => newTab('https://letysbukopie.com/')} src={LetysWebsite} alt='Letys Website Home Page showing only nav bar and hero' />
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
                                    <h4>Figma</h4>
                                    <img src={Figma} alt='figma icon which is a lowercase f with 5 different colors to make it up' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}