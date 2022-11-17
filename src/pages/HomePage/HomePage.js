import './HomePage.scss';
import { HashLink } from 'react-router-hash-link';

import About from '../../components/About/About';

export default function HomePage() {
    return (
        <>
            <div className='home'>
                <div className='home__nav'>
                    <HashLink to='#about'>
                        <h3>About</h3>
                    </HashLink>
                    <HashLink to='#projects'>
                        <h3>Projects</h3>
                    </HashLink>
                    <HashLink to='#contact'>
                        <h3>Contact</h3>
                    </HashLink>
                </div>
                <About />
            </div>
        </>
    )
}