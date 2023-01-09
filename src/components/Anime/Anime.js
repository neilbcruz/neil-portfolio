import './Anime.scss';

export default function Anime() {
    return (
        <>
            <div className='anime' id='anime'>
                <div className='anime__title'>
                    <h2>ANIME</h2>
                </div>
                <div className='anime__info'>
                <p className='p-large'>I don't particularly have a genre preference as long as it has good <span className='anime__info-name'>STORY</span>, <span className='anime__info-name'>CHARACTERS</span>, and <span className='anime__info-name'>ANIMATION</span>!</p>
                </div>
                <h3>Currently Watching</h3>
                <div className='anime__container'>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>Vinland Saga Season 2</h3>
                            <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx136430-f8Iza5GEynRW.jpg'} alt='Vinland Saga cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>NieR:Automata Ver1.1a</h3>
                            <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145665-kiAZX3DsbBnl.jpg'} alt='NieR:Automata Ver1.1a cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>Blue Lock</h3>
                            <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx137822-4dVWMSHLpGf8.png'} alt='Blue Lock cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>TRIGUN STAMPEDE</h3>
                            <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151040-zQEvp8bCA987.png'} alt='TRIGUN STAMPEDE cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>Mob Psycho III</h3>
                            <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140439-qpBzXkvVqSx3.jpg'} alt='Mob Psycho III cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>Arknights: Prelude to Dawn</h3>
                            <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx140660-iJAS9omOJdzU.jpg'} alt='Arknights: Prelude to Dawn cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}