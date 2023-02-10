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
                            <h3>Stranger of Paradise: FFO</h3>
                            <img onClick={() => newTab('https://www.square-enix-games.com/sopffo/en-us/')} src={'https://assets-prd.ignimgs.com/2022/02/15/stranger-of-paradise-button-fn-1644883544038.jpg'} alt='FF Origins cover' />
                        </div>
                    </div>
                    <div className='games__card'>
                        <div className='games__card-info'>
                            <h3>Guilty Gear -STRIVE-</h3>
                            <img onClick={() => newTab('https://www.guiltygear.com/ggst/en/')} src={'https://assets-prd.ignimgs.com/2021/04/09/guilty-gear-strive-1617935028610.jpg'} alt='GG STRIVE cover' />
                        </div>
                    </div>
                    <div className='games__card'>
                        <div className='games__card-info'>
                            <h3>Fire Emblem ENGAGE</h3>
                            <img onClick={() => newTab('https://www.nintendo.com/en-ca/store/products/fire-emblem-engage-switch/')} src={'https://assets.nintendo.com/image/upload/ar_16:9,c_limit,w_656/b_white/f_auto/q_auto/ncom/en_US/games/switch/f/fire-emblem-engage-switch/hero'} alt='Xenoblade 3 cover' />
                        </div>
                    </div>
                    <div className='games__card'>
                        <div className='games__card-info'>
                            <h3>Hogwarts Legacy</h3>
                            <img onClick={() => newTab('https://www.hogwartslegacy.com/en-ca')} src={'https://assets-prd.ignimgs.com/2022/05/24/hogwarts-legacy-button-fin-1653421326559.jpg'} alt='Hogwarts Legacy cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}