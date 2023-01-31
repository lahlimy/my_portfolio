import React from 'react';
import Link from 'next/link';
import Scroll from '../../utils/scroll';

const scroll = section => {
    Scroll(section);
}

function List({ name, section }) {
    return <li><button onClick={() => scroll(section)}>{name}</button></li>
}

function talk() {
    window.location.href = "https://www.linkedin.com/in/lahlimy/"
}


function Navigation() {
    return <nav>
        <div className='xl:container xl:mx-auto nav-container'>
            <Link href='/'>
                <a className='text-[300%] sm:text-[500%] nav-logo'>AL</a>
            </Link>

            <ul className='hidden sm:block nav-ul'>
                <List section='.section-header' name='About' />
                <List section='.section-services' name='Services' />
                <List section='.section-portfolio' name='Portfolio' />
                <List section='.section-timelines' name='timelines' />
            </ul>

            <button className='hidden sm:block nav-lets_talk btn-base btn-ghost' onClick={talk}>Let&apos;s talk</button>
        </div>
    </nav >
}

export default Navigation;