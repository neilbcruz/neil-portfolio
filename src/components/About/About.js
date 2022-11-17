import './About.scss';

export default function About() {
    return (
        <>
            <div className='about' id='about'>
                <div className='about__title'>
                    <h2>ABOUT ME</h2>
                </div>
                <div className='about__info'>
                    <p className='p-large'>HI! My name is <span className='about__info-name'>NEIL CRUZ</span>!</p>
                    <p className='p-large'>I'm a <span className='about__info-text'>recent graduate from the Web Development Bootcamp at BrainStation</span>. Before BrainStation, I used to work in the hospitality. I used to work in restaurants, doing catering for events, and eventually in the food customer service business.</p>
                    <p className='p-large'>I enjoy working with other people, but I also don't get lonely when I do have to work by myself as long as I can listen to something.</p>
                    <p className='p-large'>I have great interest in technology and the web but knew little about it. So I took it upon myself to self study and eventually went on to take a Web Development Bootcamp. I like to learn new things and to keep on challenging myself. I like to continue to grow as a Web Developer, whether it be from personal study or from my peers or seniors.</p>
                </div>
            </div>
        </>
    )
}