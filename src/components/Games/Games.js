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
                            <h3>Final Fantasy XVI</h3>
                            <img onClick={() => newTab('https://na.finalfantasyxvi.com/')} src={'https://assets-prd.ignimgs.com/2021/08/05/final-fantasy-xvi-button-1628180674117.jpg'} alt='FF Origins cover' />
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
                            <h3>Armored Core VI Fires of Rubicon</h3>
                            <img onClick={() => newTab('https://en.bandainamcoent.eu/armored-core/armored-core-vi-fires-of-rubicon')} src={'https://image.api.playstation.com/vulcan/ap/rnd/202304/2800/09d5b936da100fb0b96a2cdaa96a835e143b41b3e3ae0054.png'} alt='AC6 cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}