import React from 'react';
import Navigation from '../navigation';
import Link from 'next/link';
import scroll from '../../utils/scroll';

function hireMe() {
    window.location.href = 'https://www.upwork.com/freelancers/~01c808bcca023bb26f';
}

function portfolio() {
    scroll('.section-portfolio');
}

function Analytic(props) {
    const style = { display: 'block' }
    const typeStr = props.type.split('\n').map((str, i) => <span key={`Analytic Type${i}`} style={style}>{str}</span>);

    return <div className='header-analytic'>
        <span className='header-analytic-total'>{props.total}</span>
        <span className='header-analytic-type'>{typeStr}</span>
    </div>
}

function Header() {
    return <header className='section-header'>
        <Navigation />

        <div className='xl:container xl:mx-auto'>
            <div className='header-container flex flex-col md:flex-row'>
                <div className='w-full md:w-[50%]'>
                    <div className='header-name'>Hy there,<br />I&apos;m Aziz.</div>
                    <p className='header-about'>
                        I&apos;m a <Link href='/'><a>web</a></Link> and <Link href='/'><a>mobile developer</a></Link>, and currently working as a full-time freelancer, I use modern technologies to develop a product from the ground up to a fully high-quality one.
                    </p>

                    <button className='header-hire_me btn-base btn-full' onClick={hireMe}>Hire me</button>
                    <button className='header-hire_me btn-base btn-ghost' onClick={portfolio}>Portfolio</button>

                    <div className='flex flex-row header-analytics'>
                        <Analytic total='+13' type={'Happy clients on work\nworldwide'} />
                        <Analytic total='+38' type={'Completed projects'} />
                    </div>
                </div>

                <div className='w-full md:w-[50%] hidden md:block'>
                    <img className='header-profile_picture' src='https://media.licdn.com/dms/image/D4E03AQHhUWES6ecTzg/profile-displayphoto-shrink_200_200/0/1704378589509?e=1712188800&v=beta&t=72zxt7T5qoWqDBPnQFKkj2nzkdGMenrj4o-K8B43Ffk' alt='profile' />
                </div>
            </div>
        </div>
    </header>
}

export default Header;
