import './Anime.scss';

export default function Anime() {
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
                            <h3>Gundam: The Witch from Mercury</h3>
                            <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139274-nzHOkKMoCxvD.png'} alt='Gundam Witch cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>Chainsaw Man</h3>
                            <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png'} alt='Chainsaw Man cover' />
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
                            <h3>SpyxFamily Part 2</h3>
                            <img src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142838-ECZSqfknAqAT.jpg'} alt='SpyxFamily Part 2 cover' />
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