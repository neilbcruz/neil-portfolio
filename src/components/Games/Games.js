import './Games.scss';

export default function Games() {
    const newTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <div className='games' id='games'>
                <div className='games__title'>
                    <h2>GAMES</h2>
                </div>
                <div className='games__info'>
                    <p className='p-large'>My favourite genres of video games are <span className='games__info-name'>JRPG</span>, <span className='games__info-name'>STRATEGY</span>, and <span className='games__info-name'>FIGHTING</span> games!</p>
                </div>
                <h3>Currently Playing</h3>
                <div className='games__container'>
                    <div className='games__card'>
                        <div className='games__card-info'>
                            <h3>2nd Super Robot Wars Original Generation</h3>
                            <img onClick={() => newTab('https://en.wikipedia.org/wiki/2nd_Super_Robot_Wars_OG')} src={'https://m.media-amazon.com/images/M/MV5BOTM0ZDVlYzEtMWNlYS00OWQ3LWI5ZTUtYTE2ZmY0ZDQ0ODBhXkEyXkFqcGdeQXVyMzk5NjYxNDU@._V1_.jpg'} alt='FF Origins cover' />
                        </div>
                    </div>
                    <div className='games__card'>
                        <div className='games__card-info'>
                            <h3>Street Fighter 6</h3>
                            <img onClick={() => newTab('https://www.streetfighter.com/6')} src={'https://image.api.playstation.com/vulcan/ap/rnd/202211/1407/XFU0aPBvtm3W2od1ZvhByAOv.png'} alt='SF6 cover' />
                        </div>
                    </div>
                    <div className='games__card'>
                        <div className='games__card-info'>
                            <h3>Granblue Fantasy Versus Rising</h3>
                            <img onClick={() => newTab('https://rising.granbluefantasy.jp/en/')} src={'https://cdn.akamai.steamstatic.com/steam/apps/2157560/capsule_616x353.jpg?t=1701673043'} alt='AC6 cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}