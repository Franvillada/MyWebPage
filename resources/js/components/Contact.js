import React,{Component} from 'react'

export default class Contact extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="contact" className="contact">
                <div>
                    <p>Interested in starting a project?</p>
                    <a href="/contact">Contact me</a>
                </div>    
            </div>
        )
    }
}