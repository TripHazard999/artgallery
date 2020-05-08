import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../../constants/links';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <nav className='header-nav'>
                <Link className='header-nav-item' to={links.HOME_PAGE}>Home</Link>
                <Link className='header-nav-item' to={links.ARTISTS_PAGE}>Artists</Link>
                <Link className='header-nav-item' to={links.PAINTING_STYLES_PAGE}>Painting Styles</Link>
                <Link className='header-nav-item' to={links.GALLERY_PAGE}>Gallery</Link>
                <Link className='header-nav-item' to={links.LOGIN_PAGE}>Login</Link>
            </nav>
        </header>
    );
};
export default Header;
