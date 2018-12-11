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

    render() {
        return (
            <div id='nav'>
                <h1 onClick={() => window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })}>Waltham Vision Care</h1>
                <nav>
                    <button onClick={() => this.scroll('about')}>About Us</button>
                    <button onClick={() => this.scroll('location')}>Find Us</button>
                    <button onClick={() => this.scroll('contact')}>Contact Us</button>
                </nav>
            </div>
        )
    }
}