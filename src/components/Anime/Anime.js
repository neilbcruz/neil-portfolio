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
                            <h3>Jujutsu Kaisen 2nd Season</h3>
                            <img onClick={() => newTab('https://anilist.co/anime/145064/Jujutsu-Kaisen-2nd-Season')} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145064-5fa4ZBbW4dqA.jpg'} alt='JJK SEASON 2 cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>Arknights: PERISH IN FROST</h3>
                            <img onClick={() => newTab('https://anilist.co/anime/158895/Arknights-Touin-Kiro')} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx158895-QPy3ElZBKziT.jpg'} alt='Arknights 2 cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>Shangri-La Frontier</h3>
                            <img onClick={() => newTab('https://anilist.co/anime/151970/ShangriLa-Frontier')} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151970-qFKtRhOaSqa0.jpg'} alt='Kenshin 2023 cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}