import './Anime.scss';

export default function Anime() {
    const newTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    return (
        <>
            <div className='anime' id='anime'>
                <div className='anime__title'>
                    <h2>ANIME</h2>
                </div>
                <div className='anime__info'>
                    <p className='p-large'>I don't particularly have a genre preference as long as it has good <span className='anime__info-name'>STORY</span>, <span className='anime__info-name'>CHARACTER</span>, and <span className='anime__info-name'>ANIMATION</span>!</p>
                </div>
                <h3>Currently Watching</h3>
                <div className='anime__container'>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>VINLAND SAGA SEASON 2</h3>
                            <img onClick={() => newTab('https://anilist.co/anime/136430/VINLAND-SAGA-SEASON-2')} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx136430-f8Iza5GEynRW.jpg'} alt='VINLAND SAGA SEASON 2 cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>TRIGUN STAMPEDE</h3>
                            <img onClick={() => newTab('https://anilist.co/anime/151040/TRIGUN-STAMPEDE')} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151040-zQEvp8bCA987.png'} alt='TRIGUN STAMPEDE cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>Blue Lock</h3>
                            <img onClick={() => newTab('https://anilist.co/anime/137822/Blue-Lock')} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx137822-4dVWMSHLpGf8.png'} alt='Blue Lock cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>NieR:Automata Ver1.1a</h3>
                            <img onClick={() => newTab('https://anilist.co/anime/145665/NieRAutomata-Ver11a')} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145665-kiAZX3DsbBnl.jpg'} alt='NieR:Automata Ver1.1a cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}