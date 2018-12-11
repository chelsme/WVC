import React, { Component } from 'react';

export default class Nav extends Component {
    scroll = (nav) => {
        let section = document.getElementById(nav)
        // section.scrollIntoView({ block: 'center', behavior: 'smooth' })
        window.scrollTo({
            top: section.offsetTop - 90,
            behavior: "smooth"
        })
        console.log(nav)
    }

    home = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    render() {
        return (
            <div id='nav'>
                <h1 onClick={this.home}>Waltham Vision Care</h1>
                <nav>
                    <p className='navButton' id='topButton' onClick={this.home}>Home</p>
                    <p className='navButton' onClick={() => this.scroll('about')}>About Us</p>
                    <p className='navButton' onClick={() => this.scroll('location')}>Find Us</p>
                    <p className='navButton' onClick={() => this.scroll('contact')}>Contact Us</p>
                </nav>
            </div>
        )
    }
}