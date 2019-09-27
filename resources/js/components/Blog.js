import React, {Component} from 'react'

export default class Blog extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="blog" className="blog">
                <h3>I also like to share my experiences...</h3>
                <p>Visit my blog where I share all my experiences related to the development of the web. I am very open to all kinds of criticisms and recommendatios in each of my posts.</p>
                <a href="#">BLOG</a>
            </div>
        )
    }
}