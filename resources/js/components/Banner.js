import React, {Component} from 'react'

export default class Banner extends Component{
    render(){
        return(
            <div id="banner" className="banner">
                <div>
                    <img className="logo" src="img/logo.svg" alt="logo"></img>
                    <h1>Front-End Web Developer</h1>
                </div>
                <img className="background" src="img/background-banner.svg" alt="background"></img>
            </div>
        )
    }    
}