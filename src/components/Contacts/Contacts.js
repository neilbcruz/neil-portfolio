import './Contacts.scss';

import LinkedIn from '../../assets/icons/linkedin.png';
import GitHub from '../../assets/icons/github.png';
import GoogleMail from '../../assets/icons/googlemail.png';

export default function Contacts() {
    const newTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <div className='contacts' id='contacts'>
                <div className='contacts__title'>
                    <h2>CONTACTS</h2>
                </div>
                <div className='contacts__info'>
                    <p className='p-large'><span className='contacts__info-name'>Reach</span> Out!</p>
                </div>
                <div className='contacts__logos'>
                    <img onClick={() => window.location = 'mailto:neilbcruz@gmail.com'} src={GoogleMail} />
                    <img onClick={() => newTab('https://www.linkedin.com/in/neil-cruz/')} src={LinkedIn} />
                    <img onClick={() => newTab('https://github.com/neilbcruz')} src={GitHub} />
                </div>
            </div>
        </>
    )
}