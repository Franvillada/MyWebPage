import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Menu from './Menu'
import Banner from './Banner'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer'

export default class App extends Component {
    render() {
        return (
            <div id="app">
                <Menu />
                <Banner />
                <AboutMe />
                <Projects />
                <Blog />
                <Contact />
                <Footer />
            </div>
        )
    }
}

if(document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
