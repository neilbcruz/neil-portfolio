import './PageHeader.scss';
import { NavLink } from 'react-router-dom';

export default function PageHeader() {
    return (
        <>
        <header className='header'>
            <div className='header__top'>
                <h1>NEIL CRUZ</h1>
            </div>
            <div className='header__nav'>
                <NavLink to='/'>
                    <h4>WEB DEV</h4>
                </NavLink>
                <NavLink to='/geek'>
                    <h4>HOBBIES</h4>
                </NavLink>
            </div>
        </header>
        </>
    )
}