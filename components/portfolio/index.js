import React from 'react';
import PortfolioProject from './project';

const style = {
    gridColumnStart: 2,
    gridColumnEnd: 4
};

function Portfolio() {
    return <section className='section-portfolio'>
        <div className='xl:container xl:mx-auto nav-container'>
            <h2>My latest works</h2>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-4'>
                <PortfolioProject url='#' src='/img/web/food.jpg' text='Food - React.js' />
                <PortfolioProject url='https://mamolio.com/' src='/img/web/store.jpg' text='store - React.js' style={{ filter: 'brightness(95%)' }} />
                <PortfolioProject url='#' src='/img/web/app-2.jpg' text='Food - React Native' />
                <PortfolioProject url='#' src='/img/web/app.jpg' text='App - React Native' />
                <PortfolioProject url='#' src='/img/web/dash.jpg' text='dashboard- React Admin' />
                <PortfolioProject url='#' src='/img/web/bk.jpg' text='Sushi Food - React.js' style={style} layout='fill' />
                <PortfolioProject url='#' src='/img/web/marketplace.png' text='Marketplace- React Native' />
            </div>
        </div>
    </section >
}

export default Portfolio;