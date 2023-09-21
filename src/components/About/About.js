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
                    <p className='p-large'>Welcome to my website where you can know a little bit more about me.</p>
                    <p className='p-large'>I have great interest in technology and spend a lot of my time in the internet. I took a Web Development Bootcamp and received hands-on experience on using web development languages and skills. I like to learn other new things aside from these skills and to keep on challenging myself.</p>
                    <p className='p-large'>I enjoy working with other people, but I also don't get lonely when I do have to work by myself as long as I can listen to something.</p>
                    <p className='p-large'>Outside of this, I like to play video games, watch anime, and read manga.</p>
                </div>
            </div>
        </>
    )
}