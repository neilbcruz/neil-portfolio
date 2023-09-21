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
                            <h3>Demon Slayer: Swordsmith Village Arc</h3>
                            <img onClick={() => newTab('https://anilist.co/anime/145139/Kimetsu-no-Yaiba-Katanakaji-no-Satohen')} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx145139-rRimpHGWLhym.png'} alt='Mushoku Tensei II cover' />
                        </div>
                    </div>
                    <div className='anime__card'>
                        <div className='anime__card-info'>
                            <h3>Rurouni Kenshin 2023</h3>
                            <img onClick={() => newTab('https://anilist.co/anime/142877/Rurouni-Kenshin-Meiji-Kenkaku-Romantan-2023')} src={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142877-wNH2KPu6LYF4.jpg'} alt='Kenshin 2023 cover' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}