import './HobbiesPage.scss';
import { HashLink } from 'react-router-hash-link';

import Games from '../../components/Games/Games';
import Anime from '../../components/Anime/Anime';
import Contacts from '../../components/Contacts/Contacts';

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
                <Games />
                <Anime />
                <Contacts />
            </div>
        </>
    )
}