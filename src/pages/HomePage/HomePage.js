import './HomePage.scss';
import { HashLink } from 'react-router-hash-link';
// import { useEffect } from 'react';

import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contacts from '../../components/Contacts/Contacts';

// GA 4 //
import ReactGA from 'react-ga4';
ReactGA.initialize('G-3ZNEXY83BD')

ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname,
});

export default function HomePage() {
    return (
        <>
            <div className='home'>
                <div className='home__nav'>
                    <HashLink to='#about'>
                        <h3>About</h3>
                    </HashLink>
                    <HashLink to='#skills'>
                        <h3>Skills</h3>
                    </HashLink>
                    <HashLink to='#projects'>
                        <h3>Projects</h3>
                    </HashLink>
                    <HashLink to='#contacts'>
                        <h3>Contacts</h3>
                    </HashLink>
                </div>
                <About />
                <Skills />
                <Projects />
                <Contacts />
            </div>
        </>
    )
}