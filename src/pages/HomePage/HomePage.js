import './HomePage.scss';
import { HashLink } from 'react-router-hash-link';

import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';

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
                    <HashLink to='#contact'>
                        <h3>Contact</h3>
                    </HashLink>
                </div>
                <About />
                <Skills />
                <Projects />
            </div>
        </>
    )
}