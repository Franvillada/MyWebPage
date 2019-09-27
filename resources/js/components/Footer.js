import React,{Component} from 'react'

export default class Footer extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="footer" className="footer">
                <div>
                    <a href="#">
                        <img className="social-logo" src="img/twitter-logo.svg" alt="twitter logo"></img>
                    </a>
                    <a href="#">
                        <img className="social-logo" src="img/linkedin-logo.svg" alt="linkedin logo"></img>
                    </a>
                    <a href="#">
                        <img className="social-logo" src="img/github-logo.svg" alt="github logo"></img>
                    </a>
                    <a href="#">
                        <img className="social-logo" src="img/ig-logo.svg" alt="ig logo"></img>
                    </a>
                    <a href="#">
                        <img className="social-logo" src="img/email-logo.svg" alt="email logo"></img>
                    </a>
                    
                </div>
                <p>Copyright 2019 Francisco Villada</p>
            </div>
        )
    }
}