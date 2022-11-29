import './Games.scss';

export default function Games() {
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
                            <h3>Star Ocean: The Divine Force</h3>
                            <img src={'https://pbs.twimg.com/media/FcsjXZIWYAYjlYm.jpg:large'} alt='Star Ocean 6 cover image' />
                        </div>
                    </div>
                    <div className='games__card'>
                        <div className='games__card-info'>
                            <h3>Pokemon Violet</h3>
                            <img src={'https://assets-prd.ignimgs.com/2022/08/03/pokemon-violet-1659542326365.jpg'} alt='Pokemon Violet cover image' />
                        </div>
                    </div>
                    <div className='games__card'>
                        <div className='games__card-info'>
                            <h3>Xenoblade Chronicles 3</h3>
                            <img src={'https://images.nintendolife.com/1b9a21fa2c5ad/xenoblade-chronicles-3.original.jpg'} alt='Xenoblade 3 cover image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}