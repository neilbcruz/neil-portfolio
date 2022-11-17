import './HobbiesPage.scss';
import { HashLink } from 'react-router-hash-link';

export default function HobbiesPage() {
    return (
        <>
            <div className='hobbies'>
                <div className='hobbies__nav'>
                    <HashLink to='#games'>
                        <h3>Games</h3>
                    </HashLink>
                    <HashLink to='#anime'>
                        <h3>Anime</h3>
                    </HashLink>
                </div>
            </div>
        </>
    )
}