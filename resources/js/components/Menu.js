import React, {Component} from 'react'

export default class Menu extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="menu" className="menu">
                <div className="left-side-menu">
                    <a href="#about-me">About Me</a>
                    <a href="#project">Portfolio</a>
                </div>
                <div className="right-side-menu">
                    <a href="#blog">Blog</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        )
    }
}